<?php

namespace App\PageManager;

use App\Repository\DynamicPageRepository;

class PageManager
{
    private $map;
    /**
     * @var DynamicPageRepository
     */
    private $repository;

    /**
     * StaticPagesList constructor.
     * @param DynamicPageRepository $pageRepository
     */
    public function __construct(DynamicPageRepository $pageRepository)
    {
        $this->repository = $pageRepository;
        $this->map = $pageRepository->getStaticPagesMap();
    }

    public static function pageListMachineNames(): array
    {
        return StaticPagesList::PAGE_MACHINE_NAMES;
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

    public function getPageByName($name)
    {
        return $this->repository->findOneByName($name);
    }

    public function getPageByMachineName($machineName)
    {
        return $this->repository->findOneByMachineName($machineName);
    }
}
