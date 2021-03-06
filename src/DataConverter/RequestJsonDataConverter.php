<?php

namespace App\DataConverter;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class RequestJsonDataConverter
{
    private $request;
    private $data;

    /**
     * RequestJsonDataConverter constructor.
     * @param $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
        if (!$this->isJsonAjax()) {
            throw new BadRequestHttpException('invalid json body');
        }
    }

    /**
     * @return bool|null
     */
    public function isJsonAjax(): ?bool
    {
        if (
            !$this->request->getContent() ||
            ($this->request->isXmlHttpRequest() === false && $this->request->getContentType() !== 'json')
        ) {
            return false;
        }

        ///throw new BadRequestHttpException('invalid json body')


        $this->data = json_decode($this->request->getContent(), true);
        //header('Access-Control-Allow-Origin: http://localhost:8080');
        //header('Content-Type: application/json');
        
        return !(json_last_error() !== JSON_ERROR_NONE);
    }

    /**
     * @return array|null
     */
    public function getData(): ?array
    {
        return $this->data;
    }

    /**
     * @return Request
     */
    public function replaceDataRequest(): Request
    {
        $this->request->request->replace(is_array($this->data) ? $this->data : array());
        return $this->request;
    }
}
