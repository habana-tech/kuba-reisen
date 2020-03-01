<?php

namespace App\Entity\Fields;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;

/**
 * Language Field
 * @deprecated
 */
trait UserControlFieldsTrait
{

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @ORM\JoinColumn(nullable=true)
     */
    private $modified_by;

    public $hasUserModificationField = true;

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
