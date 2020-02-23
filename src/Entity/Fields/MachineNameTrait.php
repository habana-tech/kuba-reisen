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
        return  $this->machineName ?: $this->generateMachineName();
    }

    /**
     * @return string
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function generateMachineName()
    {
        $machineName = $this->machineName == null ?
            strtolower(trim(preg_replace('/[^A-Za-z0-9]+/', '_', $this->getNameFieldValue()), '_'))
            : $this->machineName;
        $this->setMachineName($machineName);
        return $this->machineName;
    }
}