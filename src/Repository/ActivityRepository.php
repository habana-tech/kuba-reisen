<?php

namespace App\Repository;

use App\Entity\Activity;
use App\Entity\FilterTag;
use App\Repository\FilterTagRepository;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method Activity|null find($id, $lockMode = null, $lockVersion = null)
 * @method Activity|null findOneBy(array $criteria, array $orderBy = null)
 * @method Activity[]    findAll()
 * @method Activity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActivityRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Activity::class);
    }

    // /**
    //  * @return Activity[] Returns an array of Activity objects
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
    public function findOneBySomeField($value): ?Activity
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    /**
    * @return Activity[] Returns an array of Activity objects
    */
    public function findByFilter($filters, FilterTagRepository $filterTagRepository) {

        $filters = explode(',', $filters);
        $filter_objs = $filterTagRepository->findBy(['title'=>$filters]);

        $filter_ids = array_map( function (FilterTag $filterTag) {return $filterTag->getId();},
                                $filter_objs);

        return $this->createQueryBuilder('activity')
            ->join('activity.filterTags', 'filter_tags')
            ->where('filter_tags.id in (:ids)')
            ->setParameter('ids', $filter_ids)
            ->getQuery()
            ->getResult();
    }

    /**
     * @return Activity[] Returns an array of Activity objects
     */
    public function findBySearch($search){
        return $this->createQueryBuilder('activity')
            ->where('activity.name like :search')
            ->setParameter('search',"%$search%")
            ->getQuery()
            ->getResult()
            ;
    }
}
