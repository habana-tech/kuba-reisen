<?php

namespace App\Controller;

use App\Entity\Destination;
use App\Entity\Activity;
use App\Entity\DynamicPage;
use App\Entity\FilterTag;
use App\Repository\ActivityRepository;
use App\Repository\DestinationRepository;
use App\Repository\DynamicPageRepository;
use App\Repository\FilterTagRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\Proxy;
use Proxies\__CG__\App\Entity\Image;
use ProxyManager\Proxy\ProxyInterface;
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
     * @param DynamicPageRepository $pm
     * @param DestinationRepository $destinationRepository
     * @param FilterTagRepository $filterTagRepository
     * @return Response
     * @throws LoaderError
     */
    public function index(DynamicPageRepository $dynamicPageRepository,
                          DestinationRepository $destinationRepository,
                          FilterTagRepository $filterTagRepository): Response
    {

        $page = $dynamicPageRepository->findOneBy([
            'name'=>'index'
        ]);

        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/index.html.twig', [
            'page' => $page,
            'destinations' => $destinationRepository->findAll(),
            'filterTags' => $filterTagRepository->findByPinned(),
        ]);
    }


    /**
     * @Route("/destination/{id}/{name}" , name="destination")
     * @param Destination $destination
     * @param ActivityRepository $activityRepository
     * @param EntityManager $em
     * @return Response
     */
    public function destination(Destination $destination, ActivityRepository $activityRepository, EntityManagerInterface $em): Response
    {
        if(!$destination) {
            throw new NotFoundHttpException();
        }

        $activities = $activityRepository->findByDestination($destination);

        foreach ($activities as &$item)
            if($item->getImage() && $item->getImage() instanceof Proxy)
                $item->getImage()->__load();

        return $this->render('frontend/destination.html.twig', [
            'destination' => $destination,
            'destination_activities' => $activities,
        ]);
    }

    /**
     * @Route("/activity/{id}/{name}", name="activity")
     * @param Activity $activity
     * @param ActivityRepository $activityRepository
     * @param FilterTagRepository $filterTagRepository
     * @return Response
     */

    public function activity(Activity $activity, ActivityRepository $activityRepository, FilterTagRepository $filterTagRepository)
    {
        if(!$activity) {
            throw new NotFoundHttpException();
        }

        $activityId = $activity->getId();
        $tags = $activity->getFilterTags();
        $tagsTitles = array_map(static function (FilterTag $tag){ return $tag->getTitle();}, $tags->toArray());

        $related_activities = $activityRepository
                            ->findByFilter($tagsTitles,
                                $filterTagRepository,
                                0, 3, $activityId);


        return $this->render('frontend/activity.html.twig', [
            'activity' => $activity,
            'related_activities'=> $related_activities,
        ]);
    }

    /**
     * @Route("/{name}", name="pageLoad")
     * @param DynamicPage $page
     * @return Response
     * @throws LoaderError
     */
    public function loadPage(DynamicPage $page): Response
    {

        if(!$page)
            throw new NotFoundHttpException();
        if(!$page->getTemplate()->getPath())
            throw  new LoaderError('Page: "'.$page->getName().'" not contains a valid PageTemplate or it is undefined. Edit the page and add a PageTemplate using the form.');

        return $this->render('frontend/'.$page->getTemplate()->getPath(), [
            'page' => $page,
        ]);
    }

}
