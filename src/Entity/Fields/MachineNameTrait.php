<?php


namespace App\Entity\Fields;

use Doctrine\ORM\Mapping as ORM;

/**
 * Trait MachineNameTrait
 * @package App\Entity\Fields
 * @ORM\HasLifecycleCallbacks()
 */
trait MachineNameTrait
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $machineName;


    public function setMachineName($machineName)
    {
        $this->machineName = $machineName;
        return $this;
    }

    public function getMachineName(): string
    {
        return $this->machineName;
    }

    /**
     * @return void
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function generateMachineName(): void
    {
        $this->setMachineName(urlencode($this->getNameFieldValue()));
    }
}