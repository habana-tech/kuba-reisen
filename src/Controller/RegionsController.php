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

    /**
     * @param RegionRepository $regionRepository
     * @param int $regionType
     * @return Response
     */
    public function regionBanner(RegionRepository $regionRepository, $regionType = Region::TYPE_BANNER_REGION): Response
    {
        if (!$banners = $regionRepository->findBy(['type' => $regionType])) {
            return new Response();
        }

        $index = array_rand($banners, 1);
        $banner = $banners[$index];

        return $this->render('frontend/components/global/_banner.html.twig', [
            'banner' => $banner
        ]);
    }

    /**
     * @param RegionRepository $regionRepository
     * @return Response
     */
    public function regionTopDestinations(RegionRepository $regionRepository): Response
    {
        if (!$topDestinations = $regionRepository->findBy(['type' => Region::TYPE_TOP_DESTINATION_REGION])) {
            return new Response();
        }

        return $this->render('frontend/components/global/_top_destination.html.twig', [
            'topDestinations' => $topDestinations,
        ]);
    }

    /**
     * @param RegionRepository $regionRepository
     * @return Response
     */
    public function regionAboutUsBenefits(RegionRepository $regionRepository): Response
    {
        if (!$aboutUsBenefits = $regionRepository->findOneBy(['machineName' => 'about_us_benefits'])) {
            return new Response();
        }

        return $this->render('frontend/components/about_us/_benefits.html.twig', [
            'aboutUsBenefits' => $aboutUsBenefits,
        ]);
    }

    /**
     * @param RegionRepository $regionRepository
     * @return Response
     */
    public function regionAboutUsPhilosophy(RegionRepository $regionRepository): Response
    {
        if (!$aboutUsPhilosophy = $regionRepository->findOneBy(['machineName' => 'about_us_philosophy'])) {
            return new Response();
        }

        return $this->render('frontend/components/about_us/_philosophy.html.twig', [
            'aboutUsPhilosophy' => $aboutUsPhilosophy,
        ]);
    }

    /**
     * @param RegionRepository $regionRepository
     * @return Response
     */
    public function regionAboutUsTeam(RegionRepository $regionRepository): Response
    {
        if (!$aboutUsTeam = $regionRepository->findOneBy(['machineName' => 'about_us_team'])) {
            return new Response();
        }

        return $this->render('frontend/components/about_us/_team.html.twig', [
            'aboutUsTeam' => $aboutUsTeam,
        ]);
    }

    /**
     * @param FilterTagRepository $filterTagRepository
     * @return Response
     */
    public function regionAboutUsFilters(FilterTagRepository $filterTagRepository): Response
    {
        $filters = $filterTagRepository->findAllActive();

        return $this->render('frontend/components/about_us/_filters.html.twig', [
            'filters' => $filters
        ]);
    }

    public function regionFooter(
        FilterTagRepository $filterTagRepository,
        DestinationRepository $destinationRepository
    ): Response {
        return $this->render('frontend/components/global/_footer.html.twig', [
            'destinations' => $destinationRepository->findAllActive(),
            'filterTagsPinned' => $filterTagRepository->findActivesBy(['pinned' => true]),
        ]);
    }

    public function regionHeader(
        DestinationRepository $destinationRepository,
        FilterTagRepository $filterTagRepository
    ): Response {
        return $this->render('frontend/components/global/_header.html.twig', [
            'destinations' => $destinationRepository->findAllActive(),
            'filterTagsPinned' => $filterTagRepository->findActivesBy(['pinned' => true]),
        ]);
    }

    public function regionBreadcrumbs($items): Response
    {
        return $this->render('frontend/components/global/_breadcrumbs.html.twig', [
            'items' => $items
        ]);
    }

    public function regionFaq(RegionRepository $regionRepository): Response
    {
        if (!$questionSections = $regionRepository->findBy(['type' => Region::TYPE_FAQ])) {
            return new Response("Region doesn't exist", 404);
        }

        return $this->render('frontend/components/faq/_question.html.twig', [
            'questionSections' => $questionSections,
        ]);
    }

    public function regionClientsOpinion(RegionRepository $regionRepository): Response
    {
        if (
            !$clientsOpinions = $regionRepository->findOneBy(
                ['active' => true,
                'type' => Region::TYPE_CLIENTS_OPINIONS]
            )
        ) {
            return new Response("Region doesn't exist", 404);
        }


//        $opinions = array_rand($clientsOpinions->getDescriptionFragments(), 2);
        $opinions = $clientsOpinions->getDescriptionFragments();

        return $this->render('frontend/components/global/_clients_opinions.html.twig', [
            'clientsOpinions' => $clientsOpinions,
            'opinions' => $opinions
        ]);
    }


    public function regionExcursionsActivities(RegionRepository $regionRepository): Response
    {
        if (
            !$banner = $regionRepository->findOneBy(
                ['active' => true,
                'type' => Region::TYPE_EXCURSIONS_ACTIVITIES]
            )
        ) {
            return new Response("Region doesn't exist", 404);
        }


        return $this->render('frontend/components/global/_excursions_activities_banner.html.twig', [
            'banner' => $banner,
        ]);
    }

    public function regionLoader(
        $machineName,
        RegionRepository $repository,
        FilterTagRepository $filterTagRepository
    ): Response {
        if ($region = $repository->findOneBy(['machineName' => $machineName])) {
            return $this->render(
                $region->getTemplate()->getFullPath(),
                ['region' => $region,
                'filterTags' => $filterTagRepository->findActivesBy(['pinned' => true]),
                ]
            );
        }
        return new Response();
    }
}
