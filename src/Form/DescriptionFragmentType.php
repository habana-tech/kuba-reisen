<?php

namespace App\Form;

use App\Entity\DescriptionFragment;
use App\Entity\Image;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class DescriptionFragmentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'label'=> 'Title for the Feature component',
                'attr' => [
                    'required' => true
                ]])
            ->add('fromGallery', EntityType::class, [
                'class'=> Image::class,
                'label'=> 'Use this image from Gallery',
                'required'=>false,
                'attr' => ['data-widget' => 'select2', 'required'=>false]
            ])
            ->add('image', ImageUploadType::class, [
                'label' => 'Image for this component',
                'attr'=>[
                    'class' => 'destination_fragment_image',
            ]])
            ->add('content', CKEditorType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => DescriptionFragment::class,
        ]);
    }
}
