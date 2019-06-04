<?php
// src/Twig/AppRuntime.php
namespace App\Twig;

use Twig\Extension\RuntimeExtensionInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class AppRuntime implements RuntimeExtensionInterface
{
    private $imagineCacheManager;

    public function __construct(ContainerInterface $container = null)
    {
        $this->imagineCacheManager = $container->get('liip_imagine.cache.manager');
    }

    public function formatPrice($number, $decimals = 0, $decPoint = '.', $thousandsSep = ',')
    {
        $price = number_format($number, $decimals, $decPoint, $thousandsSep);
        $price = '$'.$price;

        return $price;
    }

    /**
     * @param string $imagesPath, the relative path to image, ex: static/uploads/image/pic.jpg
     * @param array $sizes, the sizes, depends on the filters 'min_width_XXX' defined on liip_image config file
     * @return string|FilterTag[]
     */
    public function filterSrcset($imagePath, $sizes = [1920, 1200, 1000, 900, 800, 600])
    {	
    	$html = '';
    	foreach ($sizes as $value) {
    		$resolvedPath = $this->imagineCacheManager->getBrowserPath($imagePath, 'min_width_'.$value);
    		$html .= ' '.$resolvedPath.' '.$value.'w, ';
    	}
    	$html = trim($html, ", ");

        return $html;
    }

    /**
     * @param string $imagesPath, the relative path to image, ex: static/uploads/image/pic.jpg
     * @param string $alt the Alternative text
     * @param string $sizes, for the html img tag
     * @param string $class, for the html img tag
     * @return string|FilterTag[]
     */
    public function imgTagContent($imagePath, $alt = null, $sizes = '100vw', $class = 'lazyload blur-up')
    {   

        $html ="<img class=\"$class\" sizes=\"$sizes\" 
                        src=\"$imagePath\"
                         srcset=\"".$this->filterSrcset($imagePath)."\"
                         alt=\"$alt\">";

        return $html;
    }
    
}