<?php


namespace App\Entity\Fields;


use Doctrine\Common\Collections\Collection;

interface DescriptionFragmentFieldInterface
{
    /**
     * @return Collection|DescriptionFragment[]
     */
    public function getDescriptionFragment(): Collection;
}