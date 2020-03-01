<?php

// src/Twig/AppRuntime.php
namespace App\Twig;

use App\Entity\Image;
use Twig\Extension\RuntimeExtensionInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class AppRuntime implements RuntimeExtensionInterface
{
    private $imagineCacheManager;

    public function __construct(ContainerInterface $container = null)
    {
        if ($container instanceof ContainerInterface) {
            $this->imagineCacheManager = $container->get('liip_imagine.cache.manager');
        }
    }

    public function formatPrice($number, $decimals = 0, $decPoint = '.', $thousandsSep = ',')
    {
        $price = number_format($number, $decimals, $decPoint, $thousandsSep);
        $price = '$' . $price;

        return $price;
    }

    /**
     * @param $imagePath
     * @param array $sizes , the sizes, depends on the filters 'min_width_XXX' defined on liip_image config file
     * @return string|FilterTag[]
     */
    public function filterSrcset($imagePath, $sizes = [1920, 1366, 1200, 1000, 900, 800, 600])
    {
        if (strpos($imagePath, ';base64,')) {
            return;
        }

        $html = '';
        foreach ($sizes as $value) {
            // Obtiene las rutas de las imagenes según el tamaño
            $resolvedPath = $this->imagineCacheManager->getBrowserPath($imagePath, 'min_width_' . $value);
            // Completa la lista de "path tamaño" de las imagenes disponibles
            $html .= ' ' . $resolvedPath . ' ' . $value . 'w, ';
        }
        $html = trim($html, ', ');

        return $html;
    }

    /**
     * @param $imagePath
     * @param null $database64
     * @param string $alt the Alternative text
     * @param string $sizes , for the html img tag
     * @param null $attr
     * @return string|FilterTag[]
     * @deprecated
     */
    public function imgTagContent(
        $imagePath,
        $database64 = null,
        $alt = null,
        $sizes = '100vw',
        $attr = null
    ) {
        if ($imagePath instanceof Image && $imagePath->getImageName()) {
            $imagePath = $imagePath->getImageName();
        }



        $html = "<img class=\"lazyload blur-up\" sizes=\"$sizes\" ";
        if ($attr) {
            $html .= $attr . ' ';
        }
        if ($database64) { //se existe una miniatura en la db proveniente del grape
            $html .= "src=\"$database64\" ";
        } else { //si no, se usa el path de la miniatura de imagen real
            $html .= 'src="' . $this->imagineCacheManager->getBrowserPath($imagePath, 'min_width_15') . '" ';
        }

        $html .= 'data-srcset="' . $this->filterSrcset($imagePath) . "\"alt=\"$alt\">";

        return $html;
    }


    /**
     * @param Image $image, the Image Obj
     * @param string $sizes, for the html img tag
     * @param string $alt the Alternative text
     * @param string $class, for the html img tag

     * @return string
     */
    public function imgTag($image, $sizes = '100vw', $alt = null, $class = null): string
    {
        if (!($image instanceof Image)) {
            $imageObj = new Image();

            if (!$image) {
                $imagePath = 'static/img/hero/water/water.jpg';
            } else {
                $imagePath = $image;
            }
        } else {
            $imageObj = $image;
            $imagePath = $imageObj->getStaticImagePath();
        }

        $html = "<img class=\"lazyload blur-up\" sizes=\"$sizes\" ";
        $src = $imageObj->getBase64() ?? $this->imagineCacheManager->getBrowserPath($imagePath, 'min_width_15');
        $html .= " src=\"$src\" ";
        $html .= ' data-srcset="' . $this->filterSrcset($imagePath) . '" ';

        $alt = $alt ?? $imageObj->getDescription();
        $html .= "alt=\"$alt\">";

        return $html;
    }
}
