<?php

namespace App\Controller\Backend;

use App\DataConverter\GrapesjsHtmlConverter;
use App\Entity\Activity;
use App\Entity\DynamicPage;
use App\Form\ActivityType;
use App\Form\NewActivityType;
use App\PageManager\DynamicPageManager;
use App\Repository\ActivityRepository;
use Doctrine\ORM\EntityNotFoundException;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use App\Repository\DynamicPageRevisionRepository;

/**
 * @Route("/admin/activity")
 */
class ActivityController extends AbstractController
{
    /**
     * @Route("/index", name="backend_activity_index", methods={"GET"})
     */
    public function index(ActivityRepository $activityRepository): Response
    {
        return $this->render('backend/activity/index.html.twig', [
            'activities' => $activityRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="backend_activity_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $activity = new Activity();


        $form = $this->createForm(NewActivityType::class, $activity);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            if($form->get('saveAndEdit')->isClicked()){
                $dynamicPage = new DynamicPage();

                $dynamicPage->setPageName($activity->getMachineName());
                $activity->setDynamicPage($dynamicPage);

                $htmlContent = new GrapesjsHtmlConverter($this->renderView('frontend/activity.html.twig',
                    [
                        'page' => $dynamicPage,
                        'activity'=>$activity,
                        'related_activities'=>null
                    ]));
                $dynamicPage->setPageContent($htmlContent->getPageElements());

                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($activity);
                $entityManager->persist($dynamicPage);
                $entityManager->flush();

                return $this->redirectToRoute('backend_activity_edit', ['id'=>$activity->getId()]);

            }

        }
        return $this->render('backend/activity/new.html.twig', [
            'activity' => $activity,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_activity_show", methods={"GET"})
     */
    public function show(Activity $activity): Response
    {
        return $this->render('backend/activity/show.html.twig', [
            'activity' => $activity,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="backend_activity_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Activity $activity, DynamicPageManager $pm): Response
    {

        $form = $this->createForm(ActivityType::class, $activity);


        try
        {
            foreach ($activity->getDynamicPage()->getPageContent() as $key => $element)
            {
                if(isset($element['txt']))
                    $form->add($key, null, [
                        'label'=>'Content of '.str_replace('_',' ', $key),
                        'required' => false]
                    );
                elseif(isset($element['html']) and !isset($element['src']))
                    $form->add($key, CKEditorType::class, [
                        'label'=>'Content of '.str_replace('_',' ', $key),
                        'required' => false]
                    );
            }
        }
        catch (EntityNotFoundException $exception)
        {
            $activity->setDynamicPage($pm->findByOrCreateIfDoesNotExist(['pageName'=> $activity->getMachineName()]));
            $this->getDoctrine()->getManager()->persist($activity);
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('notice', 'The page content was not found and was created a new one');
        }

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //$this->getDoctrine()->getManager()->persist($activity->getDynamicPage());
            $this->getDoctrine()->getManager()->flush();

            if($request->get('saveAndEdit'))
                return $this->redirectToRoute('activity',[
                    'id'=>$activity->getId(),
                    'name'=>$activity->getMachineName()
                ]);

            return $this->redirectToRoute('backend_activity_index', [
                'id' => $activity->getId(),
            ]);
        }

        return $this->render('backend/activity/edit.html.twig', [
            'activity' => $activity,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_activity_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Activity $activity, DynamicPageRevisionRepository $revRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$activity->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($activity);
            $entityManager->flush();
        }

        $revisions = $revRepository->findBy(['dynamicPage'=>$activity->getDynamicPage()]);
        foreach($revisions as $rev)
        {
            $entityManager->remove($rev);
        }

        return $this->redirectToRoute('backend_activity_index');
    }
}
