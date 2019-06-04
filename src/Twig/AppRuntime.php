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

    public function filterSrcset($imagePath, $sizes = [1920, 1200, 1000, 900, 800, 600])
    {	
    	$html = '';
    	foreach ($sizes as $value) {
    		$resolvedPath = $this->imagineCacheManager->getBrowserPath($imagePath, 'min_width_'.$value);
    		$html .= ' '.$resolvedPath.' '.$value.'w, ';
    	}
    	$html = trim($html, ", ");
    	dump($html);

        return $html;
    }

    
}