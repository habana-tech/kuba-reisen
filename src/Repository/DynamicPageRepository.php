<?php

namespace App\Repository;

use App\Entity\DynamicPage;
use App\PageManager\StaticPagesList;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method DynamicPage|null find($id, $lockMode = null, $lockVersion = null)
 * @method DynamicPage|null findOneBy(array $criteria, array $orderBy = null)
 * @method DynamicPage[]    findAll()
 * @method DynamicPage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DynamicPageRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DynamicPage::class);
    }


    /**
     * @return array
     */
    public function getStaticPagesMap(): array
    {
        $staticPagesMachineNames = StaticPagesList::PAGE_MACHINE_NAMES;

        $staticPagesNamesMap = [];

        foreach ($staticPagesMachineNames as $staticPage) {
            if ($page = $this->findOneBy(['machineName' => $staticPage])) {
                $staticPagesNamesMap[$staticPage] = $page->getName();
            }
        }
        return $staticPagesNamesMap;
    }
}
