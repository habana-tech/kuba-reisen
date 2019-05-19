<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Vich\UploaderBundle\Entity\File as EmbeddedFile;

use Symfony\Component\HttpFoundation\File\UploadedFile;

use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UploadedImageRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks
 */
class UploadedImage
{
    use ImageFieldTrait;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\DynamicPage", inversedBy="uploadedImages")
     */
    private $dynamic_page;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDynamicPage(): ?DynamicPage
    {
        return $this->dynamic_page;
    }

    public function setDynamicPage(?DynamicPage $dynamic_page): self
    {
        $this->dynamic_page = $dynamic_page;

        return $this;
    }

    public function __construct()
    {
        $this->image = new EmbeddedFile();
        // your own logic
    }
}
