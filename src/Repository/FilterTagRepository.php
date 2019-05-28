<?php

namespace App\Repository;

use App\Entity\FilterTag;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method FilterTag|null find($id, $lockMode = null, $lockVersion = null)
 * @method FilterTag|null findOneBy(array $criteria, array $orderBy = null)
 * @method FilterTag[]    findAll()
 * @method FilterTag[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FilterTagRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, FilterTag::class);
    }

    // /**
    //  * @return FilterTag[] Returns an array of FilterTag objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?FilterTag
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function findByLang($lang){
        return $this->createQueryBuilder('filterTag')
            ->where('filterTag.language = :lang')
            ->setParameter('lang', $lang)
            ->getQuery()
            ->getResult();
    }

    public function findByPinned($lang){
        return $this->createQueryBuilder('filterTag')
            ->where('filterTag.language = :lang')
            ->andWhere('filterTag.pinned = true')
            ->setParameter('lang', $lang)
            ->getQuery()
            ->getResult();
    }

}