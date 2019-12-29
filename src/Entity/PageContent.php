<?php
namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Traversable;

/**
 * @ORM\Embeddable
 */
class PageContent
{

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
     * DynamicPage constructor.
     * @param $pageTemplate
     */
    public function __construct($pageTemplate = 'default.html.twig')
    {
        $this->pageTemplate = $pageTemplate;
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

    public function getJsonContent(){
        return json_encode($this->pageContent);
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


     public function __get($name){
        if (array_key_exists($name, $this->getPageContent()))
            return trim($this->getElement($name));
    }


    public function __set($name, $value){
        if (array_key_exists($name, $this->getPageContent()))
            $this->setElementContent($name, $value);

    }


    public function __isset($name){
        if (array_key_exists($name, $this->getPageContent()))
            return true;
        return false;
    }
}
