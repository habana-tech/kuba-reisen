<?php


namespace App\DataConverter;


use App\PageManager\DynamicPageManager;

class GrapesjsDomTreeConverter
{
    private $grapesjsTree;
    private $filters = [
        'tagName'=> '/b|i|a|div|p|button|label/',
        'type'=> '/text|textnode/',
        'attributes'=>[0 =>'data-grapeid', 1 => '/grape[0-9]+/']];
    private $workElementList = [];
    private $externalPagesContent = [];

    /**
     * GrapesjsDomTreeConverter constructor.
     * @param $grapesjsTree
     * @param array|null $filter EJ: ['tagName'=> '/^img/^a/^div/']
     */
    public function __construct($grapesjsTree, array $filters = null)
    {
        $this->grapesjsTree = json_decode($grapesjsTree, true);
        if($filters)
            $this->filters = $filters;

        $this->processTree();
    }

    private function passFilter(array $element){
        //return true;
        foreach ($this->filters as $key => $pattern)
        {
            if(is_array($pattern)) //like attributes
            {
                if(isset($element[$key][$pattern[0]]))
                    if(preg_match($pattern[1], $element[$key][$pattern[0]]))
                        return true;
            }
            else
                if(isset($element[$key]))
                    if(preg_match($pattern, $element[$key]))
                        return true;
        }

        return false;
    }

    private function collectDataFromGrapeElement($element, $grapeParent){
        $data = [];

        if(isset($element['attributes']['data-grapepagename']))
            $data['grapepagename']=$element['attributes']['data-grapepagename'];

        if(isset($element['attributes']['data-grapeid']))
            $data['grapesid']=$element['attributes']['data-grapeid'];
        elseif ($grapeParent)
            $data['grapeParent'] = $grapeParent;


        if(isset($element['type']) and $element['type'])
            $data['type']=$element['type'];
        if(isset($element['content']) and $element['content'])
            $data['content']=$element['content'];
        if(isset($element['attributes']) and count($element['attributes']))
            $data['attributes']=$element['attributes'];


        if(count($data))
        {
            if(isset($element['tagName']) and $element['tagName'])
                $data['tagName']=$element['tagName'];

            return $data;
        }


        return false;


    }

    public function getFlatList()
    {
        return $this->workElementList;
    }

    private function processTree()
    {

        $this->processNode($this->grapesjsTree);
        return;
    }


    private function processNode(array $nodes, $grapeParent = null)
    {
        foreach ($nodes as $element){
            if(is_array($element))
            {

                if($this->passFilter($element))
                {
                    if($result = $this->collectDataFromGrapeElement($element, $grapeParent))
                    {
                        if(isset($result['grapesid']))
                            $this->workElementList[$result['grapesid']] = $result;
                        elseif (isset($result['grapeParent'])){
                            $this->workElementList[$result['grapeParent']]['components'][] = $result;
                        }
                        else
                            $this->workElementList[] = $result;


                    }

                }

                isset($result['grapesid']) ? $grapeParent = $result['grapesid'] : null;

                if(isset($element['components']) and count($element['components']))
                    $this->processNode($element['components'], $grapeParent);
            }
        }
    }

    /**
     * @return array
     */
    public function getExternalPagesContent(): array
    {
        if(!$this->workElementList)
            $this->processTree();
        foreach ($this->workElementList as $element)
        {
            //si contiene cont externo
            if(isset($element['grapepagename']) and isset($element['grapesid']))
                //se agrega en una lista, bajo la llave 'pagename'
                $this->externalPagesContent[$element['grapepagename']][$element['grapesid']] =  $element;

        }
        return $this->externalPagesContent;
    }


}