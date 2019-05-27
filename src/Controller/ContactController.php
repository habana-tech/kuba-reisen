<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\DynamicPageRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Entity\ContactPlaning;
use App\Form\ContactPlaningType;
use App\Entity\Activity;

class ContactController extends AbstractController
{

    private $selectedActivities = array();

    /**
     * @Route("/{_locale}/contact", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="contact")
     * @Route("/contact",  defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"})
     */
    public function contact(Request $request, DynamicPageRepository $pageRepository)
    {
        if(!$dymanicPage = $pageRepository->findOneBy([
            'pageName'=>'contact',
            'language'=>$request->getLocale()
        ]))

            throw new NotFoundHttpException();


        $contact = new ContactPlaning();
        $form = $this->createForm(ContactPlaningType::class, $contact, ['locale' => $request->getLocale()]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($contact);
            $entityManager->flush();

            //TODO: show a sended form page

            //return $this->redirectToRoute('post_index');
        }

        return $this->render('frontend/contact.html.twig', [
            'contact' => $contact,
            'form' => $form->createView(),
            'dynamic_page_id' => $dymanicPage->getId(),
            'page' => $dymanicPage,
        ]);
    }

    /**
     * @Route("/{_locale}/addActivity/{id}", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="addActivity")
     */
    public function addActivity(Request $request, Activity $activity){

        array_push($this->selectedActivities, $activity);
        return $this->json(['yes'=>1]);
    }

    /**
     * @Route("/{_locale}/getActivitiesApi", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="getActivities")
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
