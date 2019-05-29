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


    public function findByOrCreateIfDoesNotExist(array $findOneBy, $template = null)
    {
        $this->dynamicPage = $this->repository->findOneBy($findOneBy);
        if(!$this->dynamicPage){
            $page = new DynamicPage($template);
            $page->setPageName($findOneBy['pageName']);

            if(isset($findOneBy['language']))
                $page->setLanguage($findOneBy['language']);

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

    public function find($id)
    {
        return $this->dynamicPage = $this->repository->find($id);
    }

    public function saveChanges(){
        $this->entitymanager->persist($this->dynamicPage);
        $this->entitymanager->flush();

    }

}