<?php

namespace App\SecurityAuths;

use CKSource\Bundle\CKFinderBundle\Authentication\Authentication as AuthenticationBase;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Security\Core\Authorization\AuthorizationCheckerInterface;

class CKFinderAuth extends AuthenticationBase
{
    protected $authorizationChecker;

    public function __construct(AuthorizationCheckerInterface $authorizationChecker = null)
    {
//
//        $this->setContainer();
////        dump($this->$container);
//        $this->authorizationChecker = $authorizationChecker;
    }

    public function authenticate()
    {
//        dump($this->$container);
//        if(false === $this->authorizationChecker->isGranted("ROLE_EDITOR"))
//            throw $this->createAccessDeniedException();

        return true;
    }
}
