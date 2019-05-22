<?php

namespace App\Controller\Backend;

use App\Entity\FilterTag;
use App\Form\FilterTagType;
use App\Repository\FilterTagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/filtertag")
 */
class FilterTagController extends AbstractController
{
    /**
     * @Route("/index", name="backend_filter_tag_index", methods={"GET"})
     */
    public function index(FilterTagRepository $filterTagRepository): Response
    {
        return $this->render('backend/filter_tag/index.html.twig', [
            'filter_tags' => $filterTagRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="backend_filter_tag_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $filterTag = new FilterTag();
        $form = $this->createForm(FilterTagType::class, $filterTag);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($filterTag);
            $entityManager->flush();

            return $this->redirectToRoute('backend_filter_tag_index');
        }

        return $this->render('backend/filter_tag/new.html.twig', [
            'filter_tag' => $filterTag,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_filter_tag_show", methods={"GET"})
     */
    public function show(FilterTag $filterTag): Response
    {
        return $this->render('backend/filter_tag/show.html.twig', [
            'filter_tag' => $filterTag,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="backend_filter_tag_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, FilterTag $filterTag): Response
    {
        $form = $this->createForm(FilterTagType::class, $filterTag);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('backend_filter_tag_index', [
                'id' => $filterTag->getId(),
            ]);
        }

        return $this->render('backend/filter_tag/edit.html.twig', [
            'filter_tag' => $filterTag,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_filter_tag_delete", methods={"DELETE"})
     */
    public function delete(Request $request, FilterTag $filterTag): Response
    {
        if ($this->isCsrfTokenValid('delete'.$filterTag->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($filterTag);
            $entityManager->flush();
        }

        return $this->redirectToRoute('backend_filter_tag_index');
    }
}
