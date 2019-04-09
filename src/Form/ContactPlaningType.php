<?php

namespace App\Form;

use App\Entity\ContactPlaning;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactPlaningType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('travelDate')
            ->add('travelDuration')
            ->add('peopleAmount')
            ->add('travelBudget')
            ->add('flyTicket')
            ->add('selfConsider')
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
