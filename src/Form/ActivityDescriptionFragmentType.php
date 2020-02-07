<?php

namespace App\Form;

use App\Entity\ActivityDescriptionFragment;
use App\Entity\DescriptionFragment;
use App\Entity\Image;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use phpDocumentor\Reflection\Type;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ActivityDescriptionFragmentType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('image', ImageUploadType::class, [
                'label' => null,
                'attr' => [
                    'required' => false,
                    'class' => 'image_upload_only_img_description'
                ]
            ])
            ->add('name', null, [
                'label'=> 'Title for the Feature component',
                'attr' => [
                    'required' => true
                ]])

            ->add('imageField', SingleImageFromGalleryType::class, [
            ])
            ->add('content', CKEditorType::class)
            ->add('location', TextType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ActivityDescriptionFragment::class,
        ]);
    }
}
