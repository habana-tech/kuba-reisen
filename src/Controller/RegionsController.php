<?php

namespace App\Controller;

use App\Entity\Activity;
use App\Entity\Destination;
use phpDocumentor\Reflection\Types\Array_;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\PageManager\DynamicPageManager;
use App\Repository\DestinationRepository;
use App\Repository\FilterTagRepository;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class RegionsController extends AbstractController
{

    public function regionTopDestinations(DynamicPageManager $pm)
    {
        $pageinfo = [
            'pageName'=>'_top_destinations',
            'language'=>'de'
        ];

        $topDestinations = array();
        $topDestinations['kuba_10'] = $this->getDoctrine()
                                ->getRepository(Activity::class)
                                ->findOneBy(['name'=>'Kuba in 10 Tagen']);
        $topDestinations['havanna'] = $this->getDoctrine()
                                ->getRepository(Activity::class)
                                ->findOneBy(['name'=>'Havanna Komplett']);
        $topDestinations['inseln'] = $this->getDoctrine()
                                ->getRepository(Destination::class)
                                ->findOneBy(['name'=>'Inseln & Strände']);
        $topDestinations['queen'] = $this->getDoctrine()
                                ->getRepository(Activity::class)
                                ->findOneBy(['name'=>'Show Havana Queens']);



        $page = $pm->findByOrCreateIfDoesNotExist($pageinfo, 'components/global/_top_destination.html.twig');
        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/components/global/_top_destination.html.twig', [
            'page' => $page,
            'topDestinations' => $topDestinations,
        ]);
    }

    public function regionTravelOptions(DynamicPageManager $pm,
                                        FilterTagRepository $filterTagRepository)
    {
        $pageinfo = [
            'pageName'=>'_travel_options',
            'language'=>'de'
        ];

        $page = $pm->findByOrCreateIfDoesNotExist($pageinfo, 'components/global/_travel_options.html.twig');
        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/components/global/_travel_options.html.twig', [
            'page' => $page,
            'filterTags'=>$filterTagRepository->findByPinned('de'),
        ]);
    }

    public function regionFooter(DynamicPageManager $pm,
                                FilterTagRepository $filterTagRepository,
                                DestinationRepository $destinationRepository)
    {
        $pageinfo = [
            'pageName'=>'_footer',
            'language'=>'de'
        ];

        $page = $pm->findByOrCreateIfDoesNotExist($pageinfo, 'components/global/_footer.html.twig');
        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/components/global/_footer.html.twig', [
            'page' => $page,
            'destinations'=>$destinationRepository->findByLang('de'),
            'filterTags'=>$filterTagRepository->findByPinned('de'),
        ]);
    }

    public function regionHeader(DestinationRepository $destinationRepository,
                                FilterTagRepository $filterTagRepository)
    {
        return $this->render('frontend/components/global/_header.html.twig', [
            'destinations'=>$destinationRepository->findByLang('de'),
            'filterTags'=>$filterTagRepository->findByPinned('de'),
        ]);
    }
}
