<?php

namespace App\PageManager;

use App\Repository\DynamicPageRepository;
use Symfony\Component\HttpFoundation\RequestStack;

class PageManager
{
    private $map;
    /**
     * @var DynamicPageRepository
     */
    private $repository;
    /**
     * @var RequestStack
     */
    private $stack;

    /**
     * StaticPagesList constructor.
     * @param DynamicPageRepository $pageRepository
     * @param RequestStack $stack
     */
    public function __construct(DynamicPageRepository $pageRepository, RequestStack $stack)
    {
        $this->repository = $pageRepository;
        $this->map = $pageRepository->getStaticPagesMap();
        $this->stack = $stack;
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

    public function getCurrentPageMachineName()
    {
        $path = basename($this->stack->getMasterRequest() ? $this->stack->getMasterRequest()->getPathInfo() : null);

        foreach ($this->map as $index => $value) {
            if ($value === $path) {
                return $index;
            }
        }
    }
}
