<?php

namespace App\Form;

use App\Entity\ContactPlaning;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ContactPlaningType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('travelDate', DateType::class,['label'=>"When do you plan to travel to Cuba?", 'widget'=>'single_text' ])
            ->add('travelDuration', ChoiceType::class,['label'=>"How long do you plan to stay in there?",
                'choices'=>[
        'One Week'=>'one_week',
        'Week and a Half'=>'week_and_a_half',
        'Two weeks or more '=>'two_weeks_or_more'
    ],'expanded'=>false])

            ->add('peopleAmount',ChoiceType::class,['label'=>"How many people will you travel with?",'choices'=>[
                'Just one'=>'one_week',
                'Less than five'=>'Less than five',
                'Five or more'=>'Five or more'
            ],'expanded'=>false])

            ->add('travelBudget',ChoiceType::class,['label'=>"What is your budget for this trip?",'choices'=>[
                'All my money'=>'All my money',
                '1/2 year of work'=>'1/2 year of work',
                'Money is not a problem'=>'Money is not a problem'
            ],'expanded'=>false])

            ->add('flyTicket',ChoiceType::class,['label'=>"Have you a fly ticket already?",
                'choices'=>[
                    'Yes'=>'true',
                    'Not yet'=>'false',
                ],'expanded'=>true, 'attr'=>['class'=>'radio-switch'], 'choice_attr'=>['class'=>'radio-switch__item']])
            ->add('selfConsider',null,['label'=>"When do you plan to travel to Cuba?"])
            ->add('selfCharacter')
            ->add('selfLuxury')
            ->add('message')
            ->add('locale')
            ->add('requestDateTime')
            ->add('requestId')
            ->add('interests')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ContactPlaning::class,
        ]);
    }
}
