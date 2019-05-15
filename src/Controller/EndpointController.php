<?php

namespace App\Controller;

use App\Repository\DynamicPageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use App\DataConverter\RequestJsonDataConverter;
use App\DataConverter\JsonTreeDataIterator;
use App\DataConverter\GrapesjsDomTreeConverter;
use App\Entity\DynamicPage;



class EndpointController extends AbstractController
{
    /**
     * @Route("/endpoint", name="endpoint", methods={"POST"})
     */
    public function index(Request $request, DynamicPageRepository $pageRepository)
    {

        $this->denyAccessUnlessGranted('ROLE_EDITOR', null, 'Unable to access this page!');

        $requestJson = new RequestJsonDataConverter($request);
        $jsonData = $requestJson->getData();

        if(!isset($jsonData['_grapejs_editor_token']) or !$this->isCsrfTokenValid('_grapejs_editor_token', $jsonData['_grapejs_editor_token']))
            throw new BadRequestHttpException('invalid token. Try again!');

        $page_id = $jsonData['_page_id'];

        $entityManager = $this->getDoctrine()->getManager();
        if($dymanicPage = $pageRepository->find($page_id))
        {
            $iterator = new GrapesjsDomTreeConverter($jsonData['grapes_page_content-components']);

            $dymanicPage->setPageContent($iterator->getFlatList());



            $entityManager->persist($dymanicPage);
            $entityManager->flush();
            //return $this->json($txt);
        }
        else //no existe esa pagina dinamica
            throw new NotFoundHttpException();

        dump($dymanicPage->getElement("grape03"));

        exit();

       /* return $this->render('endpoint/index.html.twig', [
            'controller_name' => 'EndpointController',
        ]);
       */

    }

    /**
     * @Route("/endpoint/debug/{id}", name="endpoint_debug")
     */
    public function debug(DynamicPage $page)
    {
        return $this->json($page->getPageContent());
    }
}
