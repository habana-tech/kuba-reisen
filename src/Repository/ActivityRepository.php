<?php

namespace App\Repository;

use App\Entity\Activity;
use App\Entity\FilterTag;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Activity|null find($id, $lockMode = null, $lockVersion = null)
 * @method Activity|null findOneBy(array $criteria, array $orderBy = null)
 * @method Activity[]    findAll()
 * @method Activity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActivityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Activity::class);
    }

//
    /**
     * @return Activity[] Returns an array of Activity objects
     */
    public function findStartingFrom($pos, $amount){

        return $this->createQueryBuilder('activity')
            ->orderBy('activity.priority','DESC')
            ->setFirstResult($pos)
            ->setMaxResults($amount)
            ->getQuery()
            ->getResult();
    }


    /**
     * @param $filters
     * @param FilterTagRepository $filterTagRepository
     * @param $pos
     * @param $amount
     * @return Activity[] Returns an array of Activity objects
     */
    public function findByFilter($filters,
                                 FilterTagRepository $filterTagRepository,
                                 $pos, $amount, $selfId=-1): array
    {

        $filter_objs = $filterTagRepository->findBy(['title'=>$filters]);

        $filter_ids = array_map(static function (FilterTag $filterTag) {return $filterTag->getId();},
                                $filter_objs);

        return $this->createQueryBuilder('activity')
            ->join('activity.filterTags', 'filter_tags')
            ->andWhere('filter_tags.id in (:ids)')
            ->andWhere('activity.id != (:self_id)')
            ->orderBy('activity.priority','DESC')
            ->setParameter('ids', $filter_ids)
            ->setParameter('self_id', $selfId)
            ->setFirstResult($pos)
            ->setMaxResults($amount)
            ->getQuery()
            ->getResult();
    }


    /**
     * @param $search
     * @param $pos
     * @param $amount
     * @return Activity[] Returns an array of Activity objects
     */
    public function findBySearch($search, $pos, $amount): array
    {
        return $this->createQueryBuilder('activity')
            ->where('activity.name like :search')
            ->orWhere('activity.description like :search')
            ->orderBy('activity.priority','DESC')
            ->setParameter('search',"%$search%")
            ->setFirstResult($pos)
            ->setMaxResults($amount)
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @return Activity[] Returns an array of Activity objects
     */
    public function findNamesCollection(array $ids){

        return $this->createQueryBuilder('activity')
            ->select('activity.name')
            ->where('activity.id in (:ids)')
            ->setParameter('ids', $ids)
            ->getQuery()
            ->getResult()
            ;
    }
}
