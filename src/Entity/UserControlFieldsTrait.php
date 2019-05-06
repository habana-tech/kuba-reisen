<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Language Field
 */
trait UserControlFieldsTrait
{

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @ORM\JoinColumn(nullable=true)
     */
    private $modified_by;

    public  $hasUserModificationField = true;

    public function getModifiedBy(): ?User
    {
        return $this->modified_by;
    }

    public function setModifiedBy(?User $modified_by): self
    {
        $this->modified_by = $modified_by;

        return $this;
    }
}
