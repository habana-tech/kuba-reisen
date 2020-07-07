<?php

namespace App\Exception;

use Throwable;

class ProcessException extends \Exception
{


    /**
     * ProcessException constructor.
     * @param string $message
     * @param int $code
     * @param Throwable|null $previous
     */
    public function __construct($message = "", $code = 0, Throwable $previous = null)
    {
        parent::__construct("Processing error: " . $message, $code, $previous);
    }
}
