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

    public function postPersist(LifecycleEventArgs $args,  LoggerInterface $logger)
    {

        $this->dynamicPage = $args->getObject();


        $logger->info('listener revisions, '.$this->dynamicPage instanceof DynamicPage);
        // only act on some "DynamicPage" entity
        if (!$this->dynamicPage instanceof DynamicPage) {
            return;
        }

        $this->entityManager = $args->getObjectManager();

        $rev = new PageRevision();
        $rev->setDynamicPage($this->dynamicPage);
        $rev->setPageContent($this->dynamicPage->getPageContent());

        dump($rev);
        dump($this->entityManager->persist($rev));
        $this->entityManager->flush();
    }

}
