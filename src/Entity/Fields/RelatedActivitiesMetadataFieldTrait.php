<?php

namespace App\Entity\Fields;

use Doctrine\Common\Collections\ArrayCollection;

trait RelatedActivitiesMetadataFieldTrait
{

    /**
     * @return mixed
     */
    public function getRelatedActivities(): ?array
    {
        if (array_key_exists('relatedActivities', $this->getMetadata())) {
            return $this->getMetadata()['relatedActivities'];
        }
        return null;
    }
    
    public function setRelatedActivities(?ArrayCollection $relatedActivities): void
    {
        $activities = [];
        foreach ($relatedActivities as $activitie) {
            $activities[] = $activitie->getId();
        }
        $this->setMetadataKeyAndValue('relatedActivities', $activities);
    }
}
