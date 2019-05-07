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

    /**
     * @Route("/endpoint", name="grapes")
     */
    public function endpoint(Request $request)
    {
    
        if ($request->getContentType() != 'json' || !$request->getContent()) {
             throw new BadRequestHttpException('invalid json body');
        }
        
        $data = json_decode($request->getContent(), true);
        //header('Access-Control-Allow-Origin: http://localhost:8080');  
        //header('Content-Type: application/json');
       
        
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new BadRequestHttpException('invalid json body: ' . json_last_error_msg());
        }
        
        $request->request->replace(is_array($data) ? $data : array());
       
       
        $txt = $request->get('gjosue-components');
        
        return $this->json($txt);
    }

}
