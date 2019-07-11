<?php

namespace App\Controller\Backend;

use App\PageManager\DynamicPageManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\DynamicPageRevisionRepository;
use App\Entity\DynamicPageRevision;
use App\Entity\DynamicPage;

class PageRevisionController extends AbstractController
{
    /**
     * @Route("/admin/revisions", name="page_revisions")
     */
    public function index(DynamicPageRevisionRepository $repository)
    {

        $revisions = $repository->findAll();
        dump($revisions);
        return null;
    }

    /**
     * @Route("/admin/revisions/page/{id}", name="page_revisions_by_page")
     */
    public function list(DynamicPage $dynamicPage, DynamicPageRevisionRepository $repository)
    {

        $revisions = $repository->findBy(['dynamicPage' => $dynamicPage], ['modificationDate'=>'DESC'], 6);

        return $this->render('backend/page_revision/list.html.twig', [
            'revisions' => $revisions,
        ]);

    }

    /**
     * @Route("/admin/revisions/page/aply/{id}", name="aply_page_revisions_by_page")
     */
    public function aply(DynamicPageRevision $revision, Request $request)
    {
        if($revision)
        {
            $revision->getDynamicPage()->setPageContent($revision->getPageContent());
            $em = $this->getDoctrine()->getManager();
            $em->persist($revision->getDynamicPage());
            $em->flush();
        }

        return $this->redirect($_SERVER['HTTP_REFERER'] ? $_SERVER['HTTP_REFERER'] : $this->generateUrl('frontend'));
    }
}
