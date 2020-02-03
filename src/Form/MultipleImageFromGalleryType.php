<?php

namespace App\Form;

use App\DataConverter\SingleImageFromGallery;
use App\Entity\Image;
use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use App\Form\ImageUploadType;

class MultipleImageFromGalleryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('galleryImage', CollectionType::class, [
                'class'=> Image::class,
                'placeholder' => 'Keep the current image',
                'help' => 'Choose an image from gallery to replace the current image',
                'multiple' => true,
                'required' => false,
                'choice_label' => 'description',
                'choice_value' => 'id',
                'attr' => [
                    'class' => 'selectpicker show-tick',
                    'data-live-search' => 'true',
                ],
                'query_builder' => function (Galle $er) {
                    return $er->createQueryBuilder('i')
                        ->orderBy('u.username', 'ASC');
                },
                'choices' => [0,1],
                'choice_attr' => function($choice, $key, $value) {
                    return [
                        'data-content'=> "<img style='width: 50px' src=' /media/cache/resolve/min_width_40/static/uploads/images/".$choice->getimageName()."'> ". $choice->getDescription(),
                    ];
                },
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Image::class,

        ]);
    }
}
