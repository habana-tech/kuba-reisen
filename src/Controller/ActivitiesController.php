<?php

namespace App\Controller;

use App\Entity\Activity;
use App\Repository\ActivityStoryRepository;
use App\Repository\DynamicPageRepository;
use Liip\ImagineBundle\Imagine\Cache\CacheManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ActivityRepository;
use App\Repository\FilterTagRepository;
use App\Twig\AppExtension;
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
        if ($container instanceof ContainerInterface) {
            $this->imagineCacheManager = $container->get('liip_imagine.cache.manager');
        }
    }

    private $amountActivitiesDefault = 12;

    /**
     * @Route("/Aktivitäten", name="activities", options={"utf8" : true})
     * @Route("/activities/filter/{filters}",
     *     name="activitiesFilter",
     *     defaults={"filters": null, "pos": null, "amount":null },)
     * @param DynamicPageRepository $pageRepository
     * @param ActivityRepository $activityRepository
     * @param FilterTagRepository $filterTagRepository
     * @param ActivityStoryRepository $storiesRepository
     * @param null $filters
     * @return Response
     */
    public function activities(
        DynamicPageRepository $pageRepository,
        ActivityRepository $activityRepository,
        FilterTagRepository $filterTagRepository,
        ActivityStoryRepository $storiesRepository,
        $filters = null
    ): Response {
        $page = $pageRepository->findOneBy([
            'machineName' => 'activities'
        ]);

        $filters = urldecode($filters);
        if (!$page) {
            throw new NotFoundHttpException();
        }

        $filters = explode(',', $filters);

        $filterTags = $filterTagRepository->findAllActive();
        $_activities = $activityRepository->findStartingFrom(0, $this->amountActivitiesDefault + 1);

        $loadMore = count($_activities) > $this->amountActivitiesDefault;
        $activities = array();
        $min = min($this->amountActivitiesDefault, count($_activities));
        for ($i = 0; $i < $min; $i++) {
            $activities[] = $_activities[$i];
        }

        $amountStories = 4;
        $stories = $storiesRepository->findLastPublished($amountStories);

        return $this->render('frontend/activities.html.twig', [
            'page' => $page,
            'activities' => $activities,
            'filterTags' => $filterTags,
            'selectedFilters' => $filters,
            'loadMore' => $loadMore,
            'stories' => $stories
        ]);
    }


    /**
     * @Route("/activitiesApiPos/{pos}/{amount}", name="activitiesApiPos",
     *     defaults={"pos": null, "amount":null })
     * @param ActivityRepository $activityRepository
     * @param $pos
     * @param $amount
     * @return JsonResponse
     */
    public function activitiesApiPos(
        ActivityRepository $activityRepository,
        $pos,
        $amount
    ): JsonResponse {
        if ($pos === null) {
            $pos = 0;
        }
        if ($amount === null) {
            $amount = $this->amountActivitiesDefault;
        }

        $_activities = $activityRepository->findStartingFrom($pos, $amount + 1);

        $loadMore = count($_activities) > $amount;
        $activities = array();
        for ($i = 0, $iMax = min($amount, count($_activities)); $i < $iMax; $i++) {
            $activities[] = $_activities[$i];
        }

        $activities_data = [];

        $twig_filter = new AppExtension();

        foreach ($activities as $activity) {
            /**
             * @var Activity $activity
             */
            if ($activity->isActive() !== true) {
                continue;
            }

            $activities_data[] = array(
                'id' => $activity->getId(),
                'name' => $activity->getName(),
                'image' => $activity->getImage(),
                'description' => $twig_filter->truncateText(strip_tags($activity->getDescription()), $activity::LENGTH_OF_DESCRIPTION),
//                'description' => $twig_filter->truncate_html($activity->getDescription(), $activity::LENGTH_OF_DESCRIPTION),
                'link' => $this->generateUrl(
                    'activity',
                    ['id' => $activity->getId(),
                        'name' => $activity->getMachineName()]
                ),
                'price' => $activity->getInitPrice()
            );
        }

        $data = array(
            'activities' => $activities_data,
            'loadMore' => $loadMore
        );

        return $this->json($data);
    }


    /**
     * @Route("/activitiesApiPosFilter/{filters}/{pos}/{amount}",
     *     defaults={"pos": null, "amount":null },
     *     name="activitiesApiPosFilter")
     * @param FilterTagRepository $filterTagRepository
     * @param ActivityRepository $activityRepository
     * @param $filters
     * @param $pos
     * @param $amount
     * @return JsonResponse
     */
    public function activitiesApiPosFilter(
        FilterTagRepository $filterTagRepository,
        ActivityRepository $activityRepository,
        $filters,
        $pos,
        $amount
    ): JsonResponse {
        if ($pos === null) {
            $pos = 0;
        }
        if ($amount === null) {
            $amount = $this->amountActivitiesDefault;
        }

        $filters = explode(',', $filters);

        $_activities = $activityRepository->findByFilter(
            $filters,
            $filterTagRepository,
            $pos,
            $amount + 1
        );
        $loadMore = count($_activities) > $amount;
        $activities = array();
        for ($i = 0, $iMax = min($this->amountActivitiesDefault, count($_activities)); $i < $iMax; $i++) {
            $activities[] = $_activities[$i];
        }

        $activities_data = [];
        foreach ($activities as $activity) {
            /**
             * @var Activity $activity
             */
            if ($activity->isActive() !== true) {
                continue;
            }

            $twig_filter = new AppExtension();

            //TODO:
            $activities_data[] = array(
                'id' => $activity->getId(),
                'name' => $activity->getName(),
                'image' => $activity->getImage(),
                'description' => $twig_filter->truncateText(strip_tags($activity->getDescription()), $activity::LENGTH_OF_DESCRIPTION),
//                'description' => $twig_filter->truncate_html($activity->getDescription(), $activity::LENGTH_OF_DESCRIPTION),
//                'description' => $activity->getDescription(),
                'link' => $this->generateUrl(
                    'activity',
                    ['id' => $activity->getId(),
                        'name' => $activity->getMachineName()]
                ),
                'price' => $activity->getInitPrice(),
            );
        }

        $data = array(
            'activities' => $activities_data,
            'loadMore' => $loadMore
        );

        return $this->json($data);
    }

    /**
     * @Route("/activitiesApiPosSearch/{search}/{pos}/{amount}",
     *     defaults={"pos": null, "amount":null },
     *     name="activitiesApiPosSearch")
     * @param ActivityRepository $activityRepository
     * @param $search
     * @param $pos
     * @param $amount
     * @return JsonResponse
     */
    public function activitiesApiPosSearch(
        ActivityRepository $activityRepository,
        $search,
        $pos,
        $amount
    ): JsonResponse {
        if ($pos === null) {
            $pos = 0;
        }
        if ($amount === null) {
            $amount = $this->amountActivitiesDefault;
        }

        $_activities = $activityRepository->findBySearch($search, $pos, $amount + 1);

        $loadMore = count($_activities) > $amount;
        $activities = array();
        for ($i = 0, $iMax = min($this->amountActivitiesDefault, count($_activities)); $i < $iMax; $i++) {
            $activities[] = $_activities[$i];
        }

        $activities_data = [];
        foreach ($activities as $activity) {

            /**
             * @var Activity $activity
             */
            if ($activity->isActive() !== true) {
                continue;
            }


            //TODO:
            $activities_data[] = array(
                'name' => $activity->getName(),
                'image' => $activity->getImage(),
                'description' => $activity->getDescription(),
                'link' => $this->generateUrl(
                    'activity',
                    ['id' => $activity->getId(),
                        'name' => $activity->getMachineName()]
                ),
                'price' => $activity->getInitPrice(),
            );
        }

        $data = array(
            'activities' => $activities_data,
            'loadMore' => $loadMore
        );
        return $this->json($data);
    }

    /**
     * @Route("/activitiesApiGetById/{id}",
     *     name="activitiesApiGetById")
     * @param ActivityRepository $activityRepository
     * @param $id
     * @return JsonResponse
     */
    public function activitiesApiGetById(ActivityRepository $activityRepository, $id): JsonResponse
    {
        $activity = $activityRepository->find($id);

        if (!$activity instanceof Activity) {
            throw new NotFoundHttpException();
        }
        $activity = array(
            'id' => $id,
            'name' => $activity->getName(),
            'imageSmall' => $activity->hasImage() ? $this->imagineCacheManager->getBrowserPath(
                // If $activity->hasImage() prove that getImage() return an Image!
                $activity->getImage()->getStaticImagePath(),
                'min_width_250'
            ) : '',
        );

        $data = array(
            'activity' => $activity,
        );
        return $this->json($data);
    }
}
