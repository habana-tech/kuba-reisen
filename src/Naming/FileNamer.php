<?php
/**
 * Created by PhpStorm.
 * User: rd01
 * Date: 06/06/2019
 * Time: 0:53
 */

namespace App\Naming;

use Vich\UploaderBundle\Naming\NamerInterface;
use Vich\UploaderBundle\Mapping\PropertyMapping;
use Vich\UploaderBundle\Naming\Polyfill\FileExtensionTrait;


class FileNamer implements NamerInterface
{
    use FileExtensionTrait;

    public function name($object, PropertyMapping $mapping): string
{
    $name = str_replace('.', '', uniqid('', true));


    $ext = 'png';
    if($originalName = $object->getImageFile()->getClientOriginalName())
    {
        $_ext = '';
        $parts = explode('.',$originalName);
        if(count($parts)>1)
            $_ext = $parts[count($parts)-1];
        else
            $_ext = pathinfo($originalName, PATHINFO_EXTENSION);
    }

    if($_ext)
        $ext = $_ext;


    $name = sprintf('%s.%s', $name, $ext);


    return $name;
}



}