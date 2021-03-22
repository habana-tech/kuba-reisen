<?php

namespace App\DataConverter;

use App\Exception\ProcessException;
use Doctrine\Migrations\Tools\Console\Exception\FileTypeNotSupported;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\ErrorHandler\Error\FatalError;
use Symfony\Component\Filesystem;
use Symfony\Component\HttpFoundation\File\File;

class ImageBase64ThumbCreator extends AbstractController
{
    public static function getStaticRelativePath($path)
    {
        $temp = explode('/static/', $path);
        if (count($temp)) {
            $path = $temp[count($temp) - 1];
        }
        if (!preg_match('|^static/|', $path)) {
            $path = '/static/' . $path;
        }

//        return trim($path,'/\\');
        return $path;
    }

    private $base64data;

    /**
     * ImageBase64ThumbCreator constructor.
     * @param string $path
     * @param bool $absoluteFileName
     * @throws ProcessException
     */
    public function __construct(string $path = 'folder', $absoluteFileName = false)
    {

        if ($absoluteFileName) {
            $path = $this::getStaticRelativePath($path);
            $path = __DIR__ . '/../../public/' . $path;
        }

        try {
            $imageFile = new File($path);
            if (
                !in_array($imageFile->getMimeType(), array(
                'image/png',
                'image/jpg',
                'image/jpeg',
                'image/webp',
                ))
            ) {
                throw new FileTypeNotSupported(
                    'Error on thumbnail creation. The file mimeType "' .
                    $imageFile->getMimeType() .
                    '" doesn\'t match. Only PNG, JPEG or WEBP files are allowed'
                );
            }

            if (($image = @imagecreatefromjpeg($path)) || ($image = @imagecreatefrompng($path))) {
                $width = imagesx($image) ?? 1;
                $height = imagesy($image) ?? 1;
                $originalAspect = $height / $width;

                $thumbWidth = 15; //px

                $thumbHeight = $originalAspect * $thumbWidth;

                $thumb = imagecreatetruecolor($thumbWidth, $thumbHeight);

                imagecopyresampled(
                    $thumb,
                    $image,
                    0,
                    0,
                    0,
                    0,
                    $thumbWidth,
                    $thumbHeight,
                    $width,
                    $height
                );

                imageinterlace($thumb, true);
                ob_start();

                imagejpeg($thumb);
                $imageData = ob_get_clean();

                $this->base64data = 'data:image/jpeg;base64,' . base64_encode($imageData);
            }
        } catch (\Exception $error) {
            throw new ProcessException('Error on thumbnail creation and persist at DB. ' . $error->getMessage());
        }
    }

    /**
     * @return string
     */
    public function getBase64data(): ?string
    {
        return $this->base64data;
    }
}
