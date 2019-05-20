<?php

namespace App\Controller;

use App\Entity\UploadedImage;
use App\PageManager\DynamicPageManager;
use App\Repository\ActivityRepository;
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
use Symfony\Component\HttpFoundation\FileBag;



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

            return new Response("OK");
        }
        else //no existe esa pagina dinamica
            throw new NotFoundHttpException();

    }

    /**
     * @Route("/endpoint/debug/{id}", name="endpoint_debug")
     */
    public function debug(DynamicPage $page)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Unable to access this page!');

        return $this->json($page->getPageContent());
    }


    /**
     * @Route("/endpoint/upload/assets", name="endpoint_upload_assets", methods={"POST"})
     */
    public function fileUpload(Request $request, DynamicPageManager $pm)
    {
        $this->denyAccessUnlessGranted('ROLE_EDITOR', null, 'Unable to access this page!');

        $token = $request->get('_grapejs_editor_token');

        if(!$token or !$this->isCsrfTokenValid('_grapejs_editor_token', $token))
            throw new BadRequestHttpException('invalid token. Try again!');

        $em = $this->getDoctrine()->getManager();

        if($page = $pm->find($request->get('_page_id')))
        {
            //dump($request->files);
            $files = $request->files->get('files');
            dump($files);
            if($files)
            {
                foreach ($files as $file) {
                    $image = new UploadedImage();
                    $image->setImageFile($file);
                    $em->persist($image);
                    $page->addUploadedImage($image);
                    $em->persist($page);
                }
            }

            $em->flush();
        }
        $data = [];

        foreach ($page->getUploadedImages() as $image)
        {
            $data[] = [
                'src' => $this->getParameter('MEDIA_STATIC_HOST_URL').$image->getImagePath(),
                'type' => 'image',
                'height' => $image->getImage()->getDimensions()[0],
                'width' => $image->getImage()->getDimensions()[1],
            ];
        }
        return $this->json(
            [
                'data' => $data
            ]
        );
    }


    /**
     * @Route("/endpoint/search/activities/", name="endpoint_search_activities")
     */
    public function searchActivities(Request $request, ActivityRepository $activityRepository   )
    {


        return $this->json([]);
    }


}
