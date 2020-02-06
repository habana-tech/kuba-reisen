<?php

namespace App\Entity;

use App\Entity\Fields\ActiveFieldTrait;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ClientOpinionRepository")
 */
class ClientOpinion
{
    use ActiveFieldTrait;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $clientName;

    /**
     * @ORM\Column(type="text")
     */
    private $opinion;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $pinOnHome;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Destination", cascade={"persist", "remove"})
     */
    private $destination;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Activity", cascade={"persist", "remove"})
     */
    private $activity;

    public function __construct()
    {
        $this->activities = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getClientName(): ?string
    {
        return $this->clientName;
    }

    public function setClientName(?string $clientName): self
    {
        $this->clientName = $clientName;

        return $this;
    }

    public function getOpinion(): ?string
    {
        return $this->opinion;
    }

    public function setOpinion(string $opinion): self
    {
        $this->opinion = $opinion;

        return $this;
    }

    public function getPinOnHome(): ?bool
    {
        return $this->pinOnHome;
    }

    public function setPinOnHome(?bool $pinOnHome): self
    {
        $this->pinOnHome = $pinOnHome;

        return $this;
    }

    public function getDestination(): ?Destination
    {
        return $this->destination;
    }

    public function setDestination(?Destination $destination): self
    {
        $this->destination = $destination;

        return $this;
    }

    public function getActivity(): ?Activity
    {
        return $this->activity;
    }

    public function setActivity(?Activity $activity): self
    {
        $this->activity = $activity;

        return $this;
    }
}
