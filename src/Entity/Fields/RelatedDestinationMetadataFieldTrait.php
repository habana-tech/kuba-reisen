<?php

namespace App\Entity\Fields;

use Doctrine\Common\Collections\ArrayCollection;

trait RelatedDestinationMetadataFieldTrait
{

    /**
     * @return mixed
     */
    public function getRelatedDestinations(): ?array
    {
        if (array_key_exists('relatedDestinations', $this->getMetadata())) {
            return $this->getMetadata()['relatedDestinations'];
        }
        return null;
    }
    
    public function setRelatedDestinations(?ArrayCollection $relatedDestinations): void
    {
        $destinations = [];
        foreach ($relatedDestinations as $destination) {
            $destinations[] = $destination->getId();
        }
        $this->setMetadataKeyAndValue('relatedDestinations', $destinations);
    }
}
