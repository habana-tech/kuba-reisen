<?php


namespace App\EventSubscriber;

use App\Entity\DescriptionFragment;
use App\Entity\DescriptionFragmentFieldInterface;
use App\Entity\Image;
use App\Repository\ActivityRepository;
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
    private $activityRepository;

    /**
     * EasyAdminSubscriber constructor.
     * @param DestinationRepository $destinationRepository
     * @param ActivityRepository $activityRepository
     */
    public function __construct(DestinationRepository $destinationRepository,
                                                         ActivityRepository $activityRepository)
    {
//        $this->em = $em->getManager();
        $this->destinationRepository = $destinationRepository;
        $this->activityRepository = $activityRepository;
    }


    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents(): array
    {
        return array(
//                'easy_admin.pre_new' => array('setUploadedImagesAsGallery'),
//                'easy_admin.post_new' => array('setUploadedImagesAsGallery'),
                'easy_admin.pre_persist' => [
                    'setUploadedImagesAsGallery',
                    'setUploadedImagesInDestinationsAndActivities'
                    ],
                'easy_admin.pre_update' => [
                    'setUploadedImagesAsGallery',
                    'setUploadedImagesInDestinationsAndActivities'
                    ],

                'easy_admin.post_initialize' => [
                    'setUploadedImagesInDestinationsAndActivities'
                    ],
            );
    }

    public function setUploadedImagesInDestinationsAndActivities(GenericEvent $event): void
    {
        $entity = $event->getSubject();
        $request = $event->getArgument('request');

        $TestClass = null;
        if (is_array($entity) && isset($entity['class'])){
            $TestClass = $entity['class'];
            $TestClass =  new $TestClass();
        }
        else $TestClass = $entity;

        //If not implements DescriptionFragmentFieldInterface......
        if(!($TestClass instanceof DescriptionFragmentFieldInterface))
            return;

        $relatedEntityId = $request->query->get('id');
        $destination = $request->get('destination');
        $activity = $request->get('activity');


        [$entityName, $currentRepo, $sendedData] =  $destination ?
                                                ['destination', $this->destinationRepository, $destination] :
                                                ['activity', $this->activityRepository, $activity];

        if($relatedEntityId)
        {
            $entityObj = $currentRepo->find($relatedEntityId);
            if($entityObj && is_array($sendedData['descriptionFragment'])) {
                foreach ($sendedData['descriptionFragment'] as &$item) {
                    $item[$entityName] = $entityObj;
                }
                unset($item);
            }
        }

        $request->request->set($entityName, $sendedData);
        $event['request'] = $request;
    }
    public function setUploadedImagesAsGallery(GenericEvent $event): void
    {
            $entity = $event->getSubject();

            //Add entities contains gallery
            if (!($entity instanceof Activity
                OR $entity instanceof Destination
                OR $entity instanceof DescriptionFragment
            ))
            {
                return;
            }

            foreach ($entity->getUploadedImages() as $image )
            {
                $entity->addGallery($image);
            }
            $event['entity'] = $entity;

        }
}