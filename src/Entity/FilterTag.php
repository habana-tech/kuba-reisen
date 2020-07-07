<?php

namespace App\Entity;

use App\Entity\Fields\ActiveFieldTrait;
use App\Entity\Fields\PriorityFieldTrait;
use App\Exception\SavingException;
use DateTime;
use DateTimeImmutable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Exception;
use Knp\DoctrineBehaviors\Model as ORMBehaviors;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Context\ExecutionContextInterface;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\FilterTagRepository")
 * @Vich\Uploadable()
 * @ORM\HasLifecycleCallbacks()
 */
class FilterTag
{
    use ActiveFieldTrait;
    use PriorityFieldTrait;
    use ORMBehaviors\Timestampable\Timestampable;

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
     * @ORM\ManyToMany(targetEntity="App\Entity\Destination", mappedBy="filterTags")
     */
    private $destinations;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Activity", mappedBy="filterTags")
     */
    private $activities;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $pinned;

    /**
     * @ORM\Column(type="string", length=180, nullable=true)
     */
    private $iconName;
    /**
    * @Vich\UploadableField(mapping="tags_icons", fileNameProperty="iconName")
    */
    private $iconFile;

    /**
     * @ORM\Column(type="datetime", length=180)
     */
    protected $createdAt;

    /**
     * @ORM\Column(type="datetime", length=180)
     */
    protected $updatedAt;

    public function __construct()
    {
        $this->activities = new ArrayCollection();
        $this->destinations = new ArrayCollection();
        $this->createdAt = new DateTime();
        $this->updatedAt = new DateTime();
        $this->active = true;
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


    public function __toString(): string
    {
        return $this->title;
    }

    /**
     * @return Collection|Activity[]
     */
    public function getActivities(): Collection
    {
        return $this->activities;
    }

    public function addActivity(Activity $activity): self
    {
        if (!$this->activities->contains($activity)) {
            $this->activities[] = $activity;
            $activity->addFilterTag($this);
        }

        return $this;
    }

    public function removeActivity(Activity $activity): self
    {
        if ($this->activities->contains($activity)) {
            $this->activities->removeElement($activity);
            $activity->removeFilterTag($this);
        }

        return $this;
    }


    public function getPinned(): ?bool
    {
        return $this->pinned;
    }

    public function setPinned(?bool $pinned): self
    {
        $this->pinned = $pinned;

        return $this;
    }


    public function getNameFieldValue(): ?string
    {
        return $this->title;
    }

    /**
    * @return Collection|Destination[]
    */
    public function getDestinations(): Collection
    {
        return $this->destinations;
    }

    public function addDestination(Destination $destination): self
    {
        if (!$this->destinations->contains($destination)) {
            $this->destinations[] = $destination;
            $destination->addFilterTag($this);
        }

        return $this;
    }

    public function removeDestination(Destination $destination): self
    {
        if ($this->destinations->contains($destination)) {
            $this->destinations->removeElement($destination);
            $destination->removeFilterTag($this);
        }

        return $this;
    }

    /**
     * @return mixed
     */
    public function getIconFile()
    {
        return $this->iconFile;
    }

    /**
     * @param mixed $iconFile
     * @return FilterTag
     * @throws Exception
     */
    public function setIconFile(?File $iconFile = null): FilterTag
    {

        $this->iconFile = $iconFile;
        if ($iconFile) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new DateTime();
        }
        return $this;
    }

    /**
     * @return mixed
     */
    public function getIconName()
    {
        return $this->iconName;
    }

    /**
     * @param mixed $icon
     * @return FilterTag
     */
    public function setIconName($icon): FilterTag
    {
        $this->iconName = $icon;
        return $this;
    }


    /**
     * @Assert\Callback
     * @param ExecutionContextInterface $context
     * @throws SavingException
     */
    public function validate(ExecutionContextInterface $context): void
    {

        if ($this->iconFile instanceof UploadedFile && $this->iconFile->getError() !== null) {
            $context
                ->buildViolation($this->iconFile->getErrorMessage())
                ->atPath('iconName')
                ->addViolation();
        }

        if (
            $this->iconFile instanceof UploadedFile
            && $this->iconFile->getPathname() !== ''
            && !in_array($this->iconFile->getMimeType(), array(
            'image/svg+xml',
            'image/svg',
            'image/png',
            'image/jpg',
            'image/jpeg',

            ))
        ) {
            $context
                ->buildViolation('Wrong file type "'.$this->iconFile->getMimeType().'" (must be one of: .svg, .png, .jpg)')
                ->atPath('iconName')
                ->addViolation()
            ;
        }
    }

    /**
     * @ORM\PreUpdate()
     * @ORM\PrePersist()
     */
    public function updateTimestamps()
    {
        // Create a datetime with microseconds
        $dateTime = \DateTime::createFromFormat('U.u', sprintf('%.6F', microtime(true)));
        $dateTime->setTimezone(new \DateTimeZone(date_default_timezone_get()));

        if (null === $this->createdAt) {
            $this->createdAt = $dateTime;
        }

        $this->updatedAt = $dateTime;
    }
}
