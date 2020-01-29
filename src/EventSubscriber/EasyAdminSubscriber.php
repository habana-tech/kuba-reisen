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
     * @param ManagerRegistry $em
     */
    public function __construct(ManagerRegistry $em)
    {
        $this->em = $em->getManager();
    }


    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents(): array
    {
        return array(
                'easy_admin.pre_persist' => ['setUploadedImagesAsGalleryOrImage'],
                'easy_admin.pre_update' => ['setUploadedImagesAsGalleryOrImage'],
        );

    }

    public function setUploadedImagesInDestinationsAndActivities(GenericEvent $event): void
    {
        $entity = $event->getSubject();

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
//                    dump($entity, $image);
                    $entity->addGallery($image);
                }

                $event['entity'] = $entity;

            }

            if ($entity instanceof DescriptionFragmentFieldInterface)
            {
                foreach ($entity->getDescriptionFragments() as $fragment)
                {
                    if($fragment->getFromGallery())
                    {
//                        dump($entity, $fragment);
                        $fragment->setImage($fragment->getFromGallery());
                        $this->em->persist($fragment);
                    }

                }
            }

            if ($entity instanceof ImageFieldInterface)
            {
                if($entity->getFromGallery() !== $entity->getImage())
                {
                    $entity->setImage($entity->getFromGallery());
                }
                $event['entity'] = $entity;

            }

        }
}