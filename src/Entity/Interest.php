<?php

namespace App\Entity;

use App\Entity\Fields\ActiveFieldTrait;
use App\Entity\Fields\ImageFieldTrait;
use App\Entity\Fields\MachineNameInterface;
use App\Entity\Fields\MachineNameTrait;
use App\Entity\Fields\PriorityFieldTrait;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\InterestRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks
 */
class Interest implements MachineNameInterface
{
    use ImageFieldTrait;
    use ActiveFieldTrait;
    use PriorityFieldTrait;
    use MachineNameTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;


    public function __construct()
    {
        $this->active = true;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function __toString(): string
    {
        return $this->title;
    }

    public function getNameFieldValue(): string
    {
        return $this->title;
    }
}
