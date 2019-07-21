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

class ActivityType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, ['label'=>'Name of the activity, it will be used on the template'])
            ->add('description', CKEditorType::class,
                ['label'=>'Short description (you can paste from word), it will be show in the activities page'])

            ->add('featuresImagesCount', null, [
                'label' => 'How many images do you want to show for this activity?'
            ])

            ->add('priority', null, ['label'=>'Priority, the biggest appears first'])
//            ->add('language',  ChoiceType::class, ['choices' => [
//                'de' => 'de',
//                'en' => 'en',
//                'es' => 'es',
//            ]])

            ->add('initPrice', null, ['label'=>'Starter price of the activity, in EUROS'])

            ->add('filterTags',EntityType::class,[
                'label'=>'Tags, select all you need for this activity',
//                'choices'=>[
//                    'Just one'=>'Just One',
//                    'Less than five'=>'Less than five',
//                    'Five or more'=>'Five or more'
//                ],
                'class'=> FilterTag::class,
                'expanded'=>true, 'multiple'=>true])


            ->add('destinations',EntityType::class,
                ['label'=>'Destinations to do the activity',
                'class'=> Destination::class,
                'expanded'=>true, 'multiple'=>true])
//            ->add('translation_from')
//            ->add('dynamicPage')
//            ->add('modified_by')

//            ->add('imageFile', VichImageType::class, ['required'=> false, 'label'=>'Primary Image'])
//            ->add('alternativeText', null,  ['label'=>'Describe image'])
           // ->add('saveAndEdit', SubmitType::class, array('label' => 'Save and start editing', 'attr'=>['class' => 'btn']))
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Activity::class,
        ]);
    }
}
