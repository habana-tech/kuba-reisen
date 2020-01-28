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
     */
    public function __construct(UserManagerInterface $userManager)
    {
        $this->userManager = $userManager;
    }

    public function createNewUserEntity(UserManager $userManager)
    {
        return $userManager->createUser();
    }

    public function persistUserEntity($user)
    {
        $this->userManager->updateUser($user, false);
        $this->persistEntity($user);
    }

    public function updateUserEntity($user)
        {
           $this->userManager->updateUser($user, false);
            parent::updateEntity($user);
        }
}