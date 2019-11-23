<?php

namespace App\Repository;

use App\Entity\ContactPlaning;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method ContactPlaning|null find($id, $lockMode = null, $lockVersion = null)
 * @method ContactPlaning|null findOneBy(array $criteria, array $orderBy = null)
 * @method ContactPlaning[]    findAll()
 * @method ContactPlaning[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ContactPlaningRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ContactPlaning::class);
    }

    // /**
    //  * @return ContactPlaning[] Returns an array of ContactPlaning objects
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
    public function findOneBySomeField($value): ?ContactPlaning
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
