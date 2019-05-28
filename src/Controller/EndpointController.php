<?php

namespace App\Controller;

use App\DataConverter\GrapesjsHtmlConverter;
use App\Entity\UploadedImage;
use App\PageManager\DynamicPageManager;
use App\Repository\ActivityRepository;
use App\Repository\DynamicPageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use App\DataConverter\RequestJsonDataConverter;
use App\Entity\DynamicPage;
use Symfony\Component\HttpFoundation\FileBag;



class EndpointController extends AbstractController
{
    /**
     * @Route("/endpoint/{_locale}", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"})
     * @Route("/endpoint", defaults={"_locale": "de"},
     *     requirements={"_locale": "en|es|de"}, name="endpoint")
     */
    public function index(Request $request, DynamicPageRepository $pageRepository, DynamicPageManager $pm)
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
            $grapePage = new GrapesjsHtmlConverter($jsonData['grapes_page_content-html']);

            if($grapePage->getPageElements())
                $dymanicPage->setPageContent($grapePage->getPageElements());
//                dump($dymanicPage->setPageContent($grapePage->getPageElements()));

                $entityManager->persist($dymanicPage);

            if($grapePage->getExternalPagesContent())
                dump($grapePage->getExternalPagesContent());
                foreach ($grapePage->getExternalPagesContent() as $pagename => $elements)
                {
                    if($elements and $page = $pm->findOneBy(['pageName'=>$pagename, 'language'=>'de']))
                    {
                        $page->setPageContent($elements);
                        $entityManager->persist($page);
                    }
                }



            $entityManager->flush();

            return $this->json(['status'=>'OK']);
        }
        else //no existe esa pagina dinamica
            return $this->json(['status'=>'Error'],404);

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


        $images = [];
        if($page = $pm->find($request->get('_page_id')))
        {

            $files = $request->files->get('files');
            //dump($files);
            if($files)
            {
                //dump($files);
                foreach ($files as $file) {


                    $image = new UploadedImage();

//                    if($file->getClientMimeType("application/octet-stream"))
//                    {
//                        $output_file = tmpfile();
//                        $ifp = fopen( $output_file, 'wb' );
//                        $data = explode( ',', $request->get('image') );
//                        fwrite( $ifp, base64_decode( $data[ 1 ] ) );
//                        fclose( $ifp );
//                    }

                    $image->setImageFile($file);
                    //dump($image);
                    $em->persist($image);
                    $page->addUploadedImage($image);
                    $images[] = $image;
                    $em->persist($page);
                }
            }

            $em->flush();
        }
        $data = [];

        foreach ($images as $image)
        {
            $data[] = [
                'src' => $image->getStaticImagePath(),
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
     * @Route("/endpoint/search/activities", name="endpoint_search_activities")
     */
    public function searchActivities(Request $request, ActivityRepository $activityRepository   )
    {


        return $this->json([]);
    }


}
