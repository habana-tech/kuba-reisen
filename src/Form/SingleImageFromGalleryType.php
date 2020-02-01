<?php

namespace App\Form;

use App\Entity\Image;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\RadioType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SingleImageFromGalleryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder

            ->add('imageFieldAction', ChoiceType::class, [
                    'choices' => [
                        'Use one image from gallery' => 'isFromGallery',
                        'Update the current Image' => 'isUpdateImage',
                        'Upload a new image, keep the current on gallery' => 'isUploadImage'
                    ],
                    'expanded' => true,
                ]
            )
            ->add('galleryImage', EntityType::class, [
                'class'=> Image::class,
                'placeholder' => 'Keep the current image',
                'help' => 'Choose an image from gallery to replace the current image',
                'multiple' => false,
                'required' => false,
                'choice_label' => 'description',
                'choice_value' => 'id',
                'attr' => [
                    'class' => 'selectpicker show-tick',
                    'data-live-search' => 'true',
                ],
                'choice_attr' => function($choice, $key, $value) {
                    return [
                        'data-content'=> "<img style='width: 50px' src=' /media/cache/resolve/min_width_40/static/uploads/images/".$choice->getimageName()."'> ". $choice->getDescription(),
                    ];
                },
            ])

            ->add('updateImage', ImageUploadType::class)

            ->add('uploadNewImage', ImageUploadType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => null,
        ]);
    }
}
