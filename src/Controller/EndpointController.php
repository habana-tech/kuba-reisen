<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;


class EndpointController extends AbstractController
{
    /**
     * @Route("/endpoint", name="endpoint")
     */
    public function index(Request $request)
    {


        if ($request->getContentType() != 'json' || !$request->getContent()) {
            throw new BadRequestHttpException('invalid json body');
        }

        $data = json_decode($request->getContent(), true);
        //header('Access-Control-Allow-Origin: http://localhost:8080');
        //header('Content-Type: application/json');


        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new BadRequestHttpException('invalid json body: ' . json_last_error_msg());
        }

        $request->request->replace(is_array($data) ? $data : array());

        dump($request);
        exit();

        $txt = $request->get('grapes_page_content-components');


        return $this->json($txt);

       /* return $this->render('endpoint/index.html.twig', [
            'controller_name' => 'EndpointController',
        ]);
       */

    }
}
