<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DestinationRepository")
 */
class Destination
{
    use LanguageFieldTrait;
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
     * @ORM\ManyToMany(targetEntity="App\Entity\Activity", inversedBy="destinations")
     */
    private $activities;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\FilterTag", inversedBy="destinations")
     */
    private $filterTags;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\DynamicPage", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=true)
     */
    private $dynamic_page;

    public function __construct()
    {
        $this->activities = new ArrayCollection();
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

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

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
}
