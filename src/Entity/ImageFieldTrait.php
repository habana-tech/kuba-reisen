<?php

namespace App\Entity;

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
    public function getImagePath(){
        return 'uploads/images/'.$this->getImage();
    }

    /**
     * @return string
     * @deprecated Drop This function... use getImagePath or just Image (filename) and Vich mapping to locate the file
     */
    public function getStaticImagePath(){
        return 'static/'.$this->getImagePath();
    }

    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $image;
    /**
     * NOTE: This is not a mapped field of entity metadata, just a simple property.
     *
     * @Vich\UploadableField(mapping="images", fileNameProperty="image")
     *
     * @var File
     */
    protected $imageFile;

    public function getFileName()
    {
        return $this->image;
    }

    /**
     * @ORM\Column(type="datetime", nullable=true)
     *
     * @var \DateTime
     */
    protected $updatedAt;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $alternativeText;

    /**
     * @return mixed
     */
    public function getAlternativeText()
    {
        return $this->alternativeText;
    }

    /**
     * @param mixed $alternativeText
     */
    public function setAlternativeText($alternativeText): void
    {
        $this->alternativeText = $alternativeText;
    }



    public function __construct()
    {
        parent::__construct();
        $this->image = new EmbeddedFile();
    }

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the  update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|UploadedFile $imageFile
     */
    public function setImageFile(?File $imageFile = null)
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImage($image)
    {
        $this->image = $image;
    }

    public function getImage()
    {
        return $this->image;
    }

    public function getUpdatedAt(): ?\DateTime
    {
        return $this->updatedAt;
    }

}
