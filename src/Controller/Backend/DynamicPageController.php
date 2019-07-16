<?php

namespace App\Controller\Backend;

use App\Entity\DynamicPage;
use App\Entity\UploadedImage;
use App\Form\DynamicPageType;
use App\Repository\DynamicPageRepository;
use App\Repository\UploadedImageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/dynamic_page")
 */
class DynamicPageController extends AbstractController
{
    /**
     * @Route("/index", name="backend_dynamic_page_index", methods={"GET"})
     */
    public function index(DynamicPageRepository $dynamicPageRepository): Response
    {
        return $this->render('backend/dynamic_page/index.html.twig', [
            'dynamic_pages' => $dynamicPageRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="backend_dynamic_page_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $dynamicPage = new DynamicPage();
        $form = $this->createForm(DynamicPageType::class, $dynamicPage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($dynamicPage);
            $entityManager->flush();

            return $this->redirectToRoute('backend_dynamic_page_index');
        }

        return $this->render('backend/dynamic_page/new.html.twig', [
            'dynamic_page' => $dynamicPage,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_dynamic_page_show", methods={"GET"})
     */
    public function show(DynamicPage $dynamicPage): Response
    {
        return $this->render('backend/dynamic_page/show.html.twig', [
            'dynamic_page' => $dynamicPage,
            'pageContent' => json_encode($dynamicPage->getPageContent())
        ]);
    }

    /**
     * @Route("/{id}/edit", name="backend_dynamic_page_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, DynamicPage $dynamicPage): Response
    {
        $form = $this->createForm(DynamicPageType::class, $dynamicPage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('backend_dynamic_page_index', [
                'id' => $dynamicPage->getId(),
            ]);
        }

        return $this->render('backend/dynamic_page/edit.html.twig', [
            'dynamic_page' => $dynamicPage,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_dynamic_page_delete", methods={"DELETE"})
     */
    public function delete(Request $request, DynamicPage $dynamicPage): Response
    {
        if ($this->isCsrfTokenValid('delete'.$dynamicPage->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($dynamicPage);
            $entityManager->flush();
        }

        return $this->redirectToRoute('backend_dynamic_page_index');
    }


    /**
     * @Route("/cleanImages", name="backend_clean_images", methods={"GET"})
     */
    public function cleanImages(Request $request, DynamicPageRepository $dynamicPageRepository,
                                UploadedImageRepository $uploadedImageRepository): Response
    {
        $imgList = new ArrayCollection();

        $pages = $dynamicPageRepository->findAll();
        foreach ($pages as $page)
        {
            $imgs = $page->usedImageList();
            foreach ($imgs as $img)
            {
                if(!$imgList->contains($img))
                    $imgList->add($img);
            }
        }

        $finder = new Finder();
    }
}
