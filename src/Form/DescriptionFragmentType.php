<?php

namespace App\Form;

use App\Entity\DescriptionFragment;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
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
                'label'=> 'Title of the fragment',
                'attr' => [
                    'required' => true
                ]])
            ->add('image', ImageUploadType::class, [
                'label' => 'Image for this fragment',
                'attr'=>[
                    'class' => 'destination_fragment_image',

            ]])
            ->add('content', CKEditorType::class)
            ->add('destination', HiddenType::class)
            ->add('activity', HiddenType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => DescriptionFragment::class,
        ]);
    }
}
