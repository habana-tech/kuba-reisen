<?php

namespace App\Exception;

use Throwable;

class SavingException extends \Exception
{
    /**
     * @var string
     */
    private $entity;


    /**
     * SavingException constructor.
     * @param null $entity
     * @param string $message
     * @param int $code
     * @param Throwable|null $previous
     */
    public function __construct($entity = null, $message = "", $code = 0, Throwable $previous = null)
    {
        parent::__construct("Error saving: ".$message, $code, $previous);

        $this->entity = (string) $entity;
    }

    /**
     * @return string
     */
    public function getEntity(): string
    {
        return $this->entity;
    }


}
