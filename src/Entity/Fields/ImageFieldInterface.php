<?php


namespace App\Entity\Fields;


use App\Entity\Image;
use Symfony\Component\HttpFoundation\File\UploadedFile;

interface ImageFieldInterface
{

    public function getImage();

    public function setImage(?Image $image);

    public function hasImage(): bool;

    /**
     * @return UploadedFile
     */
    public function getUploadedImage():?UploadedFile;

    /**
     * @param mixed $uploadedImage
     */
    public function setUploadedImage($uploadedImage): void;
}