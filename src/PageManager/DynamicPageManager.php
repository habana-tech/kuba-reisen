<?php


namespace App\PageManager;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\DynamicPage;
use App\Repository\DynamicPageRepository;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;


class DynamicPageManager
{
    private $entitymanager;
    private $dynamicPage;
    private $repository;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entitymanager = $entityManager;
        $this->repository = $this->entitymanager->getRepository(DynamicPage::class);
    }


    public function findByOrCreateIfDoesntExist(array $findOneBy)
    {
        $this->dynamicPage = $this->repository->findOneBy($findOneBy);
        if(!$this->dynamicPage){
            $page = new DynamicPage();
            $page->setPageName($findOneBy['pageName'])
                ->setLanguage($findOneBy['language']);

            $this->entitymanager->persist($page);
            $this->entitymanager->flush();

            $this->dynamicPage = $page;

        }

        return $this->dynamicPage;
    }

    public function findOneBy(array $findOneBy)
    {
        return $this->dynamicPage = $this->repository->findOneBy($findOneBy);
    }


}