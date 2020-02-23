<?php


namespace App\Entity\Fields;


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\Image;

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