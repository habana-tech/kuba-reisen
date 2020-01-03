<?php

namespace App\Entity;

use App\Entity\Fields\DescriptionFragmentFieldInterface;
use App\Entity\Fields\DescriptionFragmentFieldTrait;
use App\Entity\Fields\GalleryFieldInterface;
use App\Entity\Fields\GalleryTrait;
use App\Entity\Fields\MachineNameInterface;
use App\Entity\Fields\MachineNameTrait;
use App\PageManager\TemplateSelector\PageTemplate;
use App\PageManager\TemplateSelector\PageTemplateSelector;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\DataConverter\ImageBase64ThumbCreator;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DynamicPageRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class DynamicPage implements MachineNameInterface, GalleryFieldInterface, DescriptionFragmentFieldInterface
{
    use MachineNameTrait, GalleryTrait, DescriptionFragmentFieldTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\manyToMany(targetEntity="DescriptionFragment", cascade={"persist", "remove"})
     * @ORM\JoinTable(name="page_fragments",
     *      joinColumns={@ORM\JoinColumn(name="page_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="fragment_id", referencedColumnName="id", unique=true)}
     *     )
     */
    private $descriptionFragment;

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
     * @ORM\Column(type="text", nullable=true)
     */
    private $textContent;

    /**
     * DynamicPage constructor.
     * @param $pageTemplate
     */
    public function __construct($pageTemplate = 'example.html.twig')
    {
        $this->pageTemplate = $pageTemplate;
        $this->uploadedImages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPageName(): ?string
    {
        if(($decode = urldecode($this->pageName))!== $this->pageName) {
            return $decode;
        }
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

    /**
     * @return false|string
     * @deprecated
     */
    public function getJsonContent(){
        return json_encode($this->pageContent);
    }

    /**
     * @return mixed
     */
    public function getPageTemplate(): PageTemplate
    {
        if($this->pageTemplate instanceof PageTemplate) {
            return $this->pageTemplate;
        }

        $templates = PageTemplateSelector::getTemplates();
        foreach ($templates as $template)
        {
            if($template->getPath() === $this->pageTemplate) {
                return $template;
            }
        }
        return new PageTemplate();
    }

    /**
     * @param mixed $pageTemplate
     */
    public function setPageTemplate( PageTemplate $pageTemplate): void
    {
        $this->pageTemplate = $pageTemplate;
    }

    /**
     * @param $grape_id
     * @param string $format
     * @return |null
     * @deprecated
     */
    public function getElement($grape_id, $format = 'txt')
    {
        if(!isset($this->pageContent[$grape_id][$format])) {
            $format === 'html' ? $format = 'txt' : $format = 'html';
        }
        return $this->pageContent[$grape_id][$format] ?? null;
    }

    /**
     * @param $grape_id
     * @param $value
     * @param string $format
     * @deprecated
     */
    public function setElementContent($grape_id, $value, $format = 'html'):void
    {
        if(!isset($this->pageContent[$grape_id][$format])) {
            $format === 'html' ? $format = 'txt' : $format = 'html';
        }

        if(isset($this->pageContent[$grape_id][$format])) {
            $this->pageContent[$grape_id][$format] = $value;
        }
    }

    /**
     * @param $grape_id
     * @param null $default
     * @return |null
     * @deprecated
     */
    public function getElementContent($grape_id, $default = null)
    {
        if(($res = $this->getElement($grape_id)) && $res !== '') {
            return $res;
        }
        return $default;
    }

    /**
     * @return string|true
     * @deprecated TODO: TO be deleted
     */
    public function getPageContentAsArrayText()
    {
        return print_r($this->getPageContent(), false);
    }

    /**
     * @param $grape_id
     * @param $attr
     * @param null $default
     * @return mixed|string|null
     * @deprecated
     */
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

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->pageName;
    }

    /**
     * @return Collection|UploadedImage[]
     * @deprecated
     */
    public function getUploadedImages(): Collection
    {
        return $this->uploadedImages;
    }

    /**
     * @param UploadedImage $uploadedImage
     * @return $this
     * @deprecated
     */
    public function addUploadedImage(UploadedImage $uploadedImage): self
    {
        if (!$this->uploadedImages->contains($uploadedImage)) {
            $this->uploadedImages[] = $uploadedImage;
            $uploadedImage->setDynamicPage($this);
        }

        return $this;
    }

    /**
     * @param UploadedImage $uploadedImage
     * @return $this
     * @deprecated
     */
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

    /**
     * @param $name
     * @return mixed
     * @deprecated
     */
    public function getHtmlTextElement($name){
        return $this->getPageContent()[$name];
    }


    /**
     * @param $name
     * @return string
     * @deprecated
     */
     public function __get($name){
        if (array_key_exists($name, $this->getPageContent()))
            return trim($this->getElement($name));
    }


    /**
     * @param $name
     * @param $value
     * @deprecated
     */
    public function __set($name, $value){
        if (array_key_exists($name, $this->getPageContent()))
            $this->setElementContent($name, $value);

    }

    /**
     * @return ArrayCollection
     * @deprecated
     */
    public function usedImageList(){
        $list = new ArrayCollection();
        foreach ($this->pageContent as $item){
            if(isset($item['src']) and !$list->contains(basename($item['src'])))
                $list->add(basename($item['src']));
        }
        return $list;
    }


    public function getNameFieldValue(): string
    {
        return $this->pageName;
    }

    public function getTextContent(): ?string
    {
        return $this->textContent;
    }

    public function setTextContent(?string $textContent): self
    {
        $this->textContent = $textContent;

        return $this;
    }
}
