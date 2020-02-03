<?php

namespace App\Utils;

use App\Repository\DynamicPageRepository;

class Utils
{
    public function __construct(DynamicPageRepository $dynamicPageRepository)
    {
        $this->dynamicPageRepository = $dynamicPageRepository;
    }

    public function getStaticPagesUrl()
    {
        $staticPages = ['index', 'exploring', 'excursions', 'tours',
            'activities', 'bucket_list',
            'faq', 'good_to_know', 'travel_info',
            'about_us', 'contact'];

        $staticPagesUrl = [];

        foreach ($staticPages as $staticPage) {
            $page = $this->dynamicPageRepository->findOneBy(['machineName' => $staticPage]);
            $staticPagesUrl[$staticPage] = $page->getName();
        }

        return $staticPagesUrl;
    }
}