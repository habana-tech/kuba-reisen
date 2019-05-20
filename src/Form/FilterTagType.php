<?php

namespace App\Form;

use App\Entity\FilterTag;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class FilterTagType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title')
            ->add('language',  ChoiceType::class, ['choices' => [
                'de' => 'de',
                'en' => 'en',
                'es' => 'es',
                ]])
            ->add('interests')
            ->add('activities')
            ->add('destinations')
            ->add('translation_from')
            ->add('activities')
            ->add('modified_by')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => FilterTag::class,
        ]);
    }
}
