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

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Image", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=true)
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

    public function galleryImage(?Image $image = null)
    {
        dump($image);
        return;
    }

}
