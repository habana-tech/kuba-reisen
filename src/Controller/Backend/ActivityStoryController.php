<?php

namespace App\Controller\Backend;

use App\Entity\ActivityStory;
use App\Form\ActivityStoryType;
use App\Repository\ActivityStoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/story")
 */
class ActivityStoryController extends AbstractController
{
    /**
     * @Route("/index", name="backend_activity_story_index", methods={"GET"})
     */
    public function index(ActivityStoryRepository $activityStoryRepository): Response
    {
        return $this->render('backend/activity_story/index.html.twig', [
            'activity_stories' => $activityStoryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="backend_activity_story_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $activityStory = new ActivityStory();
        $activityStory->setLanguage('de');
        $form = $this->createForm(ActivityStoryType::class, $activityStory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($activityStory);
            $entityManager->flush();

            return $this->redirectToRoute('backend_activity_story_index');
        }

        return $this->render('backend/activity_story/new.html.twig', [
            'activity_story' => $activityStory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_activity_story_show", methods={"GET"})
     */
    public function show(ActivityStory $activityStory): Response
    {
        return $this->render('backend/activity_story/show.html.twig', [
            'activity_story' => $activityStory,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="backend_activity_story_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ActivityStory $activityStory): Response
    {
        $form = $this->createForm(ActivityStoryType::class, $activityStory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('backend_activity_story_index');
        }

        return $this->render('backend/activity_story/edit.html.twig', [
            'activity_story' => $activityStory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_activity_story_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ActivityStory $activityStory): Response
    {
        if ($this->isCsrfTokenValid('delete'.$activityStory->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($activityStory);
            $entityManager->flush();
        }

        return $this->redirectToRoute('backend_activity_story_index');
    }
}
