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
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Event\Event;

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
                'vich_uploader.pre_upload' => ['dropFilesFromRequest'],
        );

    }

    public function setUploadedImagesAsGalleryOrImage(GenericEvent $event, $eventName): void
    {
            $entity = $event->getSubject();
        /**
         * @var \Symfony\Component\HttpFoundation\Request $request;
         */
            $request = $event->getArgument('request')->request;

            //Add entities contains gallery
            if ($entity instanceof GalleryFieldInterface)
            {
                foreach ($entity->getUploadedImages() as $image )
                {
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
                //save the entity array send in request
                $entityName = strtolower(basename(get_class($entity)));

                $filesOnRequest = $event->getArgument('request')->files;

                if(!$objArray = $request->get($entityName))
                    return;

                    $imageField = $objArray['imageField'];

                    //In case a image is selected from gallery
                    if(isset($image['galleryImage']) && $galleryImageId = $image['galleryImage']) {
                        if($imageObj = $this->em->getRepository(Image::class)->find($galleryImageId)) {
                            $entity->setImage($imageObj);
                        }
                    }
//                    else //maybe is an new file for upload
//                    {
//
//                        $file = $filesOnRequest->get($entityName);
//                        if(isset($file['galleryImage']['uploadImage']['imageFile'])){
//                            $newFile = $file['galleryImage']['uploadImage']['imageFile']['file'];
//
//                            if($newFile instanceof UploadedFile)
//                            {
//                                $newImage = new Image();
//                                $newImage->setImageFile($newFile);
//
//                                $newImageDescription = $image['uploadImage']['description'] ?? $newFile->getClientOriginalName();
//                                $newImage->setDescription($newImageDescription);
////                                $this->em->persist($newImage);
//                                $entity->setImage($newImage);
//                                unset($file['galleryImage']['uploadImage']);
//
//                            }
//                        }
//
//                    }

//                if($entity->getFromGallery() !== $entity->getImage())
//                {
//                    $entity->setImage($entity->getFromGallery());
//                }

                $event['entity'] = $entity;



            }

        }

        public function dropFilesFromRequest(Event $event)
        {
            $entity = $event->getObject();

            $event->stopPropagation();
            if($entity instanceof \Proxies\__CG__\App\Entity\Image)
                return;

            $event->stopPropagation();
            unset($entity);

            dump($event);

//             $event['entity'] = null;


//
//            /**
//             * Image $entity
//             */
//            if($entity->getId() && $entity->getImageFile() && (!$entity->getImageFile()->getLinkTarget() || !$entity->getImageFile()->isFile()))
//                dump(["error case", $event]);
        }

}