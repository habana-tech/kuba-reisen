<?php


namespace App\Entity\Fields;


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

trait DescriptionFragmentFieldTrait
{
    /**
     * --ORM\OneToMany(targetEntity="DescriptionFragment", mappedBy="destination", orphanRemoval=false, cascade={"persist", "remove"})
     * --ORM\OneToMany(targetEntity="DescriptionFragment", mappedBy="activity", orphanRemoval=false, cascade={"persist", "remove"})
     */
    private $descriptionFragment;

    /**
     * DescriptionFragmentFieldTrait constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->descriptionFragment = new ArrayCollection();
    }


    /**
     * @return Collection|DescriptionFragment[]
     */
    public function getDescriptionFragment(): Collection
    {
        return $this->descriptionFragment;
    }

    public function addDescriptionFragment(DescriptionFragment $descriptionFragment): self
    {
        if (!$this->descriptionFragment->contains($descriptionFragment)) {
            $this->descriptionFragment[] = $descriptionFragment;
            $descriptionFragment->setDestination($this);
        }

        return $this;
    }

    public function removeDescriptionFragment(DescriptionFragment $descriptionFragment): self
    {
        if ($this->descriptionFragment->contains($descriptionFragment)) {
            $this->descriptionFragment->removeElement($descriptionFragment);
            // set the owning side to null (unless already changed)
            if ($descriptionFragment->getDestination() === $this) {
                $descriptionFragment->setDestination(null);
            }
        }

        return $this;
    }
}