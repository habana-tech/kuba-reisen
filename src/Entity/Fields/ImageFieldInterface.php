<?php


namespace App\Entity\Fields;


use App\DataConverter\SingleImageFromGallery;
use App\Entity\Image;
use Symfony\Component\HttpFoundation\File\UploadedFile;

interface ImageFieldInterface
{


    public function getImage():? Image;

    public function setImage(?Image $image);

    public function hasImage(): bool;
//
//    /**
//     * @return UploadedFile
//     */
//    public function getUploadedImage():?UploadedFile;
//
//    /**
//     * @param mixed $uploadedImage
//     */
//    public function setUploadedImage($uploadedImage): void;

    public function getImageField(): SingleImageFromGallery;
}