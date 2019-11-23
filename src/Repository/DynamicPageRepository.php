<?php

namespace App\Repository;

use App\Entity\DynamicPage;
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

    // /**
    //  * @return DynamicPage[] Returns an array of DynamicPage objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DynamicPage
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
