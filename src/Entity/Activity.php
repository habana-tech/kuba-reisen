<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Entity\File as EmbeddedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ActivityRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks
 */
class Activity implements MachineNameInterface
{
    public const LENGTH_OF_DESCRIPTION = 75;

    use UserControlFieldsTrait, ImageFieldTrait, ActiveFieldTrait, GalleryTrait;

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
     * @ORM\ManyToMany(targetEntity="App\Entity\FilterTag", inversedBy="activities")
     */
    private $filterTags;


    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Destination",  inversedBy="activities")
     */
    private $destinations;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $priority;

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
    private $contentItineraryTitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $contentItineraryContent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $contentIncludedTitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $contentIncludedContent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $contentNotIncludedTitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $contentNotIncludedContent;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $contentCostAndDatesTitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $contentCostAndDatesContent;

    public function __construct()
    {
        $this->filterTags = new ArrayCollection();
        $this->destinations = new ArrayCollection();
        $this->featuresImagesCount = 4;
        $this->gallery = new ArrayCollection();
        $this->pageContent = new PageContent();

        //CONTENT FIELDS
        $this->contentIncludedTitle = 'Included in the tour';
        $this->contentNotIncludedTitle = 'Not include in the tour';
        $this->contentCostAndDatesTitle = 'Costs &amp; dates';
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

    public function getMachineName(){
        return urlencode($this->name);
    }

    /**
     * @return Collection|FilterTag[]
     */
    public function getFilterTags(): Collection
    {
        return $this->filterTags;
    }

    public function addFilterTag(FilterTag $filterTag): self
    {
        if (!$this->filterTags->contains($filterTag)) {
            $this->filterTags[] = $filterTag;
        }

        return $this;
    }

    public function removeFilterTag(FilterTag $filterTag): self
    {
        if ($this->filterTags->contains($filterTag)) {
            $this->filterTags->removeElement($filterTag);
        }

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
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function __toString()
    {
        return $this->name." (".$this->language.")";
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

    public function getPriority(): ?int
    {
        return $this->priority;
    }

    public function setPriority(?int $priority): self
    {
        $this->priority = $priority;

        return $this;
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

    public function getContentItineraryTitle(): ?string
    {
        return $this->contentItineraryTitle;
    }

    public function setContentItineraryTitle(string $contentItineraryTitle): self
    {
        $this->contentItineraryTitle = $contentItineraryTitle;

        return $this;
    }

    public function getContentItineraryContent(): ?string
    {
        return $this->contentItineraryContent;
    }

    public function setContentItineraryContent(?string $contentItineraryContent): self
    {
        $this->contentItineraryContent = $contentItineraryContent;

        return $this;
    }

    public function getContentIncludedTitle(): ?string
    {
        return $this->contentIncludedTitle;
    }

    public function setContentIncludedTitle(?string $contentIncludedTitle): self
    {
        $this->contentIncludedTitle = $contentIncludedTitle;

        return $this;
    }

    public function getContentIncludedContent(): ?string
    {
        return $this->contentIncludedContent;
    }

    public function setContentIncludedContent(?string $contentIncludedContent): self
    {
        $this->contentIncludedContent = $contentIncludedContent;

        return $this;
    }

    public function getContentNotIncludedTitle(): ?string
    {
        return $this->contentNotIncludedTitle;
    }

    public function setContentNotIncludedTitle(?string $contentNotIncludedTitle): self
    {
        $this->contentNotIncludedTitle = $contentNotIncludedTitle;

        return $this;
    }

    public function getContentNotIncludedContent(): ?string
    {
        return $this->contentNotIncludedContent;
    }

    public function setContentNotIncludedContent(?string $contentNotIncludedContent): self
    {
        $this->contentNotIncludedContent = $contentNotIncludedContent;

        return $this;
    }

    public function getContentCostAndDatesTitle(): ?string
    {
        return $this->contentCostAndDatesTitle;
    }

    public function setContentCostAndDatesTitle(?string $contentCostAndDatesTitle): self
    {
        $this->contentCostAndDatesTitle = $contentCostAndDatesTitle;

        return $this;
    }

    public function getContentCostAndDatesContent(): ?string
    {
        return $this->contentCostAndDatesContent;
    }

    public function setContentCostAndDatesContent(?string $contentCostAndDatesContent): self
    {
        $this->contentCostAndDatesContent = $contentCostAndDatesContent;

        return $this;
    }

}
