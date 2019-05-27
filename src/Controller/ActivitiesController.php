<?php

namespace App\Controller;


use App\Entity\Activity;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\PageManager\DynamicPageManager;
use App\Repository\ActivityRepository;
use App\Repository\FilterTagRepository;
use App\Repository\DynamicPageRepository;

class ActivitiesController extends AbstractController
{

    private $amountActivitiesDefault = 9;

    /**
     * @Route("/{_locale}/activities", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="activities")
     */
    public function activities(Request $request, DynamicPageManager $pm,
                               ActivityRepository $activityRepository, FilterTagRepository $filterTagRepository)
    {
        $pageinfo = [
            'pageName'=>'activities',
            'language'=>$request->getLocale()
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else
            $page = $pm->findOneBy($pageinfo);
        if(!$page)
            throw new NotFoundHttpException();


        $filterTags = $filterTagRepository->findBy(['language'=>$request->getLocale()]);
        $_activities = $activityRepository->findByLanguage($request->getLocale(),
                                        0, $this->amountActivitiesDefault+1);

        $loadMore = count($_activities) > $this->amountActivitiesDefault;
        $loadMore = true;
        $activities = array();
        for ($i = 0; $i < min($this->amountActivitiesDefault, count($_activities)); $i++)
            array_push($activities, $_activities[$i]);

        return $this->render('frontend/activities.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'activities'=>$activities,
            'filterTags'=>$filterTags,
            'loadMore'=> $loadMore
        ]);
    }


    /**
     * @Route("/{_locale}/activitiesApiPos/{pos}/{amount}", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="activitiesApiPos")
     */
    public function activitiesApiPos(Request $request,
                                     ActivityRepository $activityRepository,
                                     $pos, $amount){

        if($pos==null)
            $pos=0;
        if ($amount==null)
            $amount=$this->amountActivitiesDefault;

        $_activities = $activityRepository->findByLanguage($request->getLocale(),
            $pos, $amount+1);

        $loadMore = count($_activities) > $amount;
        $activities = array();
        for ($i = 0; $i < min($amount, count($_activities)); $i++)
            array_push($activities, $_activities[$i]);

        $activities_data = [];
        foreach ($activities as $activity){
            array_push($activities_data, array(
                'name'=>$activity->getName(),
                'image'=>$activity->getStaticImagePath(),
                'imageAlt'=>$activity->getAlternativeText(),
                'description'=>$activity->getDescription(),
                'link'=>  $this->generateUrl('activity',
                    ['id'=>$activity->getId(),
                    'name'=>$activity->getMachineName(),
                    '_locale'=>$request->getLocale()]),
            ));
        }

        $data = array(
            'activities'=>$activities_data,
            'loadMore'=>$loadMore
        );

        return $this->json($data);
    }


    /**
     * @Route("/{_locale}/activities/filter/{filters}", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="activitiesFilter")
     */
    public function activitiesFilter(Request $request, DynamicPageManager $pm,
                               ActivityRepository $activityRepository,
                               FilterTagRepository $filterTagRepository,
                               $filters)
    {
        $pageinfo = [
            'pageName'=>'activities',
            'language'=>$request->getLocale()
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else
            $page = $pm->findOneBy($pageinfo);
        if(!$page)
            throw new NotFoundHttpException();


        $filters = explode(',', $filters);
        $_activities = $activityRepository->findByFilter($filters, $request->getLocale(),
                                                        $filterTagRepository,
                                                        0, $this->amountActivitiesDefault+1);

        $loadMore = count($_activities) > $this->amountActivitiesDefault;
        $activities = array();
        for ($i = 0; $i < min($this->amountActivitiesDefault, count($_activities)); $i++)
            array_push($activities, $_activities[$i]);

        $filterTags = $filterTagRepository->findBy(['language'=>$request->getLocale()]);

        return $this->render('frontend/activities.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'activities'=>$activities,
            'filterTags'=>$filterTags,
            'loadMore'=>$loadMore,
        ]);
    }


    /**
     * @Route("/{_locale}/activitiesApiPosFilter/{filters}/{pos}/{amount}", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="activitiesApiPosFilter")
     */
    public function activitiesApiPosFilter(Request $request,
                                        FilterTagRepository $filterTagRepository,
                                        ActivityRepository $activityRepository,
                                        $filters, $pos, $amount){

        if($pos==null)
            $pos=0;
        if ($amount==null)
            $amount=$this->amountActivitiesDefault;

        $filters = explode(',', $filters);

        $_activities = $activityRepository->findByFilter($filters, $request->getLocale(),
                                                        $filterTagRepository,
                                                        $pos, $amount+1);
        $loadMore = count($_activities) > $amount;
        $activities = array();
        for ($i = 0; $i < min($this->amountActivitiesDefault, count($_activities)); $i++)
            array_push($activities, $_activities[$i]);

        $activities_data = [];
        foreach ($activities as $activity){
            array_push($activities_data, array(
                'name'=>$activity->getName(),
                'image'=>$activity->getImagePath(),
                'description'=>$activity->getDescription(),
                'link'=>  $this->generateUrl('activity',
                    ['id'=>$activity->getId(),
                    'name'=>$activity->getMachineName(),
                    '_locale'=>$request->getLocale()]),
            ));
        }

        $data = array(
            'activities'=>$activities_data,
            'loadMore'=>$loadMore
        );

        return $this->json($data);
    }

    /**
     * @Route("/{_locale}/activitiesApiPosSearch/{filters}/{pos}/{amount}", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="activitiesApiPosSearch")
     */
    public function activitiesApiPosSearch(Request $request,
                                              FilterTagRepository $filterTagRepository,
                                              ActivityRepository $activityRepository,
                                              $search, $pos, $amount){

        if($pos==null)
            $pos=0;
        if ($amount==null)
            $amount=$this->amountActivitiesDefault;

        $_activities = $activityRepository->findBySearch($search, $request->getLocale(),
                                                    $pos, $amount+1);

        $loadMore = count($_activities) > $amount;
        $activities = array();
        for ($i = 0; $i < min($this->amountActivitiesDefault, count($_activities)); $i++)
            array_push($activities, $_activities[$i]);

        $activities_data = [];
        foreach ($activities as $activity){
            array_push($activities_data, array(
                'name'=>$activity->getName(),
                'image'=>$activity->getImagePath(),
                'description'=>$activity->getDescription(),
                'link'=>  $this->generateUrl('activity',
                    ['id'=>$activity->getId(),
                    'name'=>$activity->getMachineName(),
                    '_locale'=>$request->getLocale()]),
            ));
        }

        $data = array(
            'activities'=>$activities_data,
            'loadMore'=>$loadMore
        );
        return $this->json($data);
    }


}
