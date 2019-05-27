<?php

namespace App\Controller;

use App\Entity\Destination;
use App\Entity\Activity;
use App\Repository\ActivityRepository;
use App\Repository\DestinationRepository;
use App\Repository\DynamicPageRepository;
use App\Repository\FilterTagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use App\PageManager\DynamicPageManager;
use Doctrine\Common\Collections\ArrayCollection;

class FrontendController extends AbstractController
{
    /**
     * @Route("/{_locale}", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="frontend")
     */
    public function index(Request $request, DynamicPageRepository $pageRepository,
                          DynamicPageManager $pm,
                          DestinationRepository $destinationRepository, FilterTagRepository $filterTagRepository)
    {
        $pageinfo = [
            'pageName'=>'index',
            'language'=>$request->getLocale()
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else {
            $page = $pm->findOneBy($pageinfo);
        }

        if(!$page)
            throw new NotFoundHttpException();

            return $this->render('frontend/index.html.twig', [
            'controller_name' => 'FrontendController',
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'destinations'=>$destinationRepository->findByLang($request->getLocale()),
            'filterTags'=>$filterTagRepository->findByPinned($request->getLocale()),
        ]);

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
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
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
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
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
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
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
     * @Route("/{_locale}/activity/{id}/{name}", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="activity")
     * @Route("/activity/{id}/{name}")
     */
    public function activity(Request $request, Activity $activity, DynamicPageRepository $pageRepository,
                             DynamicPageManager $pm, ActivityRepository $activityRepository,
                             FilterTagRepository $filterTagRepository)
    {
        if(!$activity)
            throw new NotFoundHttpException();

        $pageinfo = [
            'pageName'=>$activity->getName(),
            'language'=>$request->getLocale()
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else {
            $page = $pm->findOneBy($pageinfo);
        }

        if(!$page)
            throw new NotFoundHttpException();

        $tags = $activity->getFilterTags();
        $related_activities = new ArrayCollection();
        foreach ($tags as $tag)
        {
            $current_tag_activities = $tag->getActivities();
            foreach ($current_tag_activities as $_activity)
            {
                if($_activity != $activity and !$related_activities->contains($_activity)) {
                    $related_activities[] = $_activity;
                }
            }
        }
        
        return $this->render('frontend/activity.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'activity' => $activity,
            'addLink'=>$this->generateUrl('addActivity',
                                            ['id'=>$activity->getId(),
                                            '_locale'=>$request->getLocale()]),
            'related_activities'=>$related_activities,
        ]);
    }

}
