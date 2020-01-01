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
class Destination implements DescriptionFragmentFieldInterface, GalleryFieldInterface
{
    use LanguageFieldTrait, UserControlFieldsTrait, ImageFieldTrait, GalleryTrait;
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
     * @ORM\OneToMany(targetEntity="DescriptionFragment", mappedBy="destination", orphanRemoval=false, cascade={"persist", "remove"})
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


}
