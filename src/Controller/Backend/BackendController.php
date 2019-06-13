<?php

namespace App\Controller\Backend;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\DynamicPage;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use FOS\CKEditorBundle\Form\Type\CKEditorType;
use Symfony\Component\HttpFoundation\Request;

class BackendController extends AbstractController
{
    /**
     * @Route("/admin/index", name="backend")
     */
    public function index()
    {
        return $this->render('backend/index.html.twig', [
            'controller_name' => 'BackendController',
        ]);
    }

    /**
     * @Route("/admin/editpage/{pageName}", name="backend_page_edit")
     */
    public function editpage(Request $request, DynamicPage $dynamicPage)
    {
    	if(!$dynamicPage)
	    	throw new NotFoundHttpException();
        

        $form = $this->createFormBuilder($dynamicPage);

        foreach ($dynamicPage->getPageContent() as $key => $element)
        {
            if(isset($element['txt']))
                $form->add($key, null, ['label'=>'Content of '.str_replace('_',' ', $key), 'required' => false]);
            elseif(isset($element['html']) and !isset($element['src']))
                $form->add($key, CKEditorType::class, ['label'=>'Content of '.str_replace('_',' ', $key), 'required' => false]);
        }

        $form = $form->getForm();
        
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            //$this->getDoctrine()->getManager()->persist($activity->getDynamicPage());
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('backend');
        }

        return $this->render('backend/editpages/edit.html.twig', [
            'page' => $dynamicPage,
            'form' => $form->createView(),
        ]);
    }
}
