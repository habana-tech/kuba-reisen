<?php


namespace App\EventListener;
use App\Entity\Interest;
use App\Entity\DynamicPage;
use App\Entity\DynamicPageRevision as PageRevision;
// for Doctrine < 2.4: use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Psr\Log\LoggerInterface;

class DynamicPageRevision
{
    private $entityManager;
    private $dynamicPage;

    public function postUpdate(LifecycleEventArgs $args)
    {

        $this->dynamicPage = $args->getObject();

        if (!$this->dynamicPage instanceof DynamicPage) {
            return;
        }

        $this->entityManager = $args->getObjectManager();

        $rev = new PageRevision();
        $rev->setDynamicPage($this->dynamicPage);
        $rev->setModifiedBy($this->dynamicPage->getModifiedBy());
        $rev->setPageContent($this->dynamicPage->getPageContent());

        $this->entityManager->persist($rev);
        $this->entityManager->flush();
    }

    public function postPersist(LifecycleEventArgs $args)
    {
        $this->postUpdate( $args);
    }

}
