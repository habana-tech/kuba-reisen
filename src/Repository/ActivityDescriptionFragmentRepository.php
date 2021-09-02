<?php

namespace App\Repository;

use App\Entity\ActivityDescriptionFragment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ActivityDescriptionFragment|null find($id, $lockMode = null, $lockVersion = null)
 * @method ActivityDescriptionFragment|null findOneBy(array $criteria, array $orderBy = null)
 * @method ActivityDescriptionFragment[]    findAll()
 * @method ActivityDescriptionFragment[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActivityDescriptionFragmentRepository extends ServiceEntityRepository
{

    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ActivityDescriptionFragment::class);
    }

    // /**
    //  * @return DescriptionFragment[] Returns an array of DescriptionFragment objects
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
    public function findOneBySomeField($value): ?DescriptionFragment
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
