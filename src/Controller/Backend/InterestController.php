<?php

namespace App\Controller\Backend;

use App\Entity\Interest;
use App\Form\InterestType;
use App\Repository\InterestRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/interest")
 */
class InterestController extends AbstractController
{
    /**
     * @Route("/", name="backend_interest_index", methods={"GET"})
     */
    public function index(InterestRepository $interestRepository): Response
    {
        return $this->render('backend/interest/index.html.twig', [
            'interests' => $interestRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="backend_interest_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $interest = new Interest();
        $form = $this->createForm(InterestType::class, $interest);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($interest);
            $entityManager->flush();

            return $this->redirectToRoute('backend_interest_index');
        }

        return $this->render('backend/interest/new.html.twig', [
            'interest' => $interest,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_interest_show", methods={"GET"})
     */
    public function show(Interest $interest): Response
    {
        return $this->render('backend/interest/show.html.twig', [
            'interest' => $interest,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="backend_interest_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Interest $interest): Response
    {
        $form = $this->createForm(InterestType::class, $interest);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('backend_interest_index', [
                'id' => $interest->getId(),
            ]);
        }

        return $this->render('backend/interest/edit.html.twig', [
            'interest' => $interest,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_interest_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Interest $interest): Response
    {
        if ($this->isCsrfTokenValid('delete'.$interest->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($interest);
            $entityManager->flush();
        }

        return $this->redirectToRoute('backend_interest_index');
    }
}
