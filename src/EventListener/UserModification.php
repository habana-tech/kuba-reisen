<?php


namespace App\EventListener;
use App\Entity\Interest;
use App\Entity\DynamicPage;
use App\Entity\User;
// for Doctrine < 2.4: use Doctrine\ORM\Event\LifecycleEventArgs;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class UserModification
{

    private $tokenStorage;
//
//    public function __construct(TokenStorage $tokenStorage = null)
//    {
//        $this->tokenStorage = $tokenStorage;
//    }

    public function preUpdate(LifecycleEventArgs $args)
    {
        $this->prePersist($args);
    }

    public function prePersist(LifecycleEventArgs $args)
    {
        
        $entity = $args->getObject();
       
        //no User modification for this entity
        if(!isset($entity->hasUserModificationField))
            return;

        //$entityManager = $args->getObjectManager();
        // ... do something with the Entity
        $currentUser = $this->getCurrentUser();
        if ($currentUser && $currentUser instanceof User)
            $entity->setModifiedBy($currentUser);
        else 
            $entity->setModifiedBy(null);
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
            // e.g. anonymous authenticatio
            return;
        }

        return $user;
    }
}
