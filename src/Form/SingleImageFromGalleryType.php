<?php

namespace App\Form;

use App\Entity\Image;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class SingleImageFromGalleryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('imageName', EntityType::class, [
                'class'=> Image::class,
                'choice_label' => 'description',
                'choice_value' => 'id',
//                'auto_initialize'=>Image::class,
                'multiple' => false,
                'attr' => [
                    'class' => 'selectpicker',
                ],
                'choice_attr' => function($choice, $key, $value) {
                    return [
                        'data-thumbnail' => $choice->getBase64(),
//                        'data-thumbnail' => '/static/uploads/images/'.$choice->getimageName(),
//                        'class' => "rounded-circle"
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
