<?php

namespace App\Controller;

use App\Entity\Destination;
use App\Entity\Activity;
use App\Entity\DynamicPage;
use App\Repository\ActivityRepository;
use App\Repository\DestinationRepository;
use App\Repository\DynamicPageRepository;
use App\Repository\FilterTagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use App\PageManager\DynamicPageManager;
use Doctrine\Common\Collections\ArrayCollection;
use Twig\Error\LoaderError;

class FrontendController extends AbstractController
{
    /**
     * @Route("/", name="frontend")
     * @param DynamicPageManager $pm
     * @param DestinationRepository $destinationRepository
     * @param FilterTagRepository $filterTagRepository
     * @return Response
     */
    public function index(DynamicPageManager $pm,
                          DestinationRepository $destinationRepository,
                          FilterTagRepository $filterTagRepository): Response
    {
        $page = $pm->findOneBy([
            'pageName'=>'index'
        ]);

        if($page) {
            return $this->render('frontend/index.html.twig', [
                'dynamic_page_id' => $page->getId(), //TODO: delete reference
                'page' => $page,
                'destinations' => $destinationRepository->findAll(),
                'filterTags' => $filterTagRepository->findByPinned(),
            ]);
        }
        throw new NotFoundHttpException();
    }


    /**
     * @Route("/destination/{id}/{name}" , name="destination")
     */
    public function destination(Destination $destination)
    {
        if(!$destination)
            throw new NotFoundHttpException();

        return $this->render('frontend/destination.html.twig', [
            'destination' => $destination,
        ]);
    }

    /**
     * @Route("/activity/{id}/{name}", name="activity")
     */
    public function activity(Activity $activity, FilterTagRepository $filterTagRepository)
    {
        if(!$activity)
            throw new NotFoundHttpException();

        $activityId = $activity->getId();
        $tags = $activity->getFilterTags();
        $tagsTitles = array_map(function ($tag){ return $tag->getTitle();}, $tags->toArray());

        $related_activities = $this->getDoctrine()
            ->getRepository(Activity::class)
            ->findByFilter($tagsTitles, $filterTagRepository, 0, 4);

        $related_activities = array_filter($related_activities,
            function ($activity) use ($activityId)
            { return $activity->getId() != $activityId; });

        if (sizeof($related_activities) == 4)
            array_pop($related_activities);

        return $this->render('frontend/activity.html.twig', [
            'dynamic_page_id' => $activity->getDynamicPage()->getId(),
            'page' => $activity->getDynamicPage(),
            'activity' => $activity,
            'related_activities'=> $related_activities,
        ]);
    }

    /**
     * @Route("/{pageName}", name="pageLoad")
     */
    public function loadPage(DynamicPage $page)
    {

        if(!$page)
            throw new NotFoundHttpException();
        if(!$page->getPageTemplate()->getPath())
            throw  new LoaderError('Page: "'.$page->getPageName().'" not contains a valid PageTemplate or it is undefined. Edit the page and add a PageTemplate using the form.');

        return $this->render('frontend/'.$page->getPageTemplate()->getPath(), [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
        ]);
    }




    /**
     * @Route("/Gut_zu_wissen", name="good_to_know")
     */
    public function goodToKnow(DynamicPageManager $pm)
    {

        $pageinfo = [
            'pageName'=> 'goodToKnow',
            'language' => 'de'
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else $page = $pm->findOneBy($pageinfo);


        if(!$page) throw new NotFoundHttpException();

        return $this->render('frontend/tours.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
        ]);
    }

}
