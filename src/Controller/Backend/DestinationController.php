<?php

namespace App\Controller\Backend;

use App\Entity\Destination;
use App\Form\DestinationType;
use App\Repository\DestinationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\DynamicPage;

/**
 * @Route("/admin/destination")
 */
class DestinationController extends AbstractController
{
    /**
     * @Route("/", name="backend_destination_index", methods={"GET"})
     */
    public function index(DestinationRepository $destinationRepository): Response
    {
        return $this->render('backend/destination/index.html.twig', [
            'destinations' => $destinationRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="backend_destination_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $destination = new Destination();
        $form = $this->createForm(DestinationType::class, $destination);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $dynamicPage = new DynamicPage();

            $dynamicPage->setPageName($destination->getMachineName());
            $dynamicPage->setLanguage($destination->getLanguage());
            $destination->setDynamicPage($dynamicPage);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($destination);
            $entityManager->persist($dynamicPage);

            return $this->redirectToRoute('backend_destination_index');
        }

        return $this->render('backend/destination/new.html.twig', [
            'destination' => $destination,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_destination_show", methods={"GET"})
     */
    public function show(Destination $destination): Response
    {
        return $this->render('backend/destination/show.html.twig', [
            'destination' => $destination,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="backend_destination_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Destination $destination): Response
    {
        $form = $this->createForm(DestinationType::class, $destination);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('backend_destination_index', [
                'id' => $destination->getId(),
            ]);
        }

        return $this->render('backend/destination/edit.html.twig', [
            'destination' => $destination,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_destination_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Destination $destination): Response
    {
        if ($this->isCsrfTokenValid('delete'.$destination->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($destination);
            $entityManager->flush();
        }

        return $this->redirectToRoute('backend_destination_index');
    }
}
