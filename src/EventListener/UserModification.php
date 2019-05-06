<?php


namespace App\EventListener;
use App\Entity\Interest;
use App\Entity\DynamicPage;
use App\Entity\PageBlock;
// for Doctrine < 2.4: use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class UserModification
{

    private $tokenStorage;

    public function __construct(TokenStorage $tokenStorage = null)
    {
        $this->tokenStorage = $tokenStorage;
    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        echo "PRE-UPDATE--";
        $this->prePersist($args);
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        echo "PRE-UPDATE--";
        $entity = $args->getObject();

        // only act on some "Product" entity
      /*  if (!$entity instanceof Interest) {
            return;
        }
        */
      if(!isset($entity->hasUserModificationField))
          return;


        //$entityManager = $args->getObjectManager();
        // ... do something with the Product
        if (null !== $currentUser = $this->getCurrentUser()) {
            $entity->setModifiedBy($currentUser);
        } else {
            $entity->setModifiedBy(null);
        }
    }

    public function getCurrentUser()
    {
        if (!$this->tokenStorage) {
            throw new \LogicException('The SecurityBundle is not registered in your application.');
        }

        if (null === $token = $this->tokenStorage->getToken()) {
            return;
        }

        if (!is_object($user = $token->getUser())) {
            // e.g. anonymous authentication
            return;
        }

        return $user;
    }
}