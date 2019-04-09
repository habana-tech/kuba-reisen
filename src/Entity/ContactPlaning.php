<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ContactPlaningRepository")
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
     * @ORM\Column(type="json_array", nullable=true)
     */
    private $interests;

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

    public function getInterests()
    {
        return $this->interests;
    }

    public function setInterests($interests): self
    {
        $this->interests = $interests;

        return $this;
    }
}
