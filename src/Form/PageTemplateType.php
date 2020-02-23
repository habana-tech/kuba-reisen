<?php


namespace App\Form;


use App\PageManager\TemplateSelector\PageTemplate;
use App\PageManager\TemplateSelector\PageTemplateSelector;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class PageTemplateType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $templateSelector = new PageTemplateSelector();
        $builder
            ->add('path', ChoiceType::class, ['choices'=> $templateSelector::getTemplatesChoiceList()])

        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => PageTemplate::class,
        ]);
    }
}