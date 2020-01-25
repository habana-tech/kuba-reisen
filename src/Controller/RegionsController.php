<?php

namespace App\Controller;

use App\Entity\Activity;
use App\Entity\Destination;
use App\Repository\ActivityRepository;
use App\Repository\BannerRepository;
use App\Repository\DynamicPageRepository;
use App\Repository\TopDestinationRepository;
use phpDocumentor\Reflection\Types\Array_;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\PageManager\DynamicPageManager;
use App\Repository\DestinationRepository;
use App\Repository\FilterTagRepository;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;

class RegionsController extends AbstractController
{

    public function regionTopDestinations(TopDestinationRepository $topDestinationRepository)
    {
        $topDestinations = $topDestinationRepository->findAll();

        return $this->render('frontend/components/global/_top_destination.html.twig', [
            'topDestinations' => $topDestinations,
        ]);
    }

    public function regionBanner(BannerRepository $bannerRepository)
    {
        if(!$banners = $bannerRepository->findAll())
            return new Response();

        $index = array_rand($banners, 1);
        $banner = $banners[$index];

        return $this->render('frontend/components/global/_banner.html.twig', [
            'banner' => $banner
        ]);
    }

    public function regionFooter(FilterTagRepository $filterTagRepository,
                                 DestinationRepository $destinationRepository)
    {

        return $this->render('frontend/components/global/_footer.html.twig', [
            'destinations'=>$destinationRepository->findAll(),
            'filterTags'=>$filterTagRepository->findByPinned(),
        ]);
    }

    public function regionHeader(DestinationRepository $destinationRepository,
                                FilterTagRepository $filterTagRepository)
    {
        return $this->render('frontend/components/global/_header.html.twig', [
            'destinations'=>$destinationRepository->findAll(),
            'filterTags'=>$filterTagRepository->findByPinned(),
        ]);
    }
}
