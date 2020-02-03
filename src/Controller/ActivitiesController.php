<?php

namespace App\Controller;

use App\Repository\ActivityStoryRepository;
use App\Repository\DynamicPageRepository;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ActivityRepository;
use App\Repository\FilterTagRepository;
use \App\Twig\AppExtension;
use Twig\Error\LoaderError;
use Symfony\Component\DependencyInjection\ContainerInterface;

class ActivitiesController extends AbstractController
{

    /**
     * @var CacheManager|object|null
     */
    private $imagineCacheManager;

    public function __construct(ContainerInterface $container = null)
    {
        $this->imagineCacheManager = $container->get('liip_imagine.cache.manager');
    }

    private $amountActivitiesDefault = 12;

    /**
     * @Route("/Aktivitäten", name="activities", options={"utf8" : true})
     * @Route("/activities/filter/{filters}",
     *     name="activitiesFilter",
     *     defaults={"filters": null, "pos": null, "amount":null },)
     * @param DynamicPageRepository $dynamicPageRepository
     * @param ActivityRepository $activityRepository
     * @param FilterTagRepository $filterTagRepository
     * @param ActivityStoryRepository $storiesRepository
     * @param null $filters
     * @return Response
     */
    public function activities(DynamicPageRepository $dynamicPageRepository,
                               ActivityRepository $activityRepository,
                               FilterTagRepository $filterTagRepository,
                               ActivityStoryRepository $storiesRepository,
                                $filters = null)
    {

        $page = $dynamicPageRepository->findOneBy([
            'machineName'=>'activities'
        ]);

        if(!$page)
            throw new NotFoundHttpException();

        $filters = explode(',', $filters);

        $filterTags = $filterTagRepository->findAll();
        $_activities = $activityRepository->findStartingFrom(0, $this->amountActivitiesDefault+1);

        $loadMore = count($_activities) > $this->amountActivitiesDefault;
        $activities = array();
        $min = min($this->amountActivitiesDefault, count($_activities));
        for ($i = 0; $i < $min; $i++) {
            $activities[] = $_activities[$i];
        }

        $amountStories = 4;
        $stories = $storiesRepository->findLastPublished($amountStories);

        return $this->render('frontend/activities.html.twig', [
            'page'=>$page,
            'activities'=>$activities,
            'filterTags'=>$filterTags,
            'selectedFilters'=>$filters,
            'loadMore'=> $loadMore,
            'stories' => $stories
        ]);
    }


    /**
     * @Route("/activitiesApiPos/{pos}/{amount}", name="activitiesApiPos",
     *     defaults={"pos": null, "amount":null })
     */
    public function activitiesApiPos(ActivityRepository $activityRepository,
                                     $pos, $amount)
    {

        if($pos==null)
            $pos=0;
        if ($amount==null)
            $amount=$this->amountActivitiesDefault;

        $_activities = $activityRepository->findStartingFrom($pos, $amount+1);

        $loadMore = count($_activities) > $amount;
        $activities = array();
        for ($i = 0; $i < min($amount, count($_activities)); $i++)
            array_push($activities, $_activities[$i]);

        $activities_data = [];

        $twig_filter = new AppExtension();

        foreach ($activities as $activity){

            array_push($activities_data, array(
                'id'=>$activity->getId(),
                'name'=>$activity->getName(),
                'image'=>$activity->getImage(),
                'description'=> $twig_filter->truncate_html($activity->getDescription(),$activity::LENGTH_OF_DESCRIPTION),
                'link'=>  $this->generateUrl('activity',
                    ['id'=>$activity->getId(),
                    'name'=>$activity->getMachineName()]),
                'price' => $activity->getInitPrice()
            ));
        }

        $data = array(
            'activities'=>$activities_data,
            'loadMore'=>$loadMore
        );

        return $this->json($data);
    }


    /**
     * @Route("/activitiesApiPosFilter/{filters}/{pos}/{amount}",
     *     defaults={"pos": null, "amount":null },
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
            //TODO:
            array_push($activities_data, array(
                'id'=>$activity->getId(),
                'name'=>$activity->getName(),
                'image'=>$activity->getImage(),
                'description'=>$activity->getDescription(),
                'link'=>  $this->generateUrl('activity',
                    ['id'=>$activity->getId(),
                    'name'=>$activity->getMachineName()]),
                'price' => $activity->getInitPrice(),
            ));
        }

        $data = array(
            'activities'=>$activities_data,
            'loadMore'=>$loadMore
        );

        return $this->json($data);
    }

    /**
     * @Route("/activitiesApiPosSearch/{search}/{pos}/{amount}",
     *     defaults={"pos": null, "amount":null },
     *     name="activitiesApiPosSearch")
     */
    public function activitiesApiPosSearch(ActivityRepository $activityRepository,
                                              $search, $pos, $amount){

        if($pos==null)
            $pos=0;
        if ($amount==null)
            $amount=$this->amountActivitiesDefault;

        $_activities = $activityRepository->findBySearch($search,
                                                    $pos, $amount+1);

        $loadMore = count($_activities) > $amount;
        $activities = array();
        for ($i = 0; $i < min($this->amountActivitiesDefault, count($_activities)); $i++)
            array_push($activities, $_activities[$i]);

        $activities_data = [];
        foreach ($activities as $activity){
            //TODO:
            array_push($activities_data, array(
                'name'=>$activity->getName(),
                'image'=>$activity->getImage(),
                'description'=>$activity->getDescription(),
                'link'=>  $this->generateUrl('activity',
                    ['id'=>$activity->getId(),
                    'name'=>$activity->getMachineName()]),
                'price' => $activity->getInitPrice(),
            ));
        }

        $data = array(
            'activities'=>$activities_data,
            'loadMore'=>$loadMore
        );
        return $this->json($data);
    }

    /**
     * @Route("/activitiesApiGetById/{id}",
     *     name="activitiesApiGetById")
     */
    public function activitiesApiGetById(ActivityRepository $activityRepository, $id){

        $activity = $activityRepository->find($id);

        $activity = array(
            'id' => $id,
            'name'=>$activity->getName(),
            'imageSmall' => $activity->hasImage() ? $this->imagineCacheManager->getBrowserPath($activity->getImage()->getStaticImagePath(), 'min_width_250') : '',
        );

        $data = array(
            'activity'=>$activity,
        );
        return $this->json($data);
    }

}
