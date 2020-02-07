<?php

namespace App\Entity;

use App\Entity\Fields\ImageFieldTrait;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ActivityDescriptionFragmentRepository")
 * @Vich\Uploadable()
 */
class ActivityDescriptionFragment extends DescriptionFragment
{



    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $metadata = [];

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Image")
     */
    private $image;



    public function getMetadata(): ?array
    {
        return $this->metadata;
    }

    public function setMetadata(?array $metadata): self
    {
        $this->metadata = $metadata;

        return $this;
    }

    public function __get($name)
    {
        return $this->metadata[$name] ?? null;
    }

    public function __set($name, $value)
    {
        if(property_exists($this, $name))
            $this->$$name = $value;
        else
            $this->metadata[$name] = $value;
    }

    public function __isset($name)
    {
        return (property_exists($this, $name) || isset($this->metadata[$name]));

    }

    public function getImage(): ?Image
    {
        return $this->image;
    }

    public function setImage(?Image $image): self
    {
        $this->image = $image;

        return $this;
    }


}
