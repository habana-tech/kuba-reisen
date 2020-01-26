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
    public function getDescriptionFragment():? Collection
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