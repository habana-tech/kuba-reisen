<?php

namespace App\Repository;

use App\Entity\TopDestination;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method TopDestination|null find($id, $lockMode = null, $lockVersion = null)
 * @method TopDestination|null findOneBy(array $criteria, array $orderBy = null)
 * @method TopDestination[]    findAll()
 * @method TopDestination[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TopDestinationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TopDestination::class);
    }

    // /**
    //  * @return TopDestination[] Returns an array of TopDestination objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TopDestination
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
