<?php

namespace App\Entity;

use App\Entity\Fields\DescriptionFragmentFieldInterface;
use App\Entity\Fields\DescriptionFragmentFieldTrait;
use App\Entity\Fields\GalleryFieldInterface;
use App\Entity\Fields\GalleryFieldTrait;
use App\Entity\Fields\ImageFieldInterface;
use App\Entity\Fields\ImageFieldTrait;
use App\Entity\Fields\MachineNameInterface;
use App\Entity\Fields\MachineNameTrait;
use App\PageManager\TemplateSelector\PageTemplate;
use App\PageManager\TemplateSelector\PageTemplateSelector;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DynamicPageRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class DynamicPage implements
    MachineNameInterface,
    GalleryFieldInterface,
    DescriptionFragmentFieldInterface,
    ImageFieldInterface
{
    use MachineNameTrait;
    use GalleryFieldTrait;
    use DescriptionFragmentFieldTrait;
    use ImageFieldTrait;

    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToMany(targetEntity="DescriptionFragment", cascade={"persist", "remove"})
     * @ORM\JoinTable(name="page_fragments",
     *      joinColumns={@ORM\JoinColumn(name="page_id", referencedColumnName="id")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="fragment_id", referencedColumnName="id", unique=true)}
     *     )
     */
    private $descriptionFragments;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $template;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $textContent;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $titleDescription;

    /**
     * DynamicPage constructor.
     * @param $template
     */
    public function __construct($template = 'example.html.twig')
    {
        $this->template = $template;
        $this->gallery = new ArrayCollection();
        $this->descriptionFragments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        if (($decode = urldecode($this->name)) !== $this->name) {
            return $decode;
        }
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getTemplate(): PageTemplate
    {
        if ($this->template instanceof PageTemplate) {
            return $this->template;
        }

        $templates = PageTemplateSelector::getTemplates();
        foreach ($templates as $template) {
            if ($template->getPath() === $this->template) {
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

    /**
     * @return string
     */
    public function __toString(): string
    {
        return $this->name;
    }

    public function getNameFieldValue(): ?string
    {
        return $this->name;
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getTitleDescription(): ?string
    {
        return $this->titleDescription;
    }

    public function setTitleDescription(?string $titleDescription): self
    {
        $this->titleDescription = $titleDescription;

        return $this;
    }
}
