<?php

namespace App\Controller;

use App\Repository\InterestRepository;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\DynamicPageRepository;
use App\Repository\ActivityRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Entity\ContactPlaning;
use App\Form\ContactPlaningType;
use App\Entity\Activity;
use Twig\Error\LoaderError;

class ContactController extends AbstractController
{

    /**
     *
     * @Route("/kontaktieren/{travel}",
     *     defaults={"travel": null},
     *       name="contact")
     * @param Request $request
     * @param $travel
     * @param ActivityRepository $activityRepository
     * @param DynamicPageRepository $dynamicPageRepository
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function contact(Request $request, $travel, ActivityRepository $activityRepository,
                            DynamicPageRepository $dynamicPageRepository, InterestRepository $interestRepository)
    {

        $page = $dynamicPageRepository->findOneBy([
            'name'=>'contact'
        ]);

        if(!$page)
            throw new NotFoundHttpException();

        $fromTravel = $travel == 'raise';

        $contact = new ContactPlaning();
        $form = $this->createForm(ContactPlaningType::class, $contact, [
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

        $interests = $interestRepository->findAll();

        return $this->render('frontend/contact.html.twig', [
            'contact' => $contact,
            'activities' => $activities,
            'interests' => $interests,
            'form' => $form->createView(),
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'from_travel' => $fromTravel
        ]);
    }

    /**
     * @Route("/processContact", name="processContact", methods={"POST"})
     * @throws Exception
     */
    public function processContact(Request $request,  \Swift_Mailer $mailer, ActivityRepository $repository, UserRepository $userRepository){

        $contact = new ContactPlaning();
        $form = $this->createForm(ContactPlaningType::class, $contact);
        $form->handleRequest($request);

        $allInterests = '';
        //if there are interest checked in the form...
        if($interest = $request->get('interest'))
        {
//            dump($interest);
            $allInterests .= "\nInterests: \n";
            foreach($interest as $index => $item)
                $allInterests .= $item . ', ';
        }
        //if there are products selected in the cookie...
        if($ids = $request->cookies->get('products_cart')){
            $names = $repository->findNamesCollection(explode(',',$ids));
//            dump($names);
            $allInterests .= "\n\nActivities: \n";
            foreach($names as $index => $item)
                $allInterests .= $item['name'] .', ';
        }
        $contact->setInterests($allInterests);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($contact);
            $entityManager->flush();

            $this->sendContactEmailNotification($contact, $mailer, $userRepository);
            return $this->json(['status'=>'sucess', 'id'=>$contact->getId()]);
            //TODO: show a sended form page

            //return $this->redirectToRoute('post_index');
        }

        
        return $this->json(['status'=>'error', 'errors'=>$form->getErrors(), 400]);
    }

    private function sendContactEmailNotification(ContactPlaning $contact, \Swift_Mailer $mailer, UserRepository $userRepository){

        $users = $userRepository->findAll();
        $adminEmail = [];
        $adminEmail[] = 'kubareisenkontactieren@meatmemi.33mail.com'; //josue

        foreach ($users as $user) 
            if($user->isAtEmailList())
                $adminEmail[] = $user->getEmail();
        
        if(!$adminEmail)
            throw new Exception("Error Processing Request, no adminEmail avalaible", 1);
            
        $from = ['kontaktieren@kuba-reisen.reisen'=>'kontaktieren kuba-reisen'];

        //Todo: translate the subject
        $message = (new \Swift_Message('Kuba-reisen kontaktieren - '.$contact->getRequestId()))
                ->setFrom($from)
                ->setBcc($adminEmail)
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
            ->setTo($contact->getClientEmail())
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
