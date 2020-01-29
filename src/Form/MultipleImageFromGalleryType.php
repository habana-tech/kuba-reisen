<?php

namespace App\Form;

use App\Entity\Image;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class MultipleImageFromGalleryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('image', EntityType::class, [
                'class'=> Image::class,
                'choice_label' => 'description',
                'multiple' => true,
                'attr' => [
                    'class' => 'selectpicker',
                ],
                'choice_attr' => function($choice, $key, $value) {
                    // adds a class like attending_yes, attending_no, etc
                    dump($choice, $key, $value);
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
