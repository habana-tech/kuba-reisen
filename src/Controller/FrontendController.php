<?php

namespace App\Controller;

use App\Entity\Destination;
use App\Entity\Activity;
use App\Entity\FilterTag;
use App\Repository\ActivityRepository;
use App\Repository\DestinationRepository;
use App\Repository\DynamicPageRepository;
use App\Repository\FilterTagRepository;
use App\Repository\ImageRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\Proxy;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;

class FrontendController extends AbstractController
{
    /**
     * @Route("/", name="frontend")
     * @param DynamicPageRepository $dynamicPageRepository
     * @param DestinationRepository $destinationRepository
     * @param FilterTagRepository $filterTagRepository
     * @param ImageRepository $imageRepository
     * @return Response
     */
    public function index(
        DynamicPageRepository $dynamicPageRepository,
        DestinationRepository $destinationRepository,
        FilterTagRepository $filterTagRepository,
        ImageRepository $imageRepository
    ): Response {
        $page = $dynamicPageRepository->findOneBy(['machineName' => 'index']);

        if (!$page) {
            throw new NotFoundHttpException();
        }

        return $this->render('frontend/index.html.twig', [
            'page' => $page,
            'staticPagesUrl' => $dynamicPageRepository->getStaticPagesUrl(),
            'destinations' => $destinationRepository->findAll(),
            'filterTags' => $filterTagRepository->findBy(['pinned' => true]),
            'randomImages' => $imageRepository->findBy([], null, 14),
        ]);
    }


    /**
     * @Route("/destination/{id}/{name}" , name="destination")
     * @param Destination $destination
     * @param ActivityRepository $activityRepository
     * @return Response
     */
    public function destination(
        Destination $destination,
        ActivityRepository $activityRepository
    ): Response {
        if (!$destination) {
            throw new NotFoundHttpException();
        }

        $activities = $activityRepository->findByDestination($destination);

        foreach ($activities as &$item) {
            if ($item->getImage() && $item->getImage() instanceof Proxy) {
                $item->getImage()->__load();
            }
        }

        return $this->render('frontend/destination.html.twig', [
            'destination' => $destination,
            'destinationActivities' => $activities,
        ]);
    }

    /**
     * @Route("/activity/{id}/{name}", name="activity")
     * @param Activity $activity
     * @param ActivityRepository $activityRepository
     * @param FilterTagRepository $filterTagRepository
     * @return Response
     */

    public function activity(
        Activity $activity,
        ActivityRepository $activityRepository,
        FilterTagRepository $filterTagRepository
    ): Response {
        if (!$activity) {
            throw new NotFoundHttpException();
        }

        $activityId = $activity->getId();
        $tags = $activity->getFilterTags();
        $tagsTitles = array_map(static function (FilterTag $tag) {
            return $tag->getTitle();
        }, $tags->toArray());

        $related_activities = $activityRepository
                            ->findByFilter(
                                $tagsTitles,
                                $filterTagRepository,
                                0,
                                3,
                                $activityId
                            );


        return $this->render('frontend/activity.html.twig', [
            'activity' => $activity,
            'related_activities' => $related_activities,
        ]);
    }

    /**
     * @Route("/{name}", name="pageLoad")
     * @param $name
     * @param DynamicPageRepository $dynamicPageRepository
     * @return Response
     * @throws LoaderError
     */
    public function loadPage($name, DynamicPageRepository $dynamicPageRepository): Response
    {
        $name = urldecode($name);
        $page = $dynamicPageRepository->findOneBy(['name' => $name]);

        if (!$page) {
            throw new NotFoundHttpException();
        }
        if (!$page->getTemplate()->getPath()) {
            throw  new LoaderError('Page: "' . $page->getName() . '"
                 . "not contains a valid PageTemplate or it is undefined. "
                 . "Edit the page and add a PageTemplate using the form.');
        }

        return $this->render($page->getTemplate()->getFullPath(), [
            'page' => $page,
        ]);
    }
}
