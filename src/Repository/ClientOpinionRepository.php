<?php

namespace App\Repository;

use App\Entity\ClientOpinion;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ClientOpinion|null find($id, $lockMode = null, $lockVersion = null)
 * @method ClientOpinion|null findOneBy(array $criteria, array $orderBy = null)
 * @method ClientOpinion[]    findAll()
 * @method ClientOpinion[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ClientOpinionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ClientOpinion::class);
    }

    // /**
    //  * @return ClientOpinion[] Returns an array of ClientOpinion objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ClientOpinion
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
