<?php

namespace App\Entity;

use App\Entity\Fields\ImageFieldInterface;
use App\Entity\Fields\ImageFieldTrait;
use App\Entity\Fields\MetadataField;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ActivityDescriptionFragmentRepository")
 * @Vich\Uploadable()
 */
class ActivityDescriptionFragment implements ImageFieldInterface
{
    use ImageFieldTrait;
    use MetadataField;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $content;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function __toString(): string
    {
        return $this->name;
    }


    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Image", cascade={"persist"} )
     * @ORM\JoinColumn(nullable=true,  onDelete="SET NULL")
     */
    private $image;
}
