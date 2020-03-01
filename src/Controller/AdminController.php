<?php

namespace App\Controller;

use EasyCorp\Bundle\EasyAdminBundle\Controller\EasyAdminController;
use FOS\UserBundle\Doctrine\UserManager;
use FOS\UserBundle\Model\UserManagerInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin")
 *
 */
class AdminController extends EasyAdminController
{
    /**
     * @var UserManager
     */
    private $userManager;


    /**
     * AdminController constructor.
     * @param UserManagerInterface $userManager
     */
    public function __construct(UserManagerInterface $userManager)
    {
        $this->userManager = $userManager;
    }

    public function createNewUserEntity()
    {
        return $this->userManager->createUser();
    }

    public function persistUserEntity($user): void
    {
        $this->userManager->updateUser($user, false);
        $this->persistEntity($user);
    }

    public function updateUserEntity($user): void
    {
        $this->userManager->updateUser($user, false);
        $this->updateEntity($user);
    }
}
