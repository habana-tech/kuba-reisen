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
use Symfony\Component\Intl\Tests\Data\Provider\Json;

class FrontendController extends AbstractController
{
    /**
     * @Route("/", name="frontend")
     */
    public function index(DynamicPageManager $pm,
                          DestinationRepository $destinationRepository,
                          FilterTagRepository $filterTagRepository)
    {
        $pageinfo = [
            'pageName'=>'index',
            'language'=>'de'
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
            'destinations'=>$destinationRepository->findByLang('de'),
            'filterTags'=>$filterTagRepository->findByPinned('de'),
        ]);

    }


    /**
     * @Route("/destination/{id}/{name}" , name="destination")
     */
    public function destination(Destination $destination)
    {
        if(!$destination)
            throw new NotFoundHttpException();

        return $this->render('frontend/destination.html.twig', [
            'dynamic_page_id' => $destination->getDynamicPage()->getId(),
            'page' => $destination->getDynamicPage(),
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
     * @Route("/faq", name="faq")
     */
    public function faq(DynamicPageManager $pm)
    {

        $pageinfo = [
            'pageName'=> 'faq',
            'language' => 'de'
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
     * @Route("/bucket_list", name="bucket_list")
     */
    public function bucket_list(DynamicPageManager $pm)
    {
        $pageinfo = [
            'pageName'=> 'bucket_list',
            'language' => 'de'
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else {
            $page = $pm->findOneBy($pageinfo);
        }

        if(!$page)
            throw new NotFoundHttpException();


        $contents = [];

        return $this->render('frontend/bucket_list.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'contents'=>$contents,
        ]);
    }

    /**
     * @Route("/landesinformationen", name="travel_info")
     */
    public function travel_info(DynamicPageManager $pm)
    {

        $pageinfo = [
            'pageName'=> 'travel_info',
            'language' => 'de'
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else {
            $page = $pm->findOneBy($pageinfo);
        }

        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/travel_info.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
        ]);
    }

    /**
     * @Route("/uber_uns", name="about_us")
     */
    public function about_us(DynamicPageManager $pm, FilterTagRepository $filterTagRepository)
    {

        $pageinfo = [
            'pageName'=> 'about_us',
            'language' => 'de'
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else {
            $page = $pm->findOneBy($pageinfo);
        }

        if(!$page)
            throw new NotFoundHttpException();

        $filterTags = $filterTagRepository->findBy(['language'=>'de']);

        return $this->render('frontend/about_us.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'filterTags'=>$filterTags,
        ]);
    }


    /**
     * @Route("/exploring", name="exploring")
     */
    public function exploring(DynamicPageManager $pm)
    {

        $pageinfo = [
            'pageName'=> 'exploring',
            'language' => 'de'
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else $page = $pm->findOneBy($pageinfo);


        if(!$page) throw new NotFoundHttpException();

        return $this->render('frontend/exploring.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
        ]);
    }

    /**
     * @Route("/excursions", name="excursions")
     */
    public function excursions(DynamicPageManager $pm)
    {

        $pageinfo = [
            'pageName'=> 'excursions',
            'language' => 'de'
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else $page = $pm->findOneBy($pageinfo);


        if(!$page) throw new NotFoundHttpException();

        return $this->render('frontend/excursions.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
        ]);
    }

    /**
     * @Route("/tours", name="tours")
     */
    public function tours(DynamicPageManager $pm)
    {

        $pageinfo = [
            'pageName'=> 'tours',
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
