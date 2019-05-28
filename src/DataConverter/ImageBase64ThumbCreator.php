<?php


namespace App\DataConverter;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ImageBase64ThumbCreator extends AbstractController
{


    private $base64data;
    /**
     * ImageBase64ThumbCreator constructor.
     */
    public function __construct(string $path = 'folder')
    {
        $temp = explode('/static/',$path);
        if(count($temp))
            $path = $temp[count($temp)-1];
        if(!preg_match("|^static/|", $path))
            $path = "static/".$path;

        dump($temp);
        $path = __DIR__.'/../../public/'. trim($path,'/\\');
        dump($path);
        if(file_exists($path))
        {
           if($image = @imagecreatefromjpeg($path) or $image = @imagecreatefrompng($path))


            $width = imagesx($image);
            $height = imagesy($image);
            $original_aspect = $height / $width;

            $thumb_width = 10; //px

            $thumb_height = $original_aspect*$thumb_width;

            $thumb = imagecreatetruecolor( $thumb_width, $thumb_height );

            imagecopyresampled($thumb,
                $image,
                0, 0,
                0, 0,
                $thumb_width, $thumb_height,
                $width, $height);

            imageinterlace($thumb, true);
            ob_start ();

            imagejpeg ($thumb);
            $image_data = ob_get_contents ();

            ob_end_clean ();

            $this->base64data = base64_encode($image_data);

        }
        return false;
    }

    /**
     * @return string
     */
    public function getBase64data(): ?string
    {
        return $this->base64data;
    }



}