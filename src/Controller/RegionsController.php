<?php

namespace App\Controller;

use App\Entity\Region;
use App\Repository\RegionRepository;
use App\Repository\DynamicPageRepository;
use phpDocumentor\Reflection\Types\Array_;
use Symfony\Component\HttpFoundation\Response;
use App\Repository\DestinationRepository;
use App\Repository\FilterTagRepository;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Twig\Error\LoaderError;



class RegionsController extends AbstractController
{

    public function regionBanner(RegionRepository $regionRepository)
    {
        if(!$banners = $regionRepository->findBy(['type'=>Region::TYPE_BANNER_REGION]))
            return new Response();

        $index = array_rand($banners, 1);
        $banner = $banners[$index];

        return $this->render('frontend/components/global/_banner.html.twig', [
            'banner' => $banner
        ]);
    }

    public function regionTopDestinations(RegionRepository $regionRepository)
    {
        if(!$topDestinations = $regionRepository->findBy(['type'=>Region::TYPE_TOP_DESTINATION_REGION]))
            return new Response();

        return $this->render('frontend/components/global/_top_destination.html.twig', [
            'topDestinations' => $topDestinations,
        ]);
    }

    public function regionAboutUsBenefits(RegionRepository $regionRepository)
    {
        if(!$aboutUsBenefits = $regionRepository->findOneBy(['machineName'=>'about_us_benefits']))
            return new Response();

        return $this->render('frontend/components/about_us/_benefits.html.twig', [
            'aboutUsBenefits' => $aboutUsBenefits,
        ]);
    }

    public function regionAboutUsPhilosophy(RegionRepository $regionRepository)
    {
        if(!$aboutUsPhilosophy = $regionRepository->findOneBy(['machineName'=>'about_us_philosophy']))
            return new Response();

        return $this->render('frontend/components/about_us/_philosophy.html.twig', [
            'aboutUsPhilosophy' => $aboutUsPhilosophy,
        ]);
    }

    public function regionAboutUsTeam(RegionRepository $regionRepository)
    {
        if(!$aboutUsTeam = $regionRepository->findOneBy(['machineName'=>'about_us_team']))
            return new Response();

        return $this->render('frontend/components/about_us/_team.html.twig', [
            'aboutUsTeam' => $aboutUsTeam,
        ]);
    }

    public function regionAboutUsFilters(FilterTagRepository $filterTagRepository)
    {
        $filters = $filterTagRepository->findAll();

        return $this->render('frontend/components/about_us/_filters.html.twig', [
            'filters' => $filters
        ]);
    }

    public function regionFooter(FilterTagRepository $filterTagRepository,
                                 DestinationRepository $destinationRepository,
                                 DynamicPageRepository $dynamicPageRepository)
    {

        return $this->render('frontend/components/global/_footer.html.twig', [
            'staticPagesUrl'=>$dynamicPageRepository->getStaticPagesUrl(),
            'destinations'=>$destinationRepository->findAll(),
            'filterTagsPinned'=>$filterTagRepository->findBy(['pinned'=>true]),
        ]);
    }

    public function regionHeader(DestinationRepository $destinationRepository,
                                FilterTagRepository $filterTagRepository,
                                DynamicPageRepository $dynamicPageRepository): Response
    {

        return $this->render('frontend/components/global/_header.html.twig', [
            'staticPagesUrl'=>$dynamicPageRepository->getStaticPagesUrl(),
            'destinations'=>$destinationRepository->findAll(),
            'filterTagsPinned'=>$filterTagRepository->findBy(['pinned'=>true]),
        ]);
    }

    public function regionBreadcrumbs($items, DynamicPageRepository $dynamicPageRepository){

        return $this->render('frontend/components/global/_breadcrumbs.html.twig', [
            'items' => $items,
            'staticPagesUrl'=>$dynamicPageRepository->getStaticPagesUrl(),
        ]);
    }

    public function regionFaq(RegionRepository $regionRepository)
    {
        if(!$questionSections = $regionRepository->findBy(['type'=>Region::TYPE_FAQ]))
            return new Response();

        return $this->render('frontend/components/faq/_question.html.twig', [
            'questionSections' => $questionSections,
        ]);
    }

    public function regionClientsOpinion(RegionRepository $regionRepository)
    {

        if(!$clientsOpinions = $regionRepository->findOneBy(['type'=>Region::TYPE_CLIENTS_OPINIONS]))
            return new Response();


//        $opinions = array_rand($clientsOpinions->getDescriptionFragments(), 2);
        $opinions = $clientsOpinions->getDescriptionFragments();

        return $this->render('frontend/components/global/_clients_opinions.html.twig', [
            'clientsOpinions' => $clientsOpinions,
            'opinions' => $opinions
        ]);
    }

    public function regionLoader($machineName, RegionRepository $repository, FilterTagRepository $filterTagRepository): Response
    {
        if($region = $repository->findOneBy(['machineName'=>$machineName])) {
            return $this->render($region->getTemplate()->getFullPath(),
                ['region' => $region,
                'filterTags' => $filterTagRepository->findBy(['pinned'=>true]),
                ]);
        }
        return new Response();
    }
}
