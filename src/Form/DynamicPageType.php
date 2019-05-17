<?php

namespace App\Form;

use App\Entity\DynamicPage;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DynamicPageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('pageName')
            ->add('pageTitle')
            ->add('pageTemplate')
            ->add('pageContent')
            ->add('language',  ChoiceType::class, ['choices' => [
                'de' => 'de',
                'en' => 'en',
                'es' => 'es',
            ]])
            ->add('translation_from')
            ->add('modified_by')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => DynamicPage::class,
        ]);
    }
}
