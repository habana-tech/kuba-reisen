<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Validator\Constraints as Assert;
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
     * @Assert\Date()
     * @ORM\Column(type="datetime")
     */
    private $travelDate;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $travelDuration;

    /**
     * @Assert\NotBlank()
     * @ORM\Column(type="string", length=255)
     */
    private $peopleAmount;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $travelBudget;

    /**
     * @ORM\Column(type="text", nullable=true)
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

    /**
     * @Assert\NotBlank()
     * @ORM\Column(type="string", length=255)
     */
    private $clientName;

    /**
     * @Assert\Email()
     * @Assert\NotBlank()
     * @ORM\Column(type="string", length=255)
     */
    private $clientEmail;

    public function __construct()
    {
        $this->requestId = "KR-".substr(uniqid(),8,13);
        $this->requestDateTime = new \DateTime();
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
     * @return string
     */
    public function getInterests(): ?string
    {
        return $this->interests;
    }

    public function setInterests(string $interests): self
    {
        $this->interests = $interests;

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

    public function getClientName(): ?string
    {
        return $this->clientName;
    }

    public function setClientName(string $clientName): self
    {
        $this->clientName = $clientName;

        return $this;
    }

    public function getClientEmail(): ?string
    {
        return $this->clientEmail;
    }

    public function setClientEmail(string $clientEmail): self
    {
        $this->clientEmail = $clientEmail;

        return $this;
    }

}
