<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DynamicPageRepository")
 * @ORM\HasLifecycleCallbacks
 */
class DynamicPage
{
    use LanguageFieldTrait;
    use UserControlFieldsTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $pageName;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pageTitle;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pageTemplate;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $pageContent = [];

    private $elementsList;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\DynamicPage")
     */
    private $translation_from;

    /**
     * DynamicPage constructor.
     * @param $pageTemplate
     */
    public function __construct()
    {
        $this->pageTemplate = 'example.html.twig';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPageName(): ?string
    {
        return $this->pageName;
    }

    public function setPageName(string $pageName): self
    {
        $this->pageName = $pageName;

        return $this;
    }

    public function getPageTitle(): ?string
    {
        return $this->pageTitle;
    }

    public function setPageTitle(?string $pageTitle): self
    {
        $this->pageTitle = $pageTitle;

        return $this;
    }

    public function getPageContent(): ?array
    {
        return $this->pageContent;
    }

    public function setPageContent(?array $pageContent): self
    {
        $this->pageContent = $pageContent;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getPageTemplate()
    {
        return $this->pageTemplate;
    }

    /**
     * @param mixed $pageTemplate
     */
    public function setPageTemplate($pageTemplate): void
    {
        $this->pageTemplate = $pageTemplate;
    }




    public function getElement($grapeid)
    {
        foreach ($this->pageContent as $item) {
            if(isset($item['grapesid']) and $item['grapesid'] == $grapeid)
                return $item;
        }
        return;
    }
    public function getElementContent($grapeid, $default = null)
    {
        foreach ($this->pageContent as $item) {
            if(isset($item['grapesid']) and $item['grapesid'] == $grapeid)
            {
                if(isset($item['content']))
                    return $item['content'];
                if(isset($item['components']))
                    return $this->getHtmlFromComponents($item['components']);
            }

        }
        return $default;
    }


    private function getHtmlFromComponents($components)
    {
        $html = '';
        foreach ($components as $component)
        {
            if(isset($component['tagName']))
                if(isset($component['content']))
                    $html .= "<".$component['tagName'].">".$component['content']."</".$component['tagName'].">";
                else
                    $html .= "<".$component['tagName'].">";
            else
                $html .= $component['content'];
        }
        return $html;
    }

    public function getElementAttr($grapeid, $attr, $default = null)
    {
        foreach ($this->pageContent as $item) {
            if(isset($item['grapesid']) and $item['grapesid'] == $grapeid)
            {
                if(isset($item['attributes'][$attr]))
                    return $item['attributes'][$attr];
                return $default;
            }
        }
        return $default;
    }

    public function __toString()
    {
        return $this->pageName."(".$this->language.")";
    }
}
