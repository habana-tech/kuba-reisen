<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\DynamicPageRepository;
use App\PageManager\DynamicPageManager;
use App\Repository\ActivityRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Entity\ContactPlaning;
use App\Form\ContactPlaningType;
use App\Entity\Activity;
use App\DataConverter\RequestJsonDataConverter;

class ContactController extends AbstractController
{

    private $selectedActivities = array();

    /**
     * @Route("/kontaktieren",  name="contact")
     */
    public function contact(Request $request,
                            DynamicPageManager $pm,
                            ActivityRepository $activityRepository)
    {

        $pageinfo = [
            'pageName'=>'contact',
            'language'=>'de'
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else {
            $page = $pm->findOneBy($pageinfo);
        }

        if(!$page)
            throw new NotFoundHttpException();


        $contact = new ContactPlaning();
        $form = $this->createForm(ContactPlaningType::class, $contact, [
            'locale' => 'de',
            'action' => $this->generateUrl('processContact')]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($contact);
            $entityManager->flush();

            //TODO: show a sended form page

            //return $this->redirectToRoute('post_index');
        }

        //obtaining activities from cookies
        $activities = [];
        if (isset($request->cookies->all()['products_cart']))
        {
            $ids = $request->cookies->all()['products_cart'];
            $ids = explode(',', $ids);


            foreach(array_unique($ids) as $id){
                $activity = $activityRepository->find($id);
                $activities[] = $activity;
            }
        }

        return $this->render('frontend/contact.html.twig', [
            'contact' => $contact,
            'activities'=>$activities,
            'form' => $form->createView(),
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
        ]);
    }

    /**
     * @Route("/processContact", name="processContact", methods={"POST"})
     */
    public function processContact(Request $request,  \Swift_Mailer $mailer, ActivityRepository $repository){

        $contact = new ContactPlaning();
        $form = $this->createForm(ContactPlaningType::class, $contact);
        $form->handleRequest($request);

        $allInterests = '';
        //if there are interest checked in the form...
        if($interest = $request->get('interest'))
        {
            dump($interest);
            $allInterests .= "\nInterests: \n";
            foreach($interest as $index => $item)
                $allInterests .= $item . ', ';
        }
        //if there are products selected in thne cookie...
        if($ids = $request->cookies->get('products_cart')){
            $names = $repository->findNamesCollection(explode(',',$ids));
            dump($names);
            $allInterests .= "\n\nActivities: \n";
            foreach($names as $index => $item)
                $allInterests .= $item['name'] .', ';
        }
        $contact->setInterests($allInterests);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($contact);
            $entityManager->flush();

            $this->sendContactEmailNotification($contact, $mailer);
            return $this->json(['status'=>'sucess', 'id'=>$contact->getId()]);
            //TODO: show a sended form page

            //return $this->redirectToRoute('post_index');
        }

        
        return $this->json(['status'=>'error', 'errors'=>$form->getErrors(), 400]);
    }

    /**
     * @Route("/addActivity/{id}", name="addActivity")
     */
    public function addActivity(Request $request, Activity $activity){

        array_push($this->selectedActivities, $activity);
        return $this->json(['yes'=>1]);
    }

    /**
     * @Route("/getActivitiesApi", name="getActivities")
     */
    public function getActivitiesApi(){
        $data = array();
        foreach ($this->selectedActivities as $activity)
            array_push($data, array(
               'name'=>$activity.getName(),
                'id'=>$activity.getId(),
            ));

        return $this->json($data);
    }

    private function sendContactEmailNotification(ContactPlaning $contact, \Swift_Mailer $mailer){

        $adminEmail = "josmiguel92@gmail.com";
        $from = ['kontaktieren kuba-reisen'=>'kontaktieren@kuba-reisen.reisen'];
        $bcc = ['josmiguel92@gmail.com', '14ndy15@gmail.com'];

        //Todo: translate the subject
        $message = (new \Swift_Message('Kuba-reisen kontaktieren - '.$contact->getRequestId()))
                ->setFrom($from)
                //TODO: set email to send notifications
                ->setTo($adminEmail)
                ->setBcc($bcc)
                ->setBody(
                    $this->renderView(
                        'emails/contactAdminNotification.html.twig',
                        ['contact' => $contact]
                    ),
                    'text/html','UTF-8'
                )
                ->addPart(
                    $this->renderView(
                        'emails/contactAdminNotification.txt.twig',
                        ['contact' => $contact]
                    ),
                    'text/plain','UTF-8'
                );

            $mailer->send($message);

            //send message to client
            $client_message = (new \Swift_Message('Kuba-reisen kontaktieren - '.$contact->getRequestId()))
            ->setFrom($from)
            //TODO: set email to send notifications
            ->setTo($contact->getClientEmail())
            ->setBcc($bcc)
            ->setBody(
                $this->renderView(
                    'emails/contactClientNotification.html.twig',
                    ['contact' => $contact]
                ),
                'text/html','UTF-8'
            )
            ->addPart(
                $this->renderView(
                    'emails/contactClientNotification.txt.twig',
                    ['contact' => $contact]
                ),
                'text/plain','UTF-8'
            );

        $mailer->send($client_message);
    }
}
