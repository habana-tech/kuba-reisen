<?php

namespace App\Entity\Fields;

use Doctrine\Common\Collections\ArrayCollection;

trait RelatedPagesMetadataFieldTrait
{

    /**
     * @return mixed
     */
    public function getRelatedPages(): ?array
    {
        if (array_key_exists('relatedPages', $this->getMetadata())) {
            return $this->getMetadata()['relatedPages'];
        }
        return null;
    }
    
    public function setRelatedPages(?ArrayCollection $relatedPages): void
    {
        $pages = [];
        foreach ($relatedPages as $page) {
            $pages[] = $page->getId();
        }
        $this->setMetadataKeyAndValue('relatedPages', $pages);
    }
}
