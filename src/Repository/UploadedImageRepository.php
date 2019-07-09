<?php

namespace App\Repository;

use App\Entity\UploadedImage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method UploadedImage|null find($id, $lockMode = null, $lockVersion = null)
 * @method UploadedImage|null findOneBy(array $criteria, array $orderBy = null)
 * @method UploadedImage[]    findAll()
 * @method UploadedImage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UploadedImageRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, UploadedImage::class);
    }

    // /**
    //  * @return UploadedImage[] Returns an array of UploadedImage objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UploadedImage
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function findLastImages($value)
    {
        return $this->createQueryBuilder('u')
            ->orderBy('u.id', 'DESC')
            ->setMaxResults($value)
            ->getQuery()
            ->getResult()
        ;
    }
}
