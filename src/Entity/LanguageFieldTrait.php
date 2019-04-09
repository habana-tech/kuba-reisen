<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Language Field
 */
trait LanguageFieldTrait
{

    /**
     * @Assert\Choice(choices = {"ES", "EN", "DE"}, message = "Select language")
     * @ORM\Column(type="string", length=255)
     */
    private $language;


    public function getLanguage(): ?string
    {
        return $this->language;
    }

    public function setLanguage(string $language): self
    {
        $this->language = $language;

        return $this;
    }

    abstract function getTranslationFrom();
}
