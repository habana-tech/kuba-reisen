<?php

namespace App\Entity;

use App\DataConverter\ImageBase64ThumbCreator;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Knp\DoctrineBehaviors\Model as ORMBehaviors;
use Vich\UploaderBundle\Form\Type\VichFileType;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ImageRepository")
 * @Vich\Uploadable()
 */
class Image
{
    use ORMBehaviors\Timestampable\Timestampable;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
    * @Vich\UploadableField(mapping="images", fileNameProperty="imageName", size="imageSize")
    */
    private $imageFile;

    /**
     * @ORM\Column(type="string", length=180, nullable=true)
     */
    private $imageName;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $imageSize;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $base64;

    public function getId(): ?int
    {
        return $this->id;
    }

//    public function getTitle(): ?string
//    {
//        return $this->title;
//    }
//
//    public function setTitle(string $title): self
//    {
//        $this->title = $title;
//
//        return $this;
//    }


    public function getImagePath(): string
    {
        return 'uploads/images/'.$this->getImageName();
    }

    /**
     * @return string
     */
    public function getStaticImagePath(): string
    {
        return 'static/'.$this->getImagePath();
    }

    public function getImageName(): ?string
    {
        return $this->imageName ?? 'no-image';
    }

    public function setImageName(string $imageName = null): self
    {
        $this->imageName = $imageName;

        return $this;
    }

    public function getImageSize(): ?int
    {
        return $this->imageSize;
    }

    public function setImageSize(int $imageSize = null): self
    {
        $this->imageSize = $imageSize;

        return $this;
    }

    /**
     * @return File
     */
    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    /**
     * @param File|UploadedFile $file
     * @return Image
     * @throws \Exception
     */
    public function setImageFile(?File $file = null): self
    {
        $this->imageFile = $file;
        if(null !== $file) {
            $base64Converter = new ImageBase64ThumbCreator($file->getRealPath(), false);
            $this->setBase64($base64Converter->getBase64data());
            $this->updatedAt = new \DateTimeImmutable();
        }
        return $this;


    }

    public function __toString()
    {
        return $this->description ?? $this->getImageName();
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getBase64(): ?string
    {
        return $this->base64;
    }

    public function setBase64(?string $base64): self
    {
        $this->base64 = $base64;

        return $this;
    }

    public function uploadImage(?Image $image = null)
    {
        return;
    }

    public function galleryImage(?Image $image = null)
    {

        return;
    }


    public function getUploadImage()
    {
        return $this;
    }

}
