<?php

namespace App\Form;

use App\Entity\ContactPlaning;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ContactPlaningType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('travelDate', DateType::class,[
                'label'=>"When do you plan to travel to Cuba?",
                'widget'=>'single_text',
                'attr'=>['min'=>date('Y-m-d')]
            ])
            ->add('travelDuration', ChoiceType::class,[
                'label'=>"How long do you plan to stay in there?",
                'choices'=>[
                    'One Week'=>'one_week',
                    'Week and a Half'=>'week_and_a_half',
                    'Two weeks or more '=>'two_weeks_or_more'
                ],'expanded'=>false])

            ->add('peopleAmount',ChoiceType::class,[
                'label'=>"How many people will you travel with?",
                'choices'=>[
                    'Just one'=>'Just One',
                    'Less than five'=>'Less than five',
                    'Five or more'=>'Five or more'
                    ],
                'expanded'=>false])

            ->add('travelBudget',ChoiceType::class,[
                'label'=>"What is your budget for this trip?",
                'choices'=>[
                    'All my money'=>'All my money',
                    '1/2 year of work'=>'1/2 year of work',
                    'Money is not a problem'=>'Money is not a problem'
                ],
                'expanded'=>false])

            ->add('flyTicket',ChoiceType::class,[
                'label'=>"Hast du schon ein Flugticket?",
                'choices'=>[
                    'Ja'=>'true',
                    'Noch nicht'=>'false',
                ],
                'expanded'=>true,
                'attr'=>['class'=>'radio-switch'],
                'choice_attr'=>['class'=>'radio-switch__item']
            ])

            ->add('selfConsider',HiddenType::class,[
                'label'=>"contactForm.selfConsider"
            ])

            ->add('selfCharacter', HiddenType::class ,[
                'label'=>"contactForm.selfCharacter"
            ] )

            ->add('selfLuxury', HiddenType::class )

            ->add('name')
            ->add('email', EmailType::class ,[
                'label'=>'field.email'
            ])
            ->add('message')

            ->add('locale', HiddenType::class, ['attr'=>['value' => $options['locale']]])
            ->add('requestId', HiddenType::class)
            ->add('interests')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ContactPlaning::class,
            'locale' => 'en',
        ]);
    }
}
