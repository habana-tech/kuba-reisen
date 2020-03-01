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
use Exception;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\EventDispatcher\GenericEvent;
use App\Entity\Activity;
use App\Entity\Destination;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Vich\UploaderBundle\Event\Event;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    private $em;
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
        $this->galleryFieldProcess();

        //upload or update the image on entity
        $this->imageFieldProcess();

        //persist the description fragments
        $this->descriptionFragmentsProcess();

        //set the modified entity to event and exit
        $event['entity'] = $this->entity;
    }

    private function getFromSingleImageInput(SingleImageFromGallery $imageField, ?Image $image): ?Image
    {
        if ($imageField->isUpdateImage()) {
            if ($image instanceof Image) {
                try {
                    $image->setImageFile($imageField->getLastImage()->getImageFile());
                } catch (Exception $e) {
                }
                $image->setDescription($imageField->getLastImage()->getDescription());
            } else {
                //if image dont exist, create anew one
                $imageField->imageFieldAction('uploadNewImage');
            }
        }
        $image = (
            $imageField->isUploadNewImage() || $imageField->isFromGallery()
        ) ? $imageField->getLastImage() : $image;

        return $image;
    }

    private function imageFieldProcess(): void
    {
        if (!$this->entity instanceof ImageFieldInterface) {
            return;
        }

        if (!$this->entity->getImageField() instanceof SingleImageFromGallery) {
            return;
        }

        //get the correct image from request
        $image = $this->getFromSingleImageInput($this->entity->getImageField(), $this->entity->getImage());

        //override the image description if necessary
        if (
            $image instanceof Image && !$image->getDescription()
            && $image->getImageFile() instanceof File && $image->getImageFile()->getFilename()
        ) {
            $image->setDescription($image->getImageFile()->getFilename());
        }

        $this->entity->setImage($image);
    }


    private function descriptionFragmentsProcess(): void
    {
        if ($this->entity instanceof DescriptionFragmentFieldInterface) {
            foreach ($this->entity->getDescriptionFragments() as $fragment) {
                if ($fragment->getImageField() instanceof SingleImageFromGallery) {
                    $image = $this->getFromSingleImageInput($fragment->getImageField(), $fragment->getImage());
                    $fragment->setImage($image);
                    $this->em->persist($fragment);
                }
            }
        }
    }

    private function galleryFieldProcess(): void
    {
        if ($this->entity instanceof GalleryFieldInterface) {
            foreach ($this->entity->getUploadedImages() as $image) {
                $this->entity->addGallery($image);
            }
        }
    }
}
