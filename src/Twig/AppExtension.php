<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;
use App\Twig\AppRuntime;


class AppExtension extends AbstractExtension
{
    public function getFilters()
    {
        return [
            new TwigFilter('price', [AppRuntime::class, 'formatPrice']),
            new TwigFilter('filterSrcset', [AppRuntime::class, 'filterSrcset']),
        ];
    }


 	public function getFunctions()
    {
        return [
            new TwigFunction('in_string', [$this, 'in_string']),
            new TwigFunction('imgTagContent', [AppRuntime::class, 'imgTagContent']),
        ];
    }


    public function in_string(string $haystack, string $needle)
    {
        if(stripos($haystack, $needle) === false)
        	return false;
        return true;
    }

} 
