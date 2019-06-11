<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\DynamicPageRepository;
use App\Repository\ActivityRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Entity\ContactPlaning;
use App\Form\ContactPlaningType;
use App\Entity\Activity;

class ContactController extends AbstractController
{

    private $selectedActivities = array();

    /**
     * @Route("/contact",  name="contact")
     */
    public function contact(Request $request, DynamicPageRepository $pageRepository, ActivityRepository $activityRepository)
    {

        if(!$dymanicPage = $pageRepository->findOneBy([
            'pageName'=>'contact',
            'language'=>'de'
        ]))

        throw new NotFoundHttpException();


        $contact = new ContactPlaning();
        $form = $this->createForm(ContactPlaningType::class, $contact, ['locale' => 'de']);
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
        if (isset($request->cookies->all()['ids']))
        {
            $ids = $request->cookies->all()['ids'];
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
            'dynamic_page_id' => $dymanicPage->getId(),
            'page' => $dymanicPage,
        ]);
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
}
