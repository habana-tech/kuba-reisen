<?php

namespace App\Controller;

use App\Entity\Activity;
use App\Entity\Destination;
use App\Entity\Region;
use App\Repository\ActivityRepository;
use App\Repository\RegionRepository;
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

    public function regionBanner(RegionRepository $bannerRepository)
    {
        if(!$banners = $bannerRepository->findBy(['type'=>Region::TYPE_BANNER_REGION]))
            return new Response();

        $index = array_rand($banners, 1);
        $banner = $banners[$index];

        return $this->render('frontend/components/global/_banner.html.twig', [
            'banner' => $banner
        ]);
    }

    public function regionTopDestinations(RegionRepository $bannerRepository)
    {
        if(!$banners = $bannerRepository->findBy(['type'=>Region::TYPE_TOP_DESTINATION_REGION]))
            return new Response();

        return $this->render('frontend/components/global/_top_destination.html.twig', [
            'page' => $banners,
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
                                FilterTagRepository $filterTagRepository): Response
    {
        return $this->render('frontend/components/global/_header.html.twig', [
            'destinations'=>$destinationRepository->findAll(),
            'filterTags'=>$filterTagRepository->findByPinned(),
        ]);
    }

    public function regionLoader($machineName, RegionRepository $repository): Response
    {
        if($region = $repository->findOneBy(['machineName'=>$machineName])) {
            return $this->render($region->getTemplate()->getFullPath(),
                [
                    'page' => $region
                ]);
        }
        return new Response();
    }
}
