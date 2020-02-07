<?php

namespace App\Entity;

use App\Entity\Fields\ActiveFieldTrait;
use Knp\DoctrineBehaviors\Model as ORMBehaviors;
use App\Entity\Fields\PriorityFieldTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FilterTagRepository")
 * @Vich\Uploadable()
 */
class FilterTag
{
    use ActiveFieldTrait, PriorityFieldTrait;
    use ORMBehaviors\Timestampable\Timestampable;

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
     * @ORM\ManyToMany(targetEntity="App\Entity\Destination", mappedBy="filterTags")
     */
    private $destinations;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Activity", mappedBy="filterTags")
     */
    private $activities;


    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $pinned;

    /**
     * @ORM\Column(type="string", length=180)
     */
    private $iconName;
    /**
    * @Vich\UploadableField(mapping="tags_icons", fileNameProperty="iconName")
    */
    private $iconFile;

    public function __construct()
    {
        $this->activities = new ArrayCollection();
        $this->destinations = new ArrayCollection();
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


    public function __toString():string
    {
        return $this->title;
    }

    /**
     * @return Collection|Activity[]
     */
    public function getActivities(): Collection
    {
        return $this->activities;
    }

    public function addActivity(Activity $activity): self
    {
        if (!$this->activities->contains($activity)) {
            $this->activities[] = $activity;
            $activity->addFilterTag($this);
        }

        return $this;
    }

    public function removeActivity(Activity $activity): self
    {
        if ($this->activities->contains($activity)) {
            $this->activities->removeElement($activity);
            $activity->removeFilterTag($this);
        }

        return $this;
    }


    public function getPinned(): ?bool
    {
        return $this->pinned;
    }

    public function setPinned(?bool $pinned): self
    {
        $this->pinned = $pinned;

        return $this;
    }


    public function getNameFieldValue():? string
    {
        return $this->title;
    }

     /**
     * @return Collection|Destination[]
     */
    public function getDestinations(): Collection
    {
        return $this->destinations;
    }

    public function addDestination(Destination $destination): self
    {
        if (!$this->destinations->contains($destination)) {
            $this->destinations[] = $destination;
            $destination->addFilterTag($this);
        }

        return $this;
    }

    public function removeDestination(Destination $destination): self
    {
        if ($this->destinations->contains($destination)) {
            $this->destinations->removeElement($destination);
            $destination->removeFilterTag($this);
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getIconFile()
    {
        return $this->iconFile;
    }

    /**
     * @param mixed $iconFile
     * @return FilterTag
     */
    public function setIconFile($iconFile)
    {
        $this->iconFile = $iconFile;
        if ($iconFile) {
                // if 'updatedAt' is not defined in your entity, use another property
                $this->updatedAt = new \DateTime('now');
            }
        return $this;
    }

    /**
     * @return mixed
     */
    public function getIconName()
    {
        return $this->iconName;
    }

    /**
     * @param mixed $icon
     * @return FilterTag
     */
    public function setIconName($icon)
    {
        $this->iconName = $icon;
        return $this;
    }



}
