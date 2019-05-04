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
     * @ORM\Column(type="simple_array")
     */
    private $pageContent;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\PageBlock", mappedBy="dynamicPage", orphanRemoval=true, cascade={"persist","remove"})
     */
    private $blocks;

    public function __construct()
    {
        $this->blocks = new ArrayCollection();
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

    public function getPageContent()
    {
        return $this->pageContent;
    }

    public function setPageContent($pageContent): self
    {
        $this->pageContent = $pageContent;

        return $this;
    }

    /**
     * @return Collection|PageBlock[]
     */
    public function getBlocks(): Collection
    {
        return $this->blocks;
    }

    public function addBlock(PageBlock $block): self
    {
        if (!$this->blocks->contains($block)) {
            $this->blocks[] = $block;
            $block->setDynamicPage($this);
        }

        return $this;
    }

    public function removeBlock(PageBlock $block): self
    {
        if ($this->blocks->contains($block)) {
            $this->blocks->removeElement($block);
            // set the owning side to null (unless already changed)
            if ($block->getDynamicPage() === $this) {
                $block->setDynamicPage(null);
            }
        }

        return $this;
    }
}
