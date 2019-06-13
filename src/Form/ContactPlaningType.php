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
                'label'=>"Wann planen Sie nach Kuba zu reisen?",
                'widget'=>'single_text',
                'attr'=>['min'=>date('Y-m-d')]
            ])
            ->add('travelDuration', ChoiceType::class,[
                'label'=>"Wie lange wollen Sie dort bleiben?",
                'choices'=>[
                    'Eine Woche'=>'one_week',
                    'Eineinhalb Wochen'=>'week_and_a_half',
                    'Zwei Wochen oder länger'=>'two_weeks_or_more'
                ],'expanded'=>false])

            ->add('peopleAmount',ChoiceType::class,[
                'label'=>"Mit wie vielen Personen reisen Sie?",
                'choices'=>[
                    'Nur ich'=>'Just one',
                    'Weniger als fünf'=>'Less than five',
                    'fünf oder mehr'=>'Five or more'
                    ],
                'expanded'=>false])

            ->add('travelBudget',ChoiceType::class,[
                'label'=>"Was ist Ihr Budget für diese Reise?",
                'choices'=>[
                    'Mein ganzes Geld'=>'All my money',
                    '1000 EUR'=>'1000 EUR',
                    '2000 EUR'=>'2000 EUR',
                    'Geld ist kein Problem'=>'Money is not a problem'
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
                'label'=>"Wie abenteuerlich bist du?"
            ])

            ->add('selfCharacter', HiddenType::class ,[
                'label'=>"Wie sehr genießt du die Natur?"
            ] )

            ->add('selfLuxury', HiddenType::class,[
             'label'=>"Wie viel bevorzugen Sie Luxus?"] )

            ->add('name', null, ['label'=>'Name'])
            ->add('email', EmailType::class ,[
                'label'=>'E-Mail'
            ])
            ->add('message', null, ['label'=>'Nachricht'])

            ->add('locale', HiddenType::class, ['attr'=>['value' => $options['locale']]])
            ->add('requestId', HiddenType::class)
            ->add('interests')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ContactPlaning::class,
            'locale' => 'de',
        ]);
    }
}
