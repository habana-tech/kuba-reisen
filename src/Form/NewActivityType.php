<?php

namespace App\Form;

use App\Entity\Activity;
use App\Entity\FilterTag;
use App\Entity\Destination;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class NewActivityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, ['label' => 'Name of the activity, it will be used on the template'])

            ->add('featuresImagesCount', null, [
                'label' => 'How many images do you want to show for this activity?'
            ])

            ->add('saveAndEdit', SubmitType::class, array('label' => 'Save and start editing', 'attr' => ['class' => 'btn']))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Activity::class,
        ]);
    }
}
