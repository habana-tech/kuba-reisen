<?php

namespace App\Twig;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class AppRequestStack
{
    private $requestStack;

    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    /**
     * @return RequestStack
     */
    public function getRequestStack(): RequestStack
    {
        return $this->requestStack;
    }

    public function getMasterRequest(): ?Request
    {
        return $this->requestStack->getMasterRequest();
    }

    public function getMasterPathInfo(): ?string
    {
        return $this->requestStack->getMasterRequest() ? $this->requestStack->getMasterRequest()->getPathInfo() : null ;
    }

    public function urldecodePath()
    {
        return basename(urldecode($this->getMasterPathInfo()));
    }
}
