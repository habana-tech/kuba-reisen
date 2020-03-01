<?php

namespace App\Entity\Fields;

use App\Entity\Image;
use Doctrine\Common\Collections\Collection;

interface GalleryFieldInterface
{
    public function getUploadedImages(): Collection;

    /**
     * @param mixed $uploadedImages
     */
    public function setUploadedImages($uploadedImages): void;

    /**
     * @return Collection|Image[]
     */
    public function getGallery(): Collection;

    /**
     * @param Image $gallery
     * @return $this
     */
    public function addGallery(Image $gallery);

    /**
     * @param Image $gallery
     * @return $this
     */
    public function removeGallery(Image $gallery);
}
