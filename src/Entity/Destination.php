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
    use LanguageFieldTrait;
    use UserControlFieldsTrait;
    use ImageFieldTrait;

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
     */
    private $dynamic_page;

    public function __construct()
    {
        $this->activities = new ArrayCollection();

        $this->image = new EmbeddedFile();

        $this->language = 'de';
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
        return $this->name. " (". $this->language . ")";
    }
}