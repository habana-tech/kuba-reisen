<?php

namespace App\Entity;

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
class Destination
{
    use LanguageFieldTrait, UserControlFieldsTrait, ImageFieldTrait, GalleryTrait, ActiveFieldTrait;
    use FilterTagsTrait, PriorityFieldTrait, ActiveFieldTrait;
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
     * @ORM\OneToMany(targetEntity="App\Entity\DestinationFragment", mappedBy="destination", orphanRemoval=true, cascade={"persist"})
     */
    private $destinationFragment;

    public function __construct()
    {
        $this->activities = new ArrayCollection();
        $this->image = new EmbeddedFile();
        $this->filterTags = new ArrayCollection();
        $this->destinationFragment = new ArrayCollection();
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

    public function getMachineName(): string
    {
        return urlencode($this->getName());
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

    public function getDynamicPage(): ?DynamicPage
    {
        return $this->dynamic_page;
    }

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
     */
    public function getFeaturesCount()
    {
        return $this->featuresCount;
    }

    /**
     * @param mixed $featuresCount
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

    /**
     * @return Collection|DestinationFragment[]
     */
    public function getDestinationFragment(): Collection
    {
        return $this->destinationFragment;
    }

    public function addDestinationFragment(DestinationFragment $destinationFragment): self
    {
        if (!$this->destinationFragment->contains($destinationFragment)) {
            $this->destinationFragment[] = $destinationFragment;
            $destinationFragment->setDestination($this);
        }

        return $this;
    }

    public function removeDestinationFragment(DestinationFragment $destinationFragment): self
    {
        if ($this->destinationFragment->contains($destinationFragment)) {
            $this->destinationFragment->removeElement($destinationFragment);
            // set the owning side to null (unless already changed)
            if ($destinationFragment->getDestination() === $this) {
                $destinationFragment->setDestination(null);
            }
        }

        return $this;
    }

}
