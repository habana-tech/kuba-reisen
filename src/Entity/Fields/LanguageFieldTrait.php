<?php

namespace App\Entity\Fields;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Language Field
 * @deprecated
 */
trait LanguageFieldTrait
{

    /**
     * @Assert\Choice(choices = {"es", "en", "de"}, message = "Select language")
     * @ORM\Column(type="string", length=255)
     */
    private $language;


    public function getLanguage(): ?string
    {
        return $this->language;
    }

    public function setLanguage(string $language = 'de'): self
    {
        $this->language = $language;

        return $this;
    }

    public function getTranslationFrom(): ?self
    {
        return $this->translation_from;
    }

    public function setTranslationFrom(?self $translation_from): self
    {
        $this->translation_from = $translation_from;

        return $this;
    }
}
