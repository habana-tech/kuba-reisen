<?php

namespace App\Form;

use App\Entity\Activity;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ActivityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('description', null, ['label'=>'Short description, it will be show in the activities page'])
//            ->add('language',  ChoiceType::class, ['choices' => [
//                'de' => 'de',
//                'en' => 'en',
//                'es' => 'es',
//            ]])

            ->add('filterTags',null,  ['label'=>'Tags, select all you need for this activity'])
            ->add('destinations',null,  ['label'=>'Destinations to do the activity'])
//            ->add('translation_from')
//            ->add('dynamicPage')
//            ->add('modified_by')

            ->add('imageFile', VichImageType::class, ['required'=> false])
            ->add('alternativeText', null,  ['label'=>'Alternative Text, a short description about image'])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Activity::class,
        ]);
    }
}
