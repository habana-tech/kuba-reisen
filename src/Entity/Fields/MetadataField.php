<?php


namespace App\Entity\Fields;


trait MetadataField
{


    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $metadata = [];


    public function getMetadata(): ?array
    {
        if(is_array($this->metadata))
            return $this->metadata;
        else return [];
    }

    public function setMetadata(?array $metadata): self
    {
        $this->metadata = $metadata;

        return $this;
    }

    public function __get($name)
    {
        if(property_exists($this, $name))
            return $this->$name;
        return $this->metadata[$name] ?? null;
    }

    public function __set($name, $value)
    {
        if(property_exists($this, $name))
            $this->$$name = $value;
        else
            $this->metadata[$name] = $value;
    }

    public function __isset($name)
    {
        return (property_exists($this, $name) || isset($this->metadata[$name]));

    }
}