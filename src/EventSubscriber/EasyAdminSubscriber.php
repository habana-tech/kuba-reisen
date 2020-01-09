<?php


namespace App\EventSubscriber;

use App\Entity\DescriptionFragment;
use App\Entity\Fields\DescriptionFragmentFieldInterface;
use App\Entity\Fields\GalleryFieldInterface;
use App\Entity\Fields\ImageFieldInterface;
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
     * @param ManagerRegistry $em
     * @param ActivityRepository $activityRepository
     */
    public function __construct(DestinationRepository $destinationRepository, ManagerRegistry $em,
                                                         ActivityRepository $activityRepository)
    {
        $this->em = $em->getManager();
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
//                    'setUploadedImagesInDestinationsAndActivities'
                    ],
                'easy_admin.pre_update' => [
                    'setUploadedImagesAsGalleryOrImage',
//                    'setUploadedImagesInDestinationsAndActivities'
                    ],
//
//                'easy_admin.post_initialize' => [
//                    'setUploadedImagesInDestinationsAndActivities'
//                    ],
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
        else {
            $TestClass = $entity;
        }

        //If not implements DescriptionFragmentFieldInterface......
        if(!($TestClass instanceof DescriptionFragmentFieldInterface)) {
            return;
        }

//        $relatedEntityId = $request->query->get('id');
//        $destination = $request->get('destination');
//        $activity = $request->get('activity');

        //Get the related data from Request Object, from destination or activity field, conditional(activity or destination)..
//        [$entityName, $currentRepo, $sentData] =  $destination ?
//                                ['destination', $this->destinationRepository, $destination] :
//                                ['activity', $this->activityRepository, $activity];
//
//        if($relatedEntityId)
//        {
//            $entityObj = $currentRepo->find($relatedEntityId);
//            if($entityObj && is_array($sentData['descriptionFragment'])) {
//                foreach ($sentData['descriptionFragment'] as &$item) {
//                    $item[$entityName] = $entityObj;
//                }
//                unset($item);
//            }
//        }

//        $request->request->set($entityName, $sentData);
//        $event['request'] = $request;
    }
    public function setUploadedImagesAsGalleryOrImage(GenericEvent $event): void
    {
            $entity = $event->getSubject();

            //Add entities contains gallery
            if (($entity instanceof GalleryFieldInterface
                || $entity instanceof DescriptionFragment
            ))
            {
                foreach ($entity->getUploadedImages() as $image )
                {
                    $entity->addGallery($image);
                }
                $event['entity'] = $entity;

            }

            if ($entity instanceof ImageFieldInterface)
            {
//                if($entity->getUploadNewFile())
////                {
////                    $newImage = (new Image())->setImageFile($entity->getUploadedImage())->setDescription($entity->getName());
////                    $this->em->persist($newImage);
////                    $entity->setImage($newImage);
////                }
////                else
                if($entity->getFromGallery() !== $entity->getImage())
                {
                    $entity->setImage($entity->getFromGallery());
                }
                $event['entity'] = $entity;

            }




        }
}