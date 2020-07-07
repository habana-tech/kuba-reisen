<?php

namespace App\EventSubscriber;

use App\Exception\ProcessException;
use App\Exception\SavingException;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class SavingAndProcessErrorEvent implements EventSubscriberInterface
{

    /**
     * @var FlashBagInterface
     */
    private $flashBag;

    /**
     * SavingAndProcessErrorEvent constructor.
     */
    public function __construct(FlashBagInterface $flashBag)
    {
        $this->flashBag = $flashBag;
    }


    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents()
    {
        return [

            KernelEvents::EXCEPTION => [
                ['addFlashError', 0],
            ],
        ];
    }

    public function addFlashError(ExceptionEvent $event): void
    {
        $exception = $event->getThrowable();

        if ($exception instanceof SavingException || $exception instanceof ProcessException) {
            $this->flashBag->add('danger', $exception->getMessage());
            $event->setResponse(new RedirectResponse($event->getRequest()->getUri()));
        }
    }
}
