<?php

namespace App\Entity;

use DateTime;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

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
     * @Assert\NotNull
     * @Assert\DateTime()
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
     * @Assert\NotBlank()
     * @ORM\Column(type="string", length=255)
     */
    private $childAmount;

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
    * @ORM\Column(type="boolean")
    */
    private $flyTicketOnBudget;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $selfConsider;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $selfCharacter;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
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

    /**
    * @ORM\Column(type="string", length=255)
    */
    private $telephone;

    public function __construct()
    {
        $this->requestId = 'KR-' . substr(uniqid('', false), 8, 8);
        $this->requestDateTime = new DateTime();
    }



    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTravelDate(): ?DateTimeInterface
    {
        return $this->travelDate;
    }

    public function setTravelDate(DateTimeInterface $travelDate): self
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


    public function getChildAmount(): ?string
    {
        return $this->childAmount;
    }

    public function setChildAmount(string $childAmount): self
    {
        $this->childAmount = $childAmount;

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

    public function getFlyTicketOnBudget(): ?bool
    {
        return $this->flyTicketOnBudget;
    }

    public function setFlyTicketOnBudget(bool $flyTicketOnBudget): self
    {
        $this->flyTicketOnBudget = $flyTicketOnBudget;

        return $this;
    }

    public function getSelfConsider(): ?string
    {
        return $this->selfConsider;
    }

    public function setSelfConsider(?string $selfConsider): self
    {
        $this->selfConsider = $selfConsider;

        return $this;
    }

    public function getSelfCharacter(): ?string
    {
        return $this->selfCharacter;
    }

    public function setSelfCharacter(?string $selfCharacter): self
    {
        $this->selfCharacter = $selfCharacter;

        return $this;
    }

    public function getSelfLuxury(): ?string
    {
        return $this->selfLuxury;
    }

    public function setSelfLuxury(?string $selfLuxury): self
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

    public function getRequestDateTime(): ?DateTimeInterface
    {
        return $this->requestDateTime;
    }

    public function setRequestDateTime(DateTimeInterface $requestDateTime): self
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
    public function updateRequestDateTime(): void
    {
        $this->setRequestDateTime(new DateTime());
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

    /**
     * @return mixed
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * @param mixed $telephone
     */
    public function setTelephone($telephone): void
    {
        $this->telephone = $telephone;
    }
}
