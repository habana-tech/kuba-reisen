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
    public function getDescriptionFragments(): ?Collection
    {
        if ($this->descriptionFragments->count() > 1) {
            return self::orderedDescriptionFragments($this->descriptionFragments);
        }

        return $this->descriptionFragments;
    }

    public function addDescriptionFragment($descriptionFragment): self
    {
        if (!$this->descriptionFragments->contains($descriptionFragment)) {
            $this->descriptionFragments[] = $descriptionFragment;
//            $descriptionFragment->setDestination($this);
        }

        return $this;
    }

    /**
     * @param $descriptionFragment
     * @return $this
     */
    public function removeDescriptionFragment($descriptionFragment): self
    {
        if ($this->descriptionFragments->contains($descriptionFragment)) {
            $this->descriptionFragments->removeElement($descriptionFragment);
        }

        return $this;
    }

    /**
     * @param $collection
     * @return ArrayCollection
     */
    public static function orderedDescriptionFragments($collection): ArrayCollection
    {
        // get a new ArrayIterator
        $iterator = $collection->getIterator();

        // define ordering closure, using preferred comparison method/field
        $iterator->uasort(static function ($first, $second) {
            return (int)$first->__get('fragmentOrder') > (int)$second->__get('fragmentOrder') ? 1 : -1;
        });
        // return the ordered iterator, pass sorted array to a new ArrayCollection.
        return new ArrayCollection(iterator_to_array($iterator));
    }

    /**
     * @return ArrayCollection
     */
    public function sortDescriptionFragments(): ArrayCollection
    {

        // return the ordered iterator, pass sorted array to a new ArrayCollection.
        return $this::orderedDescriptionFragments($this->descriptionFragments);
    }
}
