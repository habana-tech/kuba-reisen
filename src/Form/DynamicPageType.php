<?php

namespace App\Form;

use App\Entity\DynamicPage;
use App\PageManager\TemplateSelector\PageTemplate;
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
//            ->add('pageTitle')
            ->add('pageTemplate', PageTemplateType::class)
//            ->add('pageContent')
//            ->add('translation_from')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => DynamicPage::class,
        ]);
    }
}
