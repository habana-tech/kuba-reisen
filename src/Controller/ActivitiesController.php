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
use Doctrine\Common\Collections\ArrayCollection;

class ActivitiesController extends AbstractController
{

    private $amountActivitiesDefault = 9;

    /**
     * @Route("/activities", name="activities")
     */
    public function activities(DynamicPageManager $pm,
                               ActivityRepository $activityRepository, FilterTagRepository $filterTagRepository)
    {
        $pageinfo = [
            'pageName'=>'activities',
            'language'=>'de'
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else
            $page = $pm->findOneBy($pageinfo);
        if(!$page)
            throw new NotFoundHttpException();


        $filterTags = $filterTagRepository->findBy(['language'=>'de']);
        $_activities = $activityRepository->findByLanguage('de',
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
     * @Route("/activitiesApiPos/{pos}/{amount}", name="activitiesApiPos",
     *     defaults={"pos": null, "amount":null })
     */
    public function activitiesApiPos(ActivityRepository $activityRepository,
                                     $pos, $amount){

        if($pos==null)
            $pos=0;
        if ($amount==null)
            $amount=$this->amountActivitiesDefault;

        $_activities = $activityRepository->findByLanguage('de',
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
                    '_locale'=>'de']),
            ));
        }

        $data = array(
            'activities'=>$activities_data,
            'loadMore'=>$loadMore
        );

        return $this->json($data);
    }


    /**
     * @Route("/activities/filter/{filters}",
     *     name="activitiesFilter",
     *     defaults={"filters": null, "pos": null, "amount":null },)
     */
    public function activitiesFilter(DynamicPageManager $pm,
                               ActivityRepository $activityRepository,
                               FilterTagRepository $filterTagRepository,
                               $filters)
    {
        $pageinfo = [
            'pageName'=>'activities',
            'language'=>'de'
        ];

        if($this->isGranted('ROLE_ADMIN'))
            $page = $pm->findByOrCreateIfDoesNotExist($pageinfo);
        else
            $page = $pm->findOneBy($pageinfo);
        if(!$page)
            throw new NotFoundHttpException();


        $filters = explode(',', $filters);
        $_activities = $activityRepository->findByFilter($filters,
                                                        $filterTagRepository,
                                                        0, $this->amountActivitiesDefault+1);

        $loadMore = count($_activities) > $this->amountActivitiesDefault;
        $activities = array();
        for ($i = 0; $i < min($this->amountActivitiesDefault, count($_activities)); $i++)
            array_push($activities, $_activities[$i]);

        $filterTags = $filterTagRepository->findBy(['language'=>'de']);

        return $this->render('frontend/activities.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'activities'=>$activities,
            'filterTags'=>$filterTags,
            'loadMore'=>$loadMore,
        ]);
    }


    /**
     * @Route("/activitiesApiPosFilter/{filters}/{pos}/{amount}",
     *     defaults={"filters": null, "pos": null, "amount":null },
     *     name="activitiesApiPosFilter")
     */
    public function activitiesApiPosFilter(FilterTagRepository $filterTagRepository,
                                        ActivityRepository $activityRepository,
                                        $filters, $pos, $amount){

        if($pos==null)
            $pos=0;
        if ($amount==null)
            $amount=$this->amountActivitiesDefault;

        $filters = explode(',', $filters);

        $_activities = $activityRepository->findByFilter($filters,
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
                'image'=>$activity->getStaticImagePath(),
                'description'=>$activity->getDescription(),
                'link'=>  $this->generateUrl('activity',
                    ['id'=>$activity->getId(),
                    'name'=>$activity->getMachineName()]),
            ));
        }

        $data = array(
            'activities'=>$activities_data,
            'loadMore'=>$loadMore
        );

        return $this->json($data);
    }

    /**
     * @Route("/activitiesApiPosSearch/{filters}/{pos}/{amount}",
     *     defaults={"filters": null, "pos": null, "amount":null },
     *     name="activitiesApiPosSearch")
     */
    public function activitiesApiPosSearch(ActivityRepository $activityRepository,
                                              $search, $pos, $amount){

        if($pos==null)
            $pos=0;
        if ($amount==null)
            $amount=$this->amountActivitiesDefault;

        $_activities = $activityRepository->findBySearch($search, 'de',
                                                    $pos, $amount+1);

        $loadMore = count($_activities) > $amount;
        $activities = array();
        for ($i = 0; $i < min($this->amountActivitiesDefault, count($_activities)); $i++)
            array_push($activities, $_activities[$i]);

        $activities_data = [];
        foreach ($activities as $activity){
            array_push($activities_data, array(
                'name'=>$activity->getName(),
                'image'=>$activity->getStaticImagePath(),
                'description'=>$activity->getDescription(),
                'link'=>  $this->generateUrl('activity',
                    ['id'=>$activity->getId(),
                    'name'=>$activity->getMachineName(),
                    '_locale'=>'de']),
            ));
        }

        $data = array(
            'activities'=>$activities_data,
            'loadMore'=>$loadMore
        );
        return $this->json($data);
    }

}
