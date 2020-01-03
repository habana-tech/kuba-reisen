<?php


namespace App\PageManager\TemplateSelector;


class PageTemplate
{
    private $name;
    private $path;
    private $description;
    private $icon;

    /**
     * PageTemplate constructor.
     * @param $name
     * @param $path
     * @param $description
     * @param $icon
     */
    public function __construct($path = null, $name=null, $description = null, $icon = null)
    {
        $this->name = $name;
        $this->path = $path;
        $this->description = $description;
        $this->icon = $icon;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * @return null
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @return null
     */
    public function getIcon()
    {
        return $this->icon;
    }

    public function __toString()
    {
        return $this->path;
    }

    /**
     * @param null $name
     * @return PageTemplate
     */
    public function setName($name)
    {
        $this->name = $name;
        return $this;
    }

    /**
     * @param null $path
     * @return PageTemplate
     */
    public function setPath($path)
    {
        $this->path = $path;
        return $this;
    }

    /**
     * @param null $description
     * @return PageTemplate
     */
    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

    /**
     * @param null $icon
     * @return PageTemplate
     */
    public function setIcon($icon)
    {
        $this->icon = $icon;
        return $this;
    }



}