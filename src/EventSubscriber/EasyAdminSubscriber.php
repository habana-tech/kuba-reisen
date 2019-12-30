<?php


namespace App\EventSubscriber;

use App\Entity\Image;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use App\Entity\Activity;
use App\Entity\Destination;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    private $em;

    /**
     * EasyAdminSubscriber constructor.
     * @param $em
     */
    public function __construct(ManagerRegistry $em)
    {
        $this->em = $em->getManager();
    }


    /**
     * @inheritDoc
     */
    public static function getSubscribedEvents()
    {
        return array(
//                'easy_admin.pre_new' => array('setUploadedImagesAsGallery'),
//                'easy_admin.post_new' => array('setUploadedImagesAsGallery'),
                'easy_admin.pre_persist' => array('setUploadedImagesAsGallery'),
                'easy_admin.pre_update' => array('setUploadedImagesAsGallery'),
            );
    }

    public function setUploadedImagesAsGallery(GenericEvent $event)
        {

            $this->em = $event->getArgument('em');
            $entity = $event->getSubject();

            //Add entities contains gallery
            if (!($entity instanceof Activity OR $entity instanceof Destination))
            {
                return;
            }

            $request = $event->getArgument('request');
            dump($request, $entity);

//            foreach ($entity->getUploadedImages() as $file)
//            {
//                $image = new Image();
//                $image->setImageFile($file);
//                $image->setDescription($entity->getName());
//                $this->em->persist($image);
//                $entity->addGallery($image);
//            }
            dump($entity);
            $event['entity'] = $entity;

        }
}