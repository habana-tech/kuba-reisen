<?php

namespace App\Repository;

use App\Entity\DynamicPageRevision;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method DynamicPageRevision|null find($id, $lockMode = null, $lockVersion = null)
 * @method DynamicPageRevision|null findOneBy(array $criteria, array $orderBy = null)
 * @method DynamicPageRevision[]    findAll()
 * @method DynamicPageRevision[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DynamicPageRevisionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DynamicPageRevision::class);
    }

    // /**
    //  * @return DynamicPageRevision[] Returns an array of DynamicPageRevision objects
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
    public function findOneBySomeField($value): ?DynamicPageRevision
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
