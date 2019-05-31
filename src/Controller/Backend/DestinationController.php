<?php

namespace App\Controller\Backend;

use App\Entity\Destination;
use App\Form\DestinationType;
use App\Repository\DestinationRepository;
use App\PageManager\DynamicPageManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\DynamicPage;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Doctrine\ORM\EntityNotFoundException;
/**
 * @Route("/admin/destination")
 */
class DestinationController extends AbstractController
{
    /**
     * @Route("/index", name="backend_destination_index", methods={"GET"})
     */
    public function index(DestinationRepository $destinationRepository): Response
    {
        return $this->render('backend/destination/index.html.twig', [
            'destinations' => $destinationRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="backend_destination_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $destination = new Destination();
        $form = $this->createForm(DestinationType::class, $destination);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $dynamicPage = new DynamicPage();
            $dynamicPage->setPageName($destination->getMachineName());
            $destination->setDynamicPage($dynamicPage);

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($destination);
            $entityManager->persist($dynamicPage);

            $entityManager->flush();

            if($form->get('saveAndEdit')->isClicked())
                return $this->redirectToRoute('destination',[
                    'id'=>$destination->getId(),
                    'name'=>$destination->getMachineName()
                    ]);

            return $this->redirectToRoute('backend_destination_index');
        }

        return $this->render('backend/destination/new.html.twig', [
            'destination' => $destination,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_destination_show", methods={"GET"})
     */
    public function show(Destination $destination): Response
    {
        return $this->render('backend/destination/show.html.twig', [
            'destination' => $destination,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="backend_destination_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Destination $destination, DynamicPageManager $pm): Response
    {
        $form = $this->createForm(DestinationType::class, $destination);

        try
        {
            foreach ($destination->getDynamicPage()->getPageContent() as $key => $element)
            {
                if(isset($element['txt']))
                    $form->add($key, null, ['label'=>'Content of '.$key, 'required' => false]);
                if(isset($element['html']) and !isset($element['src']))
                    $form->add($key, CKEditorType::class, ['label'=>'Content of '.$key, 'required' => false]);
            }
        }
        catch (EntityNotFoundException $exception)
        {
            $destination->setDynamicPage($pm->findByOrCreateIfDoesNotExist(['pageName'=> $destination->getMachineName()]));
            $this->getDoctrine()->getManager()->persist($destination);
            $this->getDoctrine()->getManager()->flush();
            $this->addFlash('notice', 'The page content was not found and was created a new one');
        }

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();


            if($form->get('saveAndEdit')->isClicked())
                return $this->redirectToRoute('destination',[
                    'id'=>$destination->getId(),
                    'name'=>$destination->getMachineName()
                ]);


            return $this->redirectToRoute('backend_destination_index', [
                'id' => $destination->getId(),
            ]);
        }

        return $this->render('backend/destination/edit.html.twig', [
            'destination' => $destination,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="backend_destination_delete", methods={"DELETE"}))
     */
    public function delete(Request $request, Destination $destination): Response
    {
        if ($this->isCsrfTokenValid('delete'.$destination->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            foreach ($destination->getDynamicPage()->getUploadedImages() as $value) {
                $destination->getDynamicPage()->removeUploadedImage($value);
            }
            $entityManager->remove($destination->getDynamicPage());
            $entityManager->remove($destination);
            $entityManager->flush();
        }

        return $this->redirectToRoute('backend_destination_index');
    }
}
