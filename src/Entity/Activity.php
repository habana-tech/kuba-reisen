<?php

namespace App\Entity;

use App\Entity\Fields\ActiveFieldTrait;
use App\Entity\Fields\DescriptionFragmentFieldInterface;
use App\Entity\Fields\DescriptionFragmentFieldTrait;
use App\Entity\Fields\FilterTagsTrait;
use App\Entity\Fields\GalleryFieldInterface;
use App\Entity\Fields\GalleryFieldTrait;
use App\Entity\Fields\ImageFieldInterface;
use App\Entity\Fields\ImageFieldTrait;
use App\Entity\Fields\MachineNameInterface;
use App\Entity\Fields\MachineNameTrait;
use App\Entity\Fields\PriorityFieldTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ActivityRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks
 */
class Activity implements
    MachineNameInterface,
    DescriptionFragmentFieldInterface,
    GalleryFieldInterface,
    ImageFieldInterface
{
    use ImageFieldTrait;
    use ActiveFieldTrait;
    use GalleryFieldTrait;
    use FilterTagsTrait;
    use PriorityFieldTrait;
    use DescriptionFragmentFieldTrait;
    use MachineNameTrait;

    public const LENGTH_OF_DESCRIPTION = 75;


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
    private $featuresImagesCount;


    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Destination",  inversedBy="activities")
     */
    private $destinations;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $initPrice;



    /**
     *  @ORM\Embedded(class="App\Entity\PageContent")
     */
    private $pageContent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $itineraryTitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $itineraryContent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $includedSectionTitle;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $includedTitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $includedContent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $notIncludedTitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $notIncludedContent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $costAndDatesTitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $costAndDatesContent;

    /**
     * @ORM\ManyToMany(targetEntity="ActivityDescriptionFragment", cascade={"persist", "remove"})
     * @ORM\JoinTable(name="activity_activityfragments",
     *      joinColumns={@ORM\JoinColumn(name="activity_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="fragment_id", referencedColumnName="id", unique=true)}
     *     )
     */
    private $descriptionFragments;

    public function __construct()
    {
        $this->filterTags = new ArrayCollection();
        $this->destinations = new ArrayCollection();
        $this->featuresImagesCount = 4;
        $this->gallery = new ArrayCollection();
        $this->pageContent = new PageContent();
        $this->descriptionFragments = new ArrayCollection();
        $this->active = true;

        //CONTENT FIELDS
        $this->itineraryTitle = 'Itinerary summary';
        $this->includedSectionTitle = 'Leistungen';
        $this->includedTitle = 'Inkludiert';
        $this->notIncludedTitle = 'Nicht inkludiert ';
        $this->costAndDatesTitle = 'Costs & dates';
        // your own logic
    }

    /**
     * @return PageContent
     */
    public function getPageContent(): PageContent
    {
        return $this->pageContent;
    }

    /**
     * @param PageContent $pageContent
     */
    public function setPageContent(PageContent $pageContent): void
    {
        $this->pageContent = $pageContent;
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
            $destination->addActivity($this);
        }

        return $this;
    }

    public function removeDestination(Destination $destination): self
    {
        if ($this->destinations->contains($destination)) {
            $this->destinations->removeElement($destination);
            $destination->removeActivity($this);
        }

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description ?? '';
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function __toString(): string
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getFeaturesImagesCount()
    {
        return $this->featuresImagesCount;
    }

    /**
     * @param mixed $featuresImagesCount
     */
    public function setFeaturesImagesCount($featuresImagesCount): void
    {
        $this->featuresImagesCount = $featuresImagesCount;
    }

    public function getInitPrice(): ?float
    {
        return $this->initPrice;
    }

    public function setInitPrice(?float $initPrice): self
    {
        $this->initPrice = $initPrice;

        return $this;
    }

    public function getItineraryTitle(): ?string
    {
        return $this->itineraryTitle;
    }

    public function setItineraryTitle(string $itineraryTitle): self
    {
        $this->itineraryTitle = $itineraryTitle;

        return $this;
    }

    public function getItineraryContent(): ?string
    {
        return $this->itineraryContent;
    }

    public function setItineraryContent(?string $itineraryContent): self
    {
        $this->itineraryContent = $itineraryContent;

        return $this;
    }

    public function getIncludedTitle(): ?string
    {
        return $this->includedTitle;
    }

    public function setIncludedTitle(?string $includedTitle): self
    {
        $this->includedTitle = $includedTitle;

        return $this;
    }

    public function getIncludedContent(): ?string
    {
        return $this->includedContent;
    }

    public function setIncludedContent(?string $includedContent): self
    {
        $this->includedContent = $includedContent;

        return $this;
    }

    public function getNotIncludedTitle(): ?string
    {
        return $this->notIncludedTitle;
    }

    public function setNotIncludedTitle(?string $notIncludedTitle): self
    {
        $this->notIncludedTitle = $notIncludedTitle;

        return $this;
    }

    public function getNotIncludedContent(): ?string
    {
        return $this->notIncludedContent;
    }

    public function setNotIncludedContent(?string $notIncludedContent): self
    {
        $this->notIncludedContent = $notIncludedContent;

        return $this;
    }

    public function getCostAndDatesTitle(): ?string
    {
        return $this->costAndDatesTitle;
    }

    public function setCostAndDatesTitle(?string $costAndDatesTitle): self
    {
        $this->costAndDatesTitle = $costAndDatesTitle;

        return $this;
    }

    public function setIncludedSectionTitle(?string $includedSectionTitle): self
    {
        $this->includedSectionTitle = $includedSectionTitle;

        return $this;
    }

    public function getIncludedSectionTitle()
    {
        return $this->includedSectionTitle;
    }

    public function getCostAndDatesContent(): ?string
    {
        return $this->costAndDatesContent;
    }

    public function setCostAndDatesContent(?string $costAndDatesContent): self
    {
        $this->costAndDatesContent = $costAndDatesContent;

        return $this;
    }

    public function getNameFieldValue(): string
    {
        return $this->name;
    }

    public function getPinnedFilterTag(): ?string
    {
        return $this->getFilterTags()->filter(static function ($tag) {
            /**
             * @var FilterTag $tag
             */
            return $tag->getPinned();
        })->first();
    }
}
