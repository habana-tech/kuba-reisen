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
class Activity
{
    const LENGTH_OF_DESCRIPTION = 75;

    use LanguageFieldTrait;
    use ImageFieldTrait;
    use UserControlFieldsTrait;

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
     * @ORM\ManyToOne(targetEntity="App\Entity\Activity")
     */
    private $translation_from;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Destination",  inversedBy="activities")
     */
    private $destinations;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\DynamicPage", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=true)
     */
    private $dynamic_page;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $priority;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $initPrice;

    public function __construct()
    {
        $this->filterTags = new ArrayCollection();
        $this->destinations = new ArrayCollection();
        $this->image = new EmbeddedFile();
        $this->language = 'de';
        $this->description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam beatae blanditiis cumque dicta distinctio ea explicabo iste maxime nihil, perferendis recusandae rem reprehenderit velit voluptas. Magnam natus odit placeat?";
        $this->featuresImagesCount = 4;
        // your own logic
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

    public function getDynamicPage(): ?DynamicPage
    {
        return $this->dynamic_page;
    }

    public function setDynamicPage(DynamicPage $dynamic_page): self
    {
        $this->dynamic_page = $dynamic_page;

        return $this;
    }

    public function __get($name){
        if (array_key_exists($name, $this->getDynamicPage()->getPageContent()))
            return trim($this->getDynamicPage()->getElement($name));
    }


    public function __set($name, $value){
        $this->getDynamicPage()->setElementContent($name, $value);

    }


    public function getElement($name)
    {
        return $this->getDynamicPage()->getElement($name);
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


}
