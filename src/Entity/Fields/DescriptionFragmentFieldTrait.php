<?php


namespace App\Entity\Fields;


use App\Entity\DescriptionFragment;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

trait DescriptionFragmentFieldTrait
{
    //sustituir 'entity_id' por el nombre de currentEntity
    /**
     * @ORM\manyToMany(targetEntity="DescriptionFragment", cascade={"persist", "remove"})
     * @ORM\JoinTable(name="entity_fragments",
     *      joinColumns={@ORM\JoinColumn(name="entity_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="fragment_id", referencedColumnName="id", unique=true)}
     *     )
     */
    private $descriptionFragments;

    /**
     * DescriptionFragmentFieldTrait constructor.
     */
    public function __construct()
    {
        parent::__construct();
        $this->descriptionFragments = new ArrayCollection();
    }


    /**
     * @return Collection|DescriptionFragment[]
     */
    public function getDescriptionFragments():? Collection
    {
        return $this->descriptionFragments;
    }

    public function addDescriptionFragment(DescriptionFragment $descriptionFragment): self
    {
        if (!$this->descriptionFragments->contains($descriptionFragment)) {
            $this->descriptionFragments[] = $descriptionFragment;
            $descriptionFragment->setDestination($this);
        }

        return $this;
    }

    public function removeDescriptionFragment(DescriptionFragment $descriptionFragment): self
    {
        if ($this->descriptionFragments->contains($descriptionFragment)) {
            $this->descriptionFragments->removeElement($descriptionFragment);
            // set the owning side to null (unless already changed)
            if ($descriptionFragment->getDestination() === $this) {
                $descriptionFragment->setDestination(null);
            }
        }

        return $this;
    }
}