<?php


namespace App\EventSubscriber;

use App\Entity\DestinationFragment;
use App\Entity\Image;
use App\Repository\DestinationRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use App\Entity\Activity;
use App\Entity\Destination;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    private $em;
    private $destinationRepository;

    /**
     * EasyAdminSubscriber constructor.
     * @param $em
     */
    public function __construct(ManagerRegistry $em, DestinationRepository $destinationRepository)
    {
        $this->em = $em->getManager();
        $this->destinationRepository = $destinationRepository;
    }


    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents()
    {
        return array(
//                'easy_admin.pre_new' => array('setUploadedImagesAsGallery'),
//                'easy_admin.post_new' => array('setUploadedImagesAsGallery'),
                'easy_admin.pre_persist' => [
                    'setUploadedImagesAsGallery',
                    'setUploadedImagesInDestination'
                    ],
                'easy_admin.pre_update' => [
                    'setUploadedImagesAsGallery',
                    'setUploadedImagesInDestination'
                    ],

                'easy_admin.post_initialize' => [
                    'setUploadedImagesInDestination'
                    ],
            );
    }

    public function setUploadedImagesInDestination(GenericEvent $event)
    {
        $entity = $event->getSubject();
        $request = $event->getArgument('request');



        if (is_array($entity) && isset($entity['class']) &&
            $entity['class'] !== Destination::class) {
                return;
            }
        if(is_object($entity) && !(
            $entity instanceof Destination || $entity instanceof DestinationFragment
            )) {
                return;
            }

        if($entity instanceof DestinationFragment)
        {
            dump('fragment',$entity);
        }

//        $request = new \Symfony\Component\HttpFoundation\Request();

        $destinationId = $request->get('id');
        $destination = $request->get('destination');

        if($destinationId)
        {
             $destinationObj = $this->destinationRepository->find($destinationId);
            if(is_array($destination['destinationFragment'])) {
                foreach ($destination['destinationFragment'] as &$item) {
                    $item['destination'] = $destinationObj;
                }
                unset($item);
            }

        }


        dump($destinationId,$destination, $request);

        $request->request->set('destination', $destination);
        $event['request'] = $request;
        dump($event->getArgument('request'));
    }
    public function setUploadedImagesAsGallery(GenericEvent $event)
        {
            $entity = $event->getSubject();

            //Add entities contains gallery
            if (!($entity instanceof Activity
                OR $entity instanceof Destination
                OR $entity instanceof DestinationFragment
            ))
            {
                return;
            }

            foreach ($entity->getUploadedImages() as $image )
            {
                $entity->addGallery($image);
            }
//            dump($entity);
            $event['entity'] = $entity;

        }
}