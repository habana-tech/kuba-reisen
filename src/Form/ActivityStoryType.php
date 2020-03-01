<?php

namespace App\Form;

use App\Entity\ActivityStory;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ActivityStoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('title')
            ->add('content', CKEditorType::class)
            
            //->add('imageFile', VichImageType::class, ['required'=> false])
            ->add('active')
            ->add('priority')

            //->add('translation_from')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ActivityStory::class,
        ]);
    }
}
