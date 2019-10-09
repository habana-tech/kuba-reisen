<?php

namespace App\Controller;

use App\DataConverter\GrapesjsHtmlConverter;
use App\Entity\UploadedImage;
use App\Repository\UploadedImageRepository;
use App\PageManager\DynamicPageManager;
use App\Repository\ActivityRepository;
use App\Repository\DynamicPageRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\UploadException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use App\DataConverter\RequestJsonDataConverter;
use App\Entity\DynamicPage;
use Symfony\Component\HttpFoundation\FileBag;
use Symfony\Component\HttpFoundation\File\Exception\FileNotFoundException;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;


class EndpointController extends AbstractController
{
    /**
     * @Route("/endpoint", name="endpoint")
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
                //dump($grapePage->getExternalPagesContent());
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
    public function debug()
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Unable to access this page!');

        return $this->json($page->getPageContent());
    }


    /**
     * @Route("/endpoint/list/images", name="endpoint_list_images", methods={"GET"})
     */
    public function ImageList(UploadedImageRepository $repository, ContainerInterface $container = null)
    {
        $this->denyAccessUnlessGranted('ROLE_ADMIN', null, 'Unable to access this page!');

        $imagineCacheManager = $container->get('liip_imagine.cache.manager');


        $images = $repository->findLastImages(15);
        $paths = [];

        foreach ($images as $image) {
            $resolvedPath = $imagineCacheManager->getBrowserPath($image->getStaticImagePath(), 'min_width_600');
            $paths[] = ['src' => $resolvedPath, 'type'=> 'image'];
        }
        return $this->json($paths);
    }

    /**
     * @Route("/endpoint/upload/assets", name="endpoint_upload_assets", methods={"POST"})
     */
    public function fileUpload(Request $request, DynamicPageManager $pm, LoggerInterface $logger, ContainerInterface $container = null)
    {
        $pageId = $request->get('_page_id');
        $logger->info('init upload image from grape for synamic page'.$pageId.'!');
        $this->denyAccessUnlessGranted('ROLE_EDITOR', null, 'Unable to access this page!');

        $token = $request->get('_grapejs_editor_token');

        if(!$token or !$this->isCsrfTokenValid('_grapejs_editor_token', $token))
            throw new BadRequestHttpException('invalid token. Try again!');

        $em = $this->getDoctrine()->getManager();


        $images = [];
        if($page = $pm->find($pageId))
        {

            $logger->info('dynamic page found!');

            $files = $request->files->get('files');
            if($files)
            {
                $logger->info('files found');

                foreach ($files as $file) {


                    $image = new UploadedImage();

                  try{
                      $image->setImageFile($file);
                      $em->persist($image);
                      $page->addUploadedImage($image);
                      $images[] = $image;
                      $em->persist($page);
                  }
                  catch (FileNotFoundException  $e)
                  {
                        return $this->json(['error'=>'Error uploading file, try againg or use other file'], 400);

                  }
                }
            }

            $em->flush();
        }
        $data = [];


        $imagineCacheManager = $container->get('liip_imagine.cache.manager');


        foreach ($images as $image)
        {
            $data[] = [
                'src' => $imagineCacheManager->getBrowserPath($image->getStaticImagePath(), 'min_width_600'),
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
     * @Route("/ckeditor_imageupload/")
     */
    public function ckeditor_imageupload(Request $request)

    {




            $file = $request->files->get('upload');

            if($file)
            {
                $em = $this->getDoctrine()->getManager();

                $image = new UploadedImage();

                  try{
                      $image->setImageFile($file);
                      $em->persist($image);
                  }
                  catch (FileNotFoundException  $e)
                  {
                        return $this->json(['error'=>'Error uploading file, try againg or use other file'], 400);

                  }
              

                $em->flush();

        $funcNum = 'default';
        $url = $image->getImagePath();
            return new Response(
                "<script>window.parent.CKEDITOR.tools.callFunction(".$funcNum.", \"".$url."\")</script>"
                );
            }
exit();




        // Parameters
        $type = $_GET['type'];
        $CKEditor = $_GET['CKEditor'];

        // Image upload
        if($type == 'image'){

            $allowed_extension = array(
              "png","jpg","jpeg"
            );

            // Get image file extension
            $file_extension = pathinfo($_FILES["upload"]["name"], PATHINFO_EXTENSION);

            if(in_array(strtolower($file_extension),$allowed_extension)){
               
               if(move_uploaded_file($_FILES['upload']['tmp_name'], "uploads/".$_FILES['upload']['name'])){
                  // File path
                  if(isset($_SERVER['HTTPS'])){
                     $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
                  }
                  else{
                     $protocol = 'http';
                  }
                  $url = $protocol."://".$_SERVER['SERVER_NAME'] ."/ckeditor_fileupload/uploads/".$_FILES['upload']['name'];
               
                  echo '<script>window.parent.CKEDITOR.tools.callFunction('.$funcNum.', "'.$url.'", "'.$message.'")</script>';
               }

            }

            exit;
        }

        // File upload
        if($type == 'file'){

            $allowed_extension = array(
               "doc","pdf","docx"
            );

            // Get image file extension
            $file_extension = pathinfo($_FILES["upload"]["name"], PATHINFO_EXTENSION);

            if(in_array(strtolower($file_extension),$allowed_extension)){

               if(move_uploaded_file($_FILES['upload']['tmp_name'], "uploads/".$_FILES['upload']['name'])){
                  // File path
                  if(isset($_SERVER['HTTPS'])){
                      $protocol = ($_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
                  }
                  else{
                      $protocol = 'http';
                  }

                  $url = $protocol."://".$_SERVER['SERVER_NAME'] ."/ckeditor_fileupload/uploads/".$_FILES['upload']['name'];
                 
                  echo '<script>window.parent.CKEDITOR.tools.callFunction('.$funcNum.', "'.$url.'", "'.$message.'")</script>';
               }

            }

            exit;
        }
    }
}
