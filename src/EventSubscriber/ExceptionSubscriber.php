<?php

namespace App\EventSubscriber;

use Psr\Log\LoggerInterface;
use Symfony\Bridge\Twig\Mime\NotificationEmail;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;

class ExceptionSubscriber implements EventSubscriberInterface
{
    /**
     * @var MailerInterface
     */
    private $mailer;
    /**
     * @var LoggerInterface
     */
    private $logger;

    public const EMAIL_ERROR_SUBJECT = 'An internal error occurred at kubareisen.';
    public const EMAIL_ADMIN = 'josmiguel92+kubareisen@gmail.com';
    public const EMAIL_ADMIN2 = '14ndy15+kubareisen@gmail.com';

    public function __construct(MailerInterface $mailer, LoggerInterface $logger)
    {
        $this->mailer = $mailer;

        $this->logger = $logger;
    }

    public function onKernelException(ExceptionEvent $event): void
    {
        if (!$event->isMasterRequest() || ($event->getThrowable() instanceof NotFoundHttpException)) {
            return;
        }
        $message = (new NotificationEmail())
            ->addTo(self::EMAIL_ADMIN)
            ->addTo(self::EMAIL_ADMIN2)
            ->subject(self::EMAIL_ERROR_SUBJECT)
            ->importance(NotificationEmail::IMPORTANCE_HIGH)
            ->content(get_class($event->getThrowable()) . "\n\n" . $event->getThrowable()->getMessage())
            ->attach($event->getThrowable()->getTraceAsString(), 'trace.txt')
            ->attach(
                json_encode(
                    [
                        'attributes' => $event->getRequest()->attributes->getIterator(),
                        'request' => $event->getRequest()->getContent(),
                        'query' => $event->getRequest()->query->getIterator(),
                        //  'server' => $event->getRequest()->server->getIterator(),
                        'cookies' => $event->getRequest()->cookies->getIterator(),
                        'headers' => $event->getRequest()->headers->getIterator(),
                    ],
                    JSON_PRETTY_PRINT | JSON_FORCE_OBJECT
                ),
                'request.json'
            );

        try {
            $this->mailer->send($message);
        } catch (TransportExceptionInterface $e) {
            $this->logger->emergency('Cannot connect to email server or error sending the error notification to admin');
        }
    }

    public static function getSubscribedEvents(): array
    {
        return ['kernel.exception' => 'onKernelException'];
    }
}
