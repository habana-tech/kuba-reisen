<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DynamicPageRevisionRepository")
 * @deprecated
 */
class DynamicPageRevision
{

    use UserControlFieldsTrait;
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\DynamicPage")
     * @ORM\JoinColumn(nullable=false,  nullable=true)
     */
    private $dynamicPage;

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $pageContent = [];

    /**
     * @ORM\Column(type="datetime")
     */
    private $modificationDate;

    /**
     * DynamicPageRevision constructor.
     * @param $modificationDate
     */
    public function __construct()
    {
        $this->modificationDate = new \DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDynamicPage(): ?DynamicPage
    {
        return $this->dynamicPage;
    }

    public function setDynamicPage(?DynamicPage $dynamicPage): self
    {
        $this->dynamicPage = $dynamicPage;

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

    public function getModificationDate(): ?\DateTimeInterface
    {
        return $this->modificationDate;
    }

    public function setModificationDate(\DateTimeInterface $modificationDate): self
    {
        $this->modificationDate = $modificationDate;

        return $this;
    }

    public function __toString()
    {
        $date = $this->getModificationDate()->format("Y-M-d H:i");
        $page = $this->dynamicPage->getPageName();
        $user = $this->modified_by ? $this->modified_by : 'anon';
        return "[$date] on $page, by $user";
    }



}
