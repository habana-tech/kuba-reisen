<?php

namespace App\PageManager;

use App\Repository\DynamicPageRepository;

class StaticPagesList
{
    private $map;

    public const PAGE_MACHINE_NAMES = [
        'index',
        'exploring',
        'excursions',
        'tours',
        'activities',
        'bucket_list',
        'faq',
        'good_to_know',
        'travel_info',
        'about_us',
        'contact',
        'travel_conditions',
        'protection_data_declaration',
        'imprint' //like main staff
    ];

    /**
     * StaticPagesList constructor.
     * @param DynamicPageRepository $pageRepository
     */
    public function __construct(DynamicPageRepository $pageRepository)
    {
        $this->map = $pageRepository->getStaticPagesMap();
    }

    public static function pageListMachineNames(): array
    {
        return self::PAGE_MACHINE_NAMES;
    }

    public function getMap(): array
    {
        return $this->map;
    }

    public function getUrl($machineName): ?string
    {
        return urlencode($this->getName($machineName));
    }

    public function getName($machineName)
    {
        return $this->map[$machineName] ?? null;
    }
}
