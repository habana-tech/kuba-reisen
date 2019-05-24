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
    private $pageTemplate;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $pageContent = [];

    private $elementsList;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\UploadedImage", mappedBy="dynamic_page")
     */
    private $uploadedImages;

    /**
     * DynamicPage constructor.
     * @param $pageTemplate
     */
    public function __construct($pageTemplate = 'example.html.twig')
    {
        $this->pageTemplate = $pageTemplate;
        $this->uploadedImages = new ArrayCollection();
        $this->language = 'de';
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

    /**
     * @return Collection|UploadedImage[]
     */
    public function getUploadedImages(): Collection
    {
        return $this->uploadedImages;
    }

    public function addUploadedImage(UploadedImage $uploadedImage): self
    {
        if (!$this->uploadedImages->contains($uploadedImage)) {
            $this->uploadedImages[] = $uploadedImage;
            $uploadedImage->setDynamicPage($this);
        }

        return $this;
    }

    public function removeUploadedImage(UploadedImage $uploadedImage): self
    {
        if ($this->uploadedImages->contains($uploadedImage)) {
            $this->uploadedImages->removeElement($uploadedImage);
            // set the owning side to null (unless already changed)
            if ($uploadedImage->getDynamicPage() === $this) {
                $uploadedImage->setDynamicPage(null);
            }
        }

        return $this;
    }
}
