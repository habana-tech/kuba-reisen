<?php

namespace App\Entity\Fields;

use App\Entity\Image;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Entity\File as EmbeddedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * Image
 * @Vich\Uploadable
 */
trait ImageFieldTrait
{

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Image", cascade={"persist", "remove"})
     */
    private $image;

    public function getImage(): ?Image
    {
        return $this->image;
    }

    public function setImage(?Image $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function hasImage(): bool
    {
        return ($this->image instanceof Image && $this->image->getImageName() && $this->image->getImageName() !== 'no-image' );
    }

    /**
     * @return UploadedFile
     */
    public function getUploadedImage():?UploadedFile
    {
        return $this->uploadedImage;
    }

    /**
     * @param mixed $uploadedImage
     */
    public function setUploadedImage($uploadedImage): void
    {
        $this->uploadedImage = $uploadedImage;
    }

    private $uploadedImage;


    public function getFromGallery()
    {
        if(!$this->galleryImage) {
            return $this->image;
        }
        return $this->galleryImage;
    }

    private $galleryImage;

    public function setFromGallery($image): void
    {
        $this->galleryImage = $image;
    }


}
