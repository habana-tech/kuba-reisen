<?php

namespace App\Controller\Backend;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ServicesController extends AbstractController
{
    /**
     * @Route("/admin/services/", name="services")
     */
    public function index()
    {
        return $this->render('services/index.html.twig', [
            'controller_name' => 'ServicesController',
        ]);
    }
}
