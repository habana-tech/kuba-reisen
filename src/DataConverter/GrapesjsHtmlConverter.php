<?php


namespace App\DataConverter;

use Symfony\Component\DomCrawler\Crawler;

class GrapesjsHtmlConverter
{
    private $html;
    private $pageElements = [];
    private $externalPagesContent = [];
    private $crawler;

    /**
     * GrapesjsHtmlConverter constructor.
     * @param $html
     * @param array|null $filter EJ: ['tagName'=> '/^img/^a/^div/']
     */
    public function __construct($html)
    {

        $this->html = $html;

        $this->crawler = new Crawler($html);

        //todo: agregar atributos data-imagesrc, src con base 64 de 5x5px
        foreach ($this->crawler->filterXPath('//*[@data-grape_id]') as $domElement) {

            $grape_id = $domElement->getAttribute('data-grape_id');
            $grape_format = $domElement->getAttribute('data-grape_format');
            $grape_section = $domElement->getAttribute('data-grape_section');

            $html = '';
            foreach ($domElement->childNodes as $domChildElement) {
                $html .= $domChildElement->ownerDocument->saveHTML($domChildElement);
            }

            if($grape_section)
            {
                if($grape_format)
                {
                    $this->externalPagesContent[$grape_section][$grape_id]['txt'] = $html;
                }
                else $this->externalPagesContent[$grape_section][$grape_id]['html'] = $html;
            }
            else
            {
                if($grape_format)
                {
                    $this->pageElements[$grape_id]['txt'] = $html;
                }
                else $this->pageElements[$grape_id]['html'] = $html;
            }


        }
    }

    public function getPageElements(): array
    {
        return $this->pageElements;
    }

    /**
     * @return array
     */
    public function getExternalPagesContent(): array
    {
        return $this->externalPagesContent;
    }


}