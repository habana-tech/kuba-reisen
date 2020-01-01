<?php
// src/Entity/User.php

namespace App\Entity;

use FOS\UserBundle\Model\User as BaseUser;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="fos_user")
 * @ORM\HasLifecycleCallbacks
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    protected $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $enterprise;


    private $changepassword;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $sendRequestEmail;

    public function __construct()
    {
        parent::__construct();
        // your own logic
    }

    /**
     * @return mixed
     */
    public function getChangepassword()
    {
        return $this->changepassword;
    }

    /**
     * @param mixed $changepassword
     */
    public function setChangepassword($changepassword): void
    {
        $this->changepassword = $changepassword;
    }

    

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(?string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getEnterprise(): ?string
    {
        return $this->enterprise;
    }

    public function setEnterprise(?string $enterprise): self
    {
        $this->enterprise = $enterprise;

        return $this;
    }

    public function getSendRequestEmail(): ?bool
    {
        return $this->sendRequestEmail;
    }

    public function isAtEmailList(): ?bool
    {
        return $this->sendRequestEmail;
    }

    public function setSendRequestEmail(?bool $sendRequestEmail): self
    {
        $this->sendRequestEmail = $sendRequestEmail;

        return $this;
    }

}