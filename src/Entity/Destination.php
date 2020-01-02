<?php

namespace App\Entity;

use App\Entity\Fields\ActiveFieldTrait;
use App\Entity\Fields\DescriptionFragmentFieldInterface;
use App\Entity\Fields\DescriptionFragmentFieldTrait;
use App\Entity\Fields\FilterTagsTrait;
use App\Entity\Fields\GalleryFieldInterface;
use App\Entity\Fields\GalleryTrait;
use App\Entity\Fields\ImageFieldTrait;
use App\Entity\Fields\MachineNameInterface;
use App\Entity\Fields\MachineNameTrait;
use App\Entity\Fields\PriorityFieldTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Entity\File as EmbeddedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DestinationRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks
 */
class Destination implements DescriptionFragmentFieldInterface, GalleryFieldInterface, MachineNameInterface
{
    use ImageFieldTrait, GalleryTrait, MachineNameTrait;
    use FilterTagsTrait, PriorityFieldTrait, ActiveFieldTrait, DescriptionFragmentFieldTrait;
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
     * @ORM\Column(type="integer")
     */
    private $featuresCount;

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
    private $descriptionFragment;

    public function __construct()
    {
        $this->activities = new ArrayCollection();
        $this->image = new EmbeddedFile();
        $this->filterTags = new ArrayCollection();
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

    /**
     * @return DynamicPage|null
     * @deprecated
     */
    public function getDynamicPage(): ?DynamicPage
    {
        return $this->dynamic_page;
    }

    /**
     * @param DynamicPage $dynamic_page
     * @return $this
     * @deprecated
     */
    public function setDynamicPage(DynamicPage $dynamic_page): self
    {
        $this->dynamic_page = $dynamic_page;

        return $this;
    }

    public function __toString()
    {
        return $this->name;
    }

    /**
     * @return mixed
     * @deprecated
     */
    public function getFeaturesCount()
    {
        return $this->featuresCount;
    }

    /**
     * @param mixed $featuresCount
     * @deprecated
     */
    public function setFeaturesCount($featuresCount): void
    {
        $this->featuresCount = $featuresCount;
    }


    /**
     * @param $name
     * @return string
     * @deprecated
     */
    public function __get($name){
        if (array_key_exists($name, $this->getDynamicPage()->getPageContent()))
            return trim($this->getDynamicPage()->getElement($name));
    }

    /**
     * @param $name
     * @param $value
     * @deprecated
     */
    public function __set($name, $value){
        $this->getDynamicPage()->setElementContent($name, $value);

    }


    public function getNameFieldValue(): string
    {
        return $this->name;
    }
}
