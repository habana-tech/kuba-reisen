<?php

namespace App\Entity\Fields;

use App\DataConverter\SingleImageFromGallery;
use App\Entity\Image;
use Doctrine\ORM\Mapping as ORM;

/**
 * Image
 */
trait ImageFieldTrait
{
    private $imageField;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Image", cascade={"persist"} )
     * @ORM\JoinColumn(nullable=true,  onDelete="SET NULL")
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
        return (
            $this->image instanceof Image && $this->image->getImageName()
            && $this->image->getImageName() !== 'no-image');
    }

    public function uploadImage(): void
    {
        return;
    }


    public function getUploadImage()
    {
        return $this->image;
    }

    public function getUpdateImage()
    {
        return $this->image;
    }
    public function setUpdateImage($image = null)
    {
    }

    public function uploadNewImage($image = null)
    {
        return null;
    }


    private $galleryImage;
    public function setGalleryImage(Image $image)
    {
        $this->galleryImage = $image;
    }

    public function getGalleryImage(): ?Image
    {
        return $this->getImage();
    }

    private $imageFieldAction;

    /**
     * @return mixed
     */
    public function getImageFieldAction()
    {
        return $this->imageFieldAction;
    }

    /**
     * @param mixed $imageFieldAction
     * @return ImageFieldTrait
     */
    public function setImageFieldAction($imageFieldAction)
    {
        $this->imageFieldAction = $imageFieldAction;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getImageField(): SingleImageFromGallery
    {
        if ($this->imageField === null) {
            $this->imageField = new SingleImageFromGallery();
        }
        return $this->imageField;
    }

    /**
     * @param mixed $imageField
     * @return ImageFieldTrait
     */
    public function setImageField($imageField)
    {
        $this->imageField = $imageField;
        return $this;
    }
}
