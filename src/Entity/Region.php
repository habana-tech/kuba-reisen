<?php

namespace App\Entity;

use App\Entity\Fields\ActiveFieldTrait;
use App\Entity\Fields\DescriptionFragmentFieldInterface;
use App\Entity\Fields\DescriptionFragmentFieldTrait;
use App\Entity\Fields\GalleryFieldInterface;
use App\Entity\Fields\GalleryFieldTrait;
use App\Entity\Fields\ImageFieldInterface;
use App\Entity\Fields\ImageFieldTrait;
use App\Entity\Fields\MachineNameInterface;
use App\Entity\Fields\MachineNameTrait;
use App\Entity\Fields\MetadataField;
use App\Entity\Fields\RelatedActivitiesMetadataFieldTrait;
use App\Entity\Fields\RelatedDestinationMetadataFieldTrait;
use App\Entity\Fields\RelatedPagesMetadataFieldTrait;
use App\PageManager\TemplateSelector\PageTemplate;
use App\PageManager\TemplateSelector\PageTemplateSelector;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\RegionRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks
 */
class Region implements
    ImageFieldInterface,
    GalleryFieldInterface,
    MachineNameInterface,
    DescriptionFragmentFieldInterface
{
    use ImageFieldTrait;
    use ActiveFieldTrait;
    use GalleryFieldTrait;
    use MachineNameTrait;
    use DescriptionFragmentFieldTrait;
    use MetadataField;

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
    public const TYPE_EXPLORING_PAGES = 6;

    public const REGION_TYPES_NAMES = [
        'GENERIC REGION' => self::TYPE_GENERIC_REGION,
        'BANNER REGION' => self::TYPE_BANNER_REGION,
        'TOP DESTINATION REGION' => self::TYPE_TOP_DESTINATION_REGION,
        'TRAVEL OPTIONS' => self::TRAVEL_OPTIONS,
        'FAQ > QUESTION' => self::TYPE_FAQ,
        'CLIENT OPINIONS' => self::TYPE_CLIENTS_OPINIONS,
        'EXPLORING > RELATED PAGES' => self::TYPE_EXPLORING_PAGES
    ];


    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $template;

    /**
     * @ORM\ManyToMany(targetEntity=DynamicPage::class)
     */
    private $relatedPages;

    /**
     * @ORM\ManyToMany(targetEntity=Destination::class)
     */
    private $relatedDestinations;

    /**
     * @ORM\ManyToMany(targetEntity=Activity::class)
     */
    private $relatedActivities;

    /**
     * Region constructor.
     */
    public function __construct()
    {
        $this->gallery = new ArrayCollection();
        $this->active = true;
        $this->descriptionFragments = new ArrayCollection();
        $this->relatedPages = new ArrayCollection();
        $this->relatedDestinations = new ArrayCollection();
        $this->relatedActivities = new ArrayCollection();
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

    public function getNameFieldValue(): ?string
    {
        return $this->title;
    }

    public function getType(): ?int
    {
        return $this->type;
    }

    public function getTypeString(): string
    {
        foreach (self::REGION_TYPES_NAMES as $region => $type) {
            if ($type === $this->type) {
                return $region;
            }
        }
        return 'GENERIC REGION';
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
        if ($this->template instanceof PageTemplate) {
            return $this->template;
        }

        $templates = PageTemplateSelector::getRegionTemplates();
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
     * @return Collection|DynamicPage[]
     */
    public function getRelatedPages(): Collection
    {
        return $this->relatedPages;
    }

    public function addRelatedPage(DynamicPage $relatedPage): self
    {
        if (!$this->relatedPages->contains($relatedPage)) {
            $this->relatedPages[] = $relatedPage;
        }

        return $this;
    }

    public function removeRelatedPage(DynamicPage $relatedPage): self
    {
        if ($this->relatedPages->contains($relatedPage)) {
            $this->relatedPages->removeElement($relatedPage);
        }

        return $this;
    }

    /**
     * @return Collection|Destination[]
     */
    public function getRelatedDestinations(): Collection
    {
        return $this->relatedDestinations;
    }

    public function addRelatedDestination(Destination $relatedDestination): self
    {
        if (!$this->relatedDestinations->contains($relatedDestination)) {
            $this->relatedDestinations[] = $relatedDestination;
        }

        return $this;
    }

    public function removeRelatedDestination(Destination $relatedDestination): self
    {
        if ($this->relatedDestinations->contains($relatedDestination)) {
            $this->relatedDestinations->removeElement($relatedDestination);
        }

        return $this;
    }

    /**
     * @return Collection|Activity[]
     */
    public function getRelatedActivities(): Collection
    {
        return $this->relatedActivities;
    }

    public function addRelatedActivity(Activity $relatedActivity): self
    {
        if (!$this->relatedActivities->contains($relatedActivity)) {
            $this->relatedActivities[] = $relatedActivity;
        }

        return $this;
    }

    public function removeRelatedActivity(Activity $relatedActivity): self
    {
        if ($this->relatedActivities->contains($relatedActivity)) {
            $this->relatedActivities->removeElement($relatedActivity);
        }

        return $this;
    }

    public function getAllRelatedContent()
    {
        $content = [];
        foreach ($this->relatedPages as $item) {
            $content[] = $item;
        }
        foreach ($this->relatedActivities as $item) {
            $content[] = $item;
        }
        foreach ($this->relatedDestinations as $item) {
            $content[] = $item;
        }
        return $content;
    }
}
