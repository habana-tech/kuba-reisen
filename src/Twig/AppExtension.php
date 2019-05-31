<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

class AppExtension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('price', [$this, 'formatPrice']),
        ];
    }


 	public function getFunctions()
    {
        return [
            new TwigFunction('in_string', [$this, 'in_string']),
        ];
    }


    public function in_string(string $haystack, string $needle)
    {
    	if(stripos($haystack, $needle) === false)
        	return false;
        return true;
    }

    public function formatPrice($number, $decimals = 0, $decPoint = '.', $thousandsSep = ',')
    {
        $price = number_format($number, $decimals, $decPoint, $thousandsSep);
        $price = '$'.$price;

        return $price;
    }
} 
