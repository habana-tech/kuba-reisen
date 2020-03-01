<?php

namespace App\Form;

use App\Entity\Interest;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class InterestType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
//            ->add('description')
//            ->add('language')
//            ->add('translation_from')
//
//            ->add('modified_by')
            ->add('imageFile', VichImageType::class, ['required' => false])
//            ->add('language',  ChoiceType::class, ['choices' => [
//                'de' => 'de',
//                'en' => 'en',
//                'es' => 'es',
//            ]])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Interest::class,
        ]);
    }
}
