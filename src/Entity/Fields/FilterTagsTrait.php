<?php


namespace App\Entity\Fields;


use App\Entity\FilterTag;
use Doctrine\Common\Collections\Collection;

trait FilterTagsTrait
{

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\FilterTag", inversedBy="activities")
     */
    private $filterTags;


    /**
     * @return Collection|FilterTag[]
     */
    public function getFilterTags(): Collection
    {
        return $this->filterTags;
    }

    public function addFilterTag(FilterTag $filterTag): self
    {
        if (!$this->filterTags->contains($filterTag)) {
            $this->filterTags[] = $filterTag;
        }

        return $this;
    }

    public function removeFilterTag(FilterTag $filterTag): self
    {
        if ($this->filterTags->contains($filterTag)) {
            $this->filterTags->removeElement($filterTag);
        }

        return $this;
    }


}