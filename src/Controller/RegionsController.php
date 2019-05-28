<?php

namespace App\Controller;

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

    public function regionTopDestinations(Request $request, DynamicPageManager $pm)
    {
        $pageinfo = [
            'pageName'=>'_top_destinations',
            'language'=>'de'
//            'language'=>$request->getLocale()
        ];

        $page = $pm->findByOrCreateIfDoesNotExist($pageinfo, 'components/global/_top_destination.html.twig');
        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/components/global/_top_destination.html.twig', [
            'page' => $page,
        ]);
    }

    public function regionTravelOptions(Request $request, DynamicPageManager $pm)
    {
        $pageinfo = [
            'pageName'=>'_travel_options',
            'language'=>'de'
//            'language'=>$request->getLocale()
        ];

        $page = $pm->findByOrCreateIfDoesNotExist($pageinfo, 'components/index/_travel_options.html.twig');
        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/components/index/_travel_options.html.twig', [
            'page' => $page,
        ]);
    }

    public function regionFooter(Request $request, DynamicPageManager $pm,
                                FilterTagRepository $filterTagRepository,
                                DestinationRepository $destinationRepository)
    {
        $pageinfo = [
            'pageName'=>'_footer',
            'language'=>'de'
//            'language'=>$request->getLocale()
        ];

        $page = $pm->findByOrCreateIfDoesNotExist($pageinfo, 'components/global/_footer.html.twig');
        if(!$page)
            throw new NotFoundHttpException();

        return $this->render('frontend/components/global/_footer.html.twig', [
            'page' => $page,
            'destinations'=>$destinationRepository->findByLang($request->getLocale()),
            'filterTags'=>$filterTagRepository->findByPinned($request->getLocale()),
        ]);
    }

    public function regionHeader(Request $request, DestinationRepository $destinationRepository,
                                FilterTagRepository $filterTagRepository)
    {
        return $this->render('frontend/components/global/_header.html.twig', [
            'destinations'=>$destinationRepository->findByLang('de'),
//            'destinations'=>$destinationRepository->findByLang($request->getLocale()),
            'filterTags'=>$filterTagRepository->findByPinned('de'),
//            'filterTags'=>$filterTagRepository->findByPinned($request->getLocale()),
        ]);
    }
}
