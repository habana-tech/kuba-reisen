<?php

namespace App\Controller;

use App\Entity\ContactPlaning;
use App\Entity\Destination;
use App\Form\ContactPlaningType;
use App\Repository\DynamicPageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\PageManager\DynamicPageManager;

class FrontendController extends AbstractController
{
    /**
     * @Route("/{_locale}", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="frontend")
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
            'page' => $dymanicPage,
        ]);

        throw new NotFoundHttpException();
    }

    /**
     * @Route("/{_locale}/page/{page_name}", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="page_show")
     * @Route("/page/{page_name}")
     */
    public function pageShow(Request $request, DynamicPageManager $pm, $page_name)
    {
        $pageinfo = [
            'pageName'=>$page_name,
            'language'=>$request->getLocale()
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesntExist($pageinfo);
        else {
            $page = $pm->findOneBy($pageinfo);
        }

        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/'.$page->getPageTemplate(), [
            'controller_name' => 'FrontendController',
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
        ]);

    }


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
     * @Route("/{_locale}/destination/{id}/{name}", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="destination")
     * @Route("/destination/{id}/{name}")
     */
    public function destination(Request $request, Destination $destination, DynamicPageRepository $pageRepository, DynamicPageManager $pm)
    {


        if(!$destination)
            throw new NotFoundHttpException();

        $pageinfo = [
            'pageName'=>$destination->getName(),
            'language'=>$request->getLocale()
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesntExist($pageinfo);
        else {
            $page = $pm->findOneBy($pageinfo);
        }

        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/destination.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'destination' => $destination,
        ]);
    }

    /**
     * @Route("/{_locale}/faq", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="faq")
     * @Route("/faq")
     */
    public function faq(Request $request, DynamicPageRepository $pageRepository, DynamicPageManager $pm)
    {

        $pageinfo = [
            'pageName'=> 'faq',
            'language' => $request->getLocale()
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesntExist($pageinfo);
        else {
            $page = $pm->findOneBy($pageinfo);
        }

        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/faq.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
        ]);



    }
    /**
     * @Route("/activities", name="activities")
     */
    public function activities(Request $request, DynamicPageRepository $pageRepository, DynamicPageManager $pm)
    {

        $pageinfo = [
            'pageName'=>'activities',
            'language'=>$request->getLocale()
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesntExist($pageinfo);
        else {
            $page = $pm->findOneBy($pageinfo);
        }

        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/activities.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
        ]);
    }






}
