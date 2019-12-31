<?php

namespace App\Repository;

use App\Entity\ActivityStory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ActivityStory|null find($id, $lockMode = null, $lockVersion = null)
 * @method ActivityStory|null findOneBy(array $criteria, array $orderBy = null)
 * @method ActivityStory[]    findAll()
 * @method ActivityStory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActivityStoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ActivityStory::class);
    }

     /**
      * @return ActivityStory[] Returns an array of ActivityStory objects
      */
    
    public function findLastPublished($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.published = true')
            ->orderBy('a.priority', 'DESC')
            ->setMaxResults($value)
            ->getQuery()
            ->getResult()
        ;
    }
    

    // /**
    //  * @return ActivityStory[] Returns an array of ActivityStory objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ActivityStory
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
