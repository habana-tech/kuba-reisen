<?php

namespace App\Controller;

use App\Entity\ContactPlaning;
use App\Form\ContactPlaningType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class FrontendController extends AbstractController
{
    /**
     * @Route("/", name="frontend")
     */
    public function index()
    {
        return $this->render('frontend/index.html.twig', [
            'controller_name' => 'FrontendController',
        ]);
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact(Request $request)
    {
        $contact = new ContactPlaning();
        $form = $this->createForm(ContactPlaningType::class, $contact, ['locale'=>$request->getLocale()]);
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
        ]);

    }



}
