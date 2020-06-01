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

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('travelDate', DateType::class, [
                'label' => 'Wann planen Sie nach Kuba zu reisen?',
                'widget' => 'single_text',
                'attr' => ['min' => date('Y-m-d')]
            ])
            ->add('travelDuration', HiddenType::class, [
                'label' => 'Wie lange wollen Sie dort bleiben?'])

            ->add('peopleAmount', ChoiceType::class, [
//                'label'=>"Mit wie vielen Personen reisen Sie?",
                'choices' => [
                    '1 Erwachsener' => '1 Erwachsener', //'Just one',
                    '2 Erwachsene' => '2 Erwachsene',
                    '3 Erwachsene' => '3 Erwachsene',
                    '4 Erwachsene' => '4 Erwachsene',
                    '5 Erwachsene' => '5 Erwachsene',
                    'Mehr als 5 Erwachsene' => 'Mehr als 5 Erwachsene',  //more than 5
                    ],
                'expanded' => false])

            ->add('childAmount', ChoiceType::class, [
                'choices' => [
                    'Keine Kinder' => 'Keine Kinder', //no kids
                    '1 Kind' => '1 Kind',
                    '2 Kinder' => '2 Kinder',
                    '3 Kinder' => '3 Kinder',
                    '4 Kinder' => '4 Kinder',
                    '5 Kinder' => '5 Kinder',
                    'Mehr als 5 Kinder' => 'Mehr als 5 Kinder',
                    ],
                'expanded' => false])

            ->add('travelBudget', HiddenType::class, [
                'label' => 'Was ist Ihr Budget für diese Reise?',
               ])

            ->add('flyTicket', ChoiceType::class, [
                'label' => 'Hast du schon ein Flugticket?',
                'choices' => [
                    'Ja' => true,
                    'Noch nicht' => false,
                ],
                'expanded' => true,
                'attr' => ['class' => 'radio-switch'],
                'choice_attr' => ['class' => 'radio-switch__item']
            ])
            ->add('flyTicketOnBudget', ChoiceType::class, [
                'label' => 'Budget inkluidert Flug?',
                'choices' => [
                    'Ja' => true,
                    'Nein' => false,
                ],
                'expanded' => true,
                'attr' => ['class' => 'radio-switch'],
                'choice_attr' => ['class' => 'radio-switch__item']
            ])

            ->add('selfConsider', HiddenType::class, [
                'label' => 'Wie abenteuerlich bist du?'
            ])

            ->add('selfCharacter', HiddenType::class, [
                'label' => 'Wie sehr genießt du die Natur?'
            ])

            ->add('selfLuxury', HiddenType::class, [
             'label' => 'Wie viel Komfort muss sein?'])

            ->add('clientName', null, ['label' => 'Name'])
            ->add('clientEmail', EmailType::class, [
                'label' => 'E-Mail'
            ])
            ->add('telephone', TextType::class, [
                'label' => 'Telefonnummer'
            ])
            ->add('message', null, ['label' => 'Nachricht'])

            ->add('requestId', HiddenType::class)
            ->add('interests')
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => ContactPlaning::class
        ]);
    }
}
