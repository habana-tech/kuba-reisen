<?php

namespace App\Entity\Fields;

use App\Entity\Image;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\File;

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

    public function getImage():? Image
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

    public function uploadImage()
    {
        return;
    }


    public function getUploadImage()
    {
        return $this->image;
    }

    public function imageField($image = null)
    {
        $this->imageField = $image;
        dump($image);
        return;
    }

    public function getGalleryImage(): ?Image
    {
        return $this->getImage();
    }


}
