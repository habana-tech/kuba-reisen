<?php

namespace App\Controller;

use App\Repository\DynamicPageRepository;
use Liip\ImagineBundle\Exception\Config\Filter\NotFoundException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Security\Core\Exception\CredentialsExpiredException;



class EndpointController extends AbstractController
{
    /**
     * @Route("/endpoint", name="endpoint", methods={"POST"})
     */
    public function index(Request $request, DynamicPageRepository $pageRepository)
    {

        $this->denyAccessUnlessGranted('ROLE_EDITOR', null, 'Unable to access this page!');

        if (!$request->isXmlHttpRequest() and $request->getContentType() != 'json' || !$request->getContent()) {
            throw new BadRequestHttpException('invalid json body');
        }

        $data = json_decode($request->getContent(), true);
        //header('Access-Control-Allow-Origin: http://localhost:8080');
        //header('Content-Type: application/json');


        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new BadRequestHttpException('invalid json body: ' . json_last_error_msg());
        }


        $request->request->replace(is_array($data) ? $data : array());

        if($grapejs_editor_token = $request->get('_grapejs_editor_token') and $this->isCsrfTokenValid('_grapejs_editor_token', $grapejs_editor_token))
        {
            $page_id = $request->get('_page_id');

            $entityManager = $this->getDoctrine()->getManager();
            if($dymanicPage = $pageRepository->find($page_id))
            {
                $txt = $request->get('grapes_page_content-components');
                $tree = json_decode($txt);

                $arrayiter = new \RecursiveArrayIterator($tree);
                $iteriter = new \RecursiveIteratorIterator($arrayiter);


                foreach ($iteriter as $key => $value) {
                    $d = $iteriter->getDepth();
                    if($key == 'type' and $value == 'text')
                        dump($iteriter);
                    //echo "depth=$d k=$key v=$value\n";
                }

                return new Response("====");
                //return $this->json($txt);
            }
            else //no existe esa pagina dinamica
                throw new NotFoundHttpException();
        }

        throw new BadRequestHttpException('invalid token. Try again!');
            dump($request);
        exit();



       /* return $this->render('endpoint/index.html.twig', [
            'controller_name' => 'EndpointController',
        ]);
       */

    }
}
