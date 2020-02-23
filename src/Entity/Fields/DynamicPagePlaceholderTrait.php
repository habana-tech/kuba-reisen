<?php


namespace App\Entity\Fields;

use App\Entity\DynamicPage;

/**
 * Trait DynamicPagePlaceholderTrait
 * @package App\Entity\Fields
 * @deprecated
 */
trait DynamicPagePlaceholderTrait
{

    //TODO: delete after migration
    /**
     * @return DynamicPage
     * @deprecated
     */
    public function getDynamicPage()
    {
        dump('MUST change dynamic page content');
        return new DynamicPage();
    }
}