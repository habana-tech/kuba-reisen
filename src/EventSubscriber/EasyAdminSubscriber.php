<?php


namespace App\EventSubscriber;

use App\DataConverter\SingleImageFromGallery;
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
use Symfony\Component\HttpFoundation\Request;
use Vich\UploaderBundle\Event\Event;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    private $em;
    private $destinationRepository;
    private $activityRepository;

    private $entity;
    private $request;
    /**
     * @var GenericEvent
     */
    private $event;

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
                'easy_admin.pre_persist' => ['processRequestFromEasyAdmin'],
                'easy_admin.pre_update' => ['processRequestFromEasyAdmin'],
        );

    }

    /**
     * @param GenericEvent $event
     * @param $eventName
     */
    public function processRequestFromEasyAdmin(GenericEvent $event, $eventName): void
    {
        /**
         * @var Request $request;
         */
        $this->request = $event->getArgument('request')->request;

        $this->entity = $event->getSubject();

        $this->event = $event;


        //Add entities contains gallery
        $this->GalleryFieldProcess();

        //upload or update the image on entity
        $this->ImageFieldProcess();

        //persist the description fragments
        $this->DescriptionFragmentsProcess();


        //set the modified entity to event and exit
        $event['entity'] = $this->entity;
    }

    private function ImageFieldProcess(): void
    {
        if (!$this->entity instanceof ImageFieldInterface) {
            return;
        }

        if(!$this->entity->getImageField() instanceof SingleImageFromGallery) {
            return;
        }

        $imageField = $this->entity->getImageField();

        if($imageField->isUpdateImage())
        {
            $image = $this->entity->getImage();
            if($image instanceof Image)
            {
                $image->setImageFile($imageField->getLastImage()->getImageFile());
                $image->setDescription($imageField->getLastImage()->getDescription());
            }
            else {
                //if image dont exist, create anew one
                $imageField->imageFieldAction('uploadNewImage');
            }
        }
        if($imageField->isUploadNewImage() || $imageField->isFromGallery())
        {
            $this->entity->setImage($imageField->getLastImage());
        }


        dump($this->event, $this->entity, $this->request);
//        exit();
    }


    private function DescriptionFragmentsProcess(): void
    {
        if ($this->entity instanceof DescriptionFragmentFieldInterface)
            {
                foreach ($this->entity->getDescriptionFragments() as $fragment)
                {
                    if($fragment->getFromGallery())  //TODO: review
                    {
                        $fragment->setImage($fragment->getFromGallery());
                        $this->em->persist($fragment);
                    }
                }
            }
    }

    private function GalleryFieldProcess(): void
    {
        if ($this->entity instanceof GalleryFieldInterface) {
            foreach ($this->entity->getUploadedImages() as $image) {
                $this->entity->addGallery($image);
            }
        }
    }
//
//    public function setUploadedImagesAsGalleryOrImage(GenericEvent $event, $eventName): void
//    {
//
//
//
//
//
//
//            if ($entity instanceof ImageFieldInterface)
//            {
//                //save the entity array send in request
//                $entityName = strtolower(basename(get_class($entity)));
//
//                $filesOnRequest = $event->getArgument('request')->files;
//
//                if(!$objArray = $request->get($entityName))
//                    return;
//
//                    $imageField = $objArray['imageField'];
//
//                    //In case a image is selected from gallery
//                    if(isset($image['galleryImage']) && $galleryImageId = $image['galleryImage']) {
//                        if($imageObj = $this->em->getRepository(Image::class)->find($galleryImageId)) {
//                            $entity->setImage($imageObj);
//                        }
//                    }
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

//                $event['entity'] = $entity;



//            }

//        }
//
//        public function dropFilesFromRequest(Event $event)
//        {
//            $entity = $event->getObject();
//
//            $event->stopPropagation();
//            if($entity instanceof \Proxies\__CG__\App\Entity\Image)
//                return;
//
//            $event->stopPropagation();
//            unset($entity);
//
//            dump($event);

//             $event['entity'] = null;


//
//            /**
//             * Image $entity
//             */
//            if($entity->getId() && $entity->getImageFile() && (!$entity->getImageFile()->getLinkTarget() || !$entity->getImageFile()->isFile()))
//                dump(["error case", $event]);
//        }

}