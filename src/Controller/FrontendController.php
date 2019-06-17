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
     * @Route("/activity/{id}/{name}", name="activity")
     */
    public function activity(Activity $activity)
    {
        if(!$activity)
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
            'dynamic_page_id' => $activity->getDynamicPage()->getId(),
            'page' => $activity->getDynamicPage(),
            'activity' => $activity,
            'related_activities'=>$related_activities,
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

            for($i = 0;$i<10;$i++){
               $contents[] = [
                   'title'=>'<h3>Erkunden Sie mit dem Stand-Up-Paddel die Playas del Este. </h3>',
                    'map'=>json_encode([
                            'bearing' => 27,
                            'center'=> [-rand(820, 840)/10.0, rand(210, 230)/10.0],
                            'zoom'=> rand(70,150)/10.0,
                            'pitch'=> 20
                        ]),
                    'content'=>"<p> Faul am Strand herumhängen war gestern. Erkunden Sie die Strände Havannas,</p>",
                ];
            }


        return $this->render('frontend/bucket_list.html.twig', [
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'contents'=>$contents,
        ]);
    }
}
