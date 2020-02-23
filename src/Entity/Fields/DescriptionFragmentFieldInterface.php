<?php


namespace App\Entity\Fields;


use App\Entity\DescriptionFragment;
use Doctrine\Common\Collections\Collection;

interface DescriptionFragmentFieldInterface
{
    /**
     * @return Collection|DescriptionFragment[]
     */
    public function getDescriptionFragments():? Collection;
}