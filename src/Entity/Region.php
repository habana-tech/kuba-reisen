<?php

namespace App\Entity;

use App\Entity\Fields\ActiveFieldTrait;
use App\Entity\Fields\DescriptionFragmentFieldInterface;
use App\Entity\Fields\DescriptionFragmentFieldTrait;
use App\Entity\Fields\GalleryFieldInterface;
use App\Entity\Fields\GalleryFieldTrait;
use App\Entity\Fields\GalleryTrait;
use App\Entity\Fields\ImageFieldInterface;
use App\Entity\Fields\ImageFieldTrait;
use App\Entity\Fields\MachineNameInterface;
use App\Entity\Fields\MachineNameTrait;
use App\PageManager\TemplateSelector\PageTemplate;
use App\PageManager\TemplateSelector\PageTemplateSelector;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RegionRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks
 */
class Region implements ImageFieldInterface, GalleryFieldInterface, MachineNameInterface, DescriptionFragmentFieldInterface
{
    use ImageFieldTrait, ActiveFieldTrait, GalleryFieldTrait, MachineNameTrait, DescriptionFragmentFieldTrait;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $link;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $linkText;

    /**
     * @ORM\Column(type="smallint")
     */
    private $type;

    public const TYPE_GENERIC_REGION = 0;
    public const TYPE_BANNER_REGION = 1;
    public const TYPE_TOP_DESTINATION_REGION = 2;
    public const TRAVEL_OPTIONS = 3;
    public const TYPE_FAQ = 4;
    public const TYPE_CLIENTS_OPINIONS = 5;


    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $template;

    /**
     * Region constructor.
     */
    public function __construct()
    {
        $this->gallery = new ArrayCollection();
        $this->active = true;
        $this->descriptionFragments = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(?string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getLinkText(): ?string
    {
        return $this->linkText;
    }

    public function setLinkText(?string $linkText): self
    {
        $this->linkText = $linkText;

        return $this;
    }

    public function getNameFieldValue():? string
    {
        return $this->title;
    }

    public function getType(): ?int
    {
        return $this->type;
    }

    public function getTypeString(): string
    {
        switch ($this->type){
            case 0: return 'GENERIC REGION';
            case 1: return 'BANNER REGION';
            case 2: return 'TOP DESTINATION REGION';
            case 3: return 'TRAVEL OPTIONS';
            case 4: return 'FAQ QUESTION';
            case 5: return 'CLIENT OPINIONS';
        }

    }

    public function setType(int $type = self::TYPE_GENERIC_REGION): self
    {
        $this->type = $type;

        return $this;
    }


    /**
     * @return mixed
     */
    public function getTemplate(): PageTemplate
    {
        if($this->template instanceof PageTemplate) {
            return $this->template;
        }

        $templates = PageTemplateSelector::getRegionTemplates();
        foreach ($templates as $template)
        {
            if($template->getPath() === $this->template) {
                return $template;
            }
        }
        return new PageTemplate();
    }

    /**
     * @param PageTemplate $template
     */
    public function setTemplate(PageTemplate $template): void
    {
        $this->template = $template;
    }



}
