<?php

namespace App\Entity;

use App\Entity\Fields\ActiveFieldTrait;
use App\Entity\Fields\DescriptionFragmentFieldInterface;
use App\Entity\Fields\DescriptionFragmentFieldTrait;
use App\Entity\Fields\FilterTagsTrait;
use App\Entity\Fields\ImageFieldInterface;
use App\Entity\Fields\ImageFieldTrait;
use App\Entity\Fields\MachineNameInterface;
use App\Entity\Fields\MachineNameTrait;
use App\Entity\Fields\MetadataField;
use App\Entity\Fields\PriorityFieldTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DestinationRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks
 */
class Destination implements DescriptionFragmentFieldInterface, MachineNameInterface, ImageFieldInterface
{
    use ImageFieldTrait;
    use MachineNameTrait;
    use FilterTagsTrait;
    use PriorityFieldTrait;
    use ActiveFieldTrait;
    use DescriptionFragmentFieldTrait;
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
     * @ORM\ManyToMany(targetEntity="App\Entity\Activity", mappedBy="destinations")
     */
    private $activities;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\DynamicPage", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=true)
     * @deprecated
     */
    private $dynamic_page;

    /**
     * @ORM\ManyToMany(targetEntity="DescriptionFragment", cascade={"persist", "remove"})
     * @ORM\JoinTable(name="destination_fragments",
     *      joinColumns={@ORM\JoinColumn(name="destination_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="fragment_id", referencedColumnName="id", unique=true)}
     *     )
     */
    private $descriptionFragments;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\FilterTag", inversedBy="destinations")
     */
    private $filterTags;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $activitySectionTitle;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $activitySectionSubtitle;

    public function __construct()
    {
        $this->activities = new ArrayCollection();
        $this->filterTags = new ArrayCollection();
        $this->descriptionFragments = new ArrayCollection();
        $this->active = true;
    }

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
        }

        return $this;
    }

    public function removeActivity(Activity $activity): self
    {
        if ($this->activities->contains($activity)) {
            $this->activities->removeElement($activity);
        }

        return $this;
    }



    public function __toString(): string
    {
        return $this->name;
    }

    public function getNameFieldValue(): string
    {
        return $this->name;
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

    public function getActivitySectionTitle(): ?string
    {
        return $this->activitySectionTitle;
    }

    public function setActivitySectionTitle(?string $activitySectionTitle): self
    {
        $this->activitySectionTitle = $activitySectionTitle;

        return $this;
    }


    public function getActivitySectionSubtitle(): ?string
    {
        return $this->activitySectionSubtitle;
    }

    public function setActivitySectionSubtitle(?string $activitySectionSubtitle): self
    {
        $this->activitySectionSubtitle = $activitySectionSubtitle;

        return $this;
    }
}
