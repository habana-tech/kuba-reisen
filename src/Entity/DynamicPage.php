<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\DataConverter\ImageBase64ThumbCreator;

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
     * @ORM\OneToMany(targetEntity="App\Entity\UploadedImage", mappedBy="dynamic_page", cascade={"persist", "remove"})
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




    public function getElement($grape_id, $format = 'txt')
    {
        if(!isset($this->pageContent[$grape_id][$format]))
            $format == 'html' ? $format = 'txt' :  $format = 'html';
        if(isset($this->pageContent[$grape_id][$format]) and ($this->pageContent[$grape_id][$format]))
            return $this->pageContent[$grape_id][$format];

        return $this->pageContent[$grape_id]['html'];
    }
    public function setElementContent($grape_id, $value, $format = 'html')
    {
        if(!isset($this->pageContent[$grape_id][$format]))
            $format == 'html' ? $format = 'txt' :  $format = 'html';

        if(isset($this->pageContent[$grape_id][$format]))
            $this->pageContent[$grape_id][$format] = $value;
    }

    public function getElementContent($grape_id, $default = null)
    {
        if($res = $this->getElement($grape_id))
            return $res;
        return $default;
    }


    public function getElementAttr($grape_id, $attr, $default = null)
    {

        $data = '';
        if(isset($this->getPageContent()[$grape_id][$attr]))
            $data = $this->getPageContent()[$grape_id][$attr];
        else
            $data = $default;

        if($attr == 'src') {
            if (!isset($this->getPageContent()[$grape_id][$attr]))
                $data = '/static/img/header_pic.jpg';
            $data = ImageBase64ThumbCreator::getStaticRelativePath($data);
        }


        return $data;
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

    public function getHtmlTextElement($name){
        return $this->getPageContent()[$name];
    }


     public function __get($name){
        if (array_key_exists($name, $this->getPageContent()))
            return trim($this->getElement($name));
    }


    public function __set($name, $value){
        if (array_key_exists($name, $this->getPageContent()))
            $this->setElementContent($name, $value);

    }

}
