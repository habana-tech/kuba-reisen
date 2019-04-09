<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ContactPlaningRepository")
 * @ORM\HasLifecycleCallbacks
 */
class ContactPlaning
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     */
    private $travelDate;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $travelDuration;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $peopleAmount;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $travelBudget;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Interest")
     */
    private $interests;

    /**
     * @ORM\Column(type="boolean")
     */
    private $flyTicket;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $selfConsider;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $selfCharacter;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $selfLuxury;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $message;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $locale;

    /**
     * @ORM\Column(type="datetime")
     */
    private $requestDateTime;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $requestId;

    public function __construct()
    {
        $this->interests = new ArrayCollection();
        $this->requestId = "KR-".substr(uniqid(),6,13);
    }



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTravelDate(): ?\DateTimeInterface
    {
        return $this->travelDate;
    }

    public function setTravelDate(\DateTimeInterface $travelDate): self
    {
        $this->travelDate = $travelDate;

        return $this;
    }

    public function getTravelDuration(): ?string
    {
        return $this->travelDuration;
    }

    public function setTravelDuration(?string $travelDuration): self
    {
        $this->travelDuration = $travelDuration;

        return $this;
    }

    public function getPeopleAmount(): ?string
    {
        return $this->peopleAmount;
    }

    public function setPeopleAmount(string $peopleAmount): self
    {
        $this->peopleAmount = $peopleAmount;

        return $this;
    }

    public function getTravelBudget(): ?string
    {
        return $this->travelBudget;
    }

    public function setTravelBudget(string $travelBudget): self
    {
        $this->travelBudget = $travelBudget;

        return $this;
    }

    /**
     * @return Collection|Interest[]
     */
    public function getInterests(): Collection
    {
        return $this->interests;
    }

    public function addInterest(Interest $interest): self
    {
        if (!$this->interests->contains($interest)) {
            $this->interests[] = $interest;
        }

        return $this;
    }

    public function removeInterest(Interest $interest): self
    {
        if ($this->interests->contains($interest)) {
            $this->interests->removeElement($interest);
        }

        return $this;
    }

    public function getFlyTicket(): ?bool
    {
        return $this->flyTicket;
    }

    public function setFlyTicket(bool $flyTicket): self
    {
        $this->flyTicket = $flyTicket;

        return $this;
    }

    public function getSelfConsider(): ?int
    {
        return $this->selfConsider;
    }

    public function setSelfConsider(?int $selfConsider): self
    {
        $this->selfConsider = $selfConsider;

        return $this;
    }

    public function getSelfCharacter(): ?int
    {
        return $this->selfCharacter;
    }

    public function setSelfCharacter(?int $selfCharacter): self
    {
        $this->selfCharacter = $selfCharacter;

        return $this;
    }

    public function getSelfLuxury(): ?int
    {
        return $this->selfLuxury;
    }

    public function setSelfLuxury(?int $selfLuxury): self
    {
        $this->selfLuxury = $selfLuxury;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(?string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getLocale(): ?string
    {
        return $this->locale;
    }

    public function setLocale(string $locale): self
    {
        $this->locale = $locale;

        return $this;
    }

    public function getRequestDateTime(): ?\DateTimeInterface
    {
        return $this->requestDateTime;
    }

    public function setRequestDateTime(\DateTimeInterface $requestDateTime): self
    {
        $this->requestDateTime = $requestDateTime;

        return $this;
    }

    public function getRequestId(): ?string
    {
        return $this->requestId;
    }

    public function setRequestId(string $requestId): self
    {
        $this->requestId = $requestId;

        return $this;
    }

    /**
     * @ORM\PrePersist()
     * @ORM\PreUpdate()
     */
    public function updateRequestDateTime()
    {
        $this->setRequestDateTime(new \DateTime());
    }

}
