<?php

namespace App\Repository;

use App\Entity\DestinationFragment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method DestinationFragment|null find($id, $lockMode = null, $lockVersion = null)
 * @method DestinationFragment|null findOneBy(array $criteria, array $orderBy = null)
 * @method DestinationFragment[]    findAll()
 * @method DestinationFragment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DestinationFragmentRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DestinationFragment::class);
    }

    // /**
    //  * @return DestinationFragment[] Returns an array of DestinationFragment objects
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
    public function findOneBySomeField($value): ?DestinationFragment
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
