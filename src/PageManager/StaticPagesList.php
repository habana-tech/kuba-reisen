<?php

namespace App\PageManager;

use App\Repository\DynamicPageRepository;

class StaticPagesList
{

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


    public static function pageListMachineNames(): array
    {
        return self::PAGE_MACHINE_NAMES;
    }

}
