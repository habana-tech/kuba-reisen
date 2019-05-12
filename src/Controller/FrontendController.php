<?php

namespace App\Controller;

use App\Entity\ContactPlaning;
use App\Form\ContactPlaningType;
use App\Repository\DynamicPageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

class FrontendController extends AbstractController
{
    /**
     * @Route("/", name="frontend")
     */
    public function index(Request $request, DynamicPageRepository $pageRepository)
    {
        if($dymanicPage = $pageRepository->findOneBy([
            'pageName'=>'index',
            'language'=>$request->getLocale()
        ]))

            return $this->render('frontend/index.html.twig', [
            'controller_name' => 'FrontendController',
            'dynamic_page_id' => $dymanicPage->getId(),
        ]);

        throw new NotFoundHttpException();
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact(Request $request, DynamicPageRepository $pageRepository)
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
