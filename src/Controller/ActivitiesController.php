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

        $activities = $activityRepository->findByLanguage($request->getLocale(),
                                        0, $this->amountActivitiesDefault);

        return $this->render('frontend/activities.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'activities'=>$activities,
            'filterTags'=>$filterTags,
        ]);
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
        $activities = $activityRepository->findByFilter($filters, $filterTagRepository,
            0, $this->amountActivitiesDefault);

        $filterTags = $filterTagRepository->findBy(['language'=>$request->getLocale()]);

        return $this->render('frontend/activities.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'activities'=>$activities,
            'filterTags'=>$filterTags,
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

        $activities = $activityRepository->findByLanguage($request->getLocale(),
            $pos, $amount);

        $activities_data = [];
        foreach ($activities as $activity){
            array_push($activities_data, array(
                'name'=>$activity->getName(),
                'image'=>$activity->getImagePath(),
                'description'=>$activity->getDescription(),
            ));
        }

        return $this->json($activities_data);
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

        $activities = $activityRepository->findByFilter($filters, $filterTagRepository,
                                                        $pos, $amount);

        $activities_data = [];
        foreach ($activities as $activity){
            array_push($activities_data, array(
                'name'=>$activity->getName(),
                'image'=>$activity->getImagePath(),
                'description'=>$activity->getDescription(),
            ));
        }

        return $this->json($activities_data);
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

        $activities = $activityRepository->findBySearch($search,
                                                    $pos, $amount);

        $activities_data = [];
        foreach ($activities as $activity){
            array_push($activities_data, array(
                'name'=>$activity->getName(),
                'image'=>$activity->getImagePath(),
                'description'=>$activity->getDescription(),
            ));
        }

        return $this->json($activities_data);
    }


}
