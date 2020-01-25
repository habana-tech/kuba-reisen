<?php


namespace App\PageManager\TemplateSelector;

class PageTemplateSelector
{

    private $template;

    public static function getTemplates(): array
    {
        return [
            (new PageTemplate('null.html.twig', "-Undefined-")),
            (new PageTemplate('about_us.html.twig', "About Us page")),
            (new PageTemplate('activities.html.twig',"Activities list page")),
            (new PageTemplate('bucket_list.html.twig',"Bucket List page")),
            (new PageTemplate('contact.html.twig',"Contact page")),
            (new PageTemplate('excursions.html.twig',"Excursions page")),
            (new PageTemplate('exploring.html.twig',"Exploring page")),
            (new PageTemplate('faq.html.twig',"FAQs page")),
            (new PageTemplate('index.html.twig',"HOME page")),
            (new PageTemplate('tours.html.twig',"TOURS page")),
            (new PageTemplate('travel_info.html.twig',"Travel Info page")),
        ];
    }

    public static function getRegionTemplates(): array
    {
        return [
            (new PageTemplate('components/index/_overview.html.twig',"HOME > Overview Section")),
            (new PageTemplate('components/index/_who_we_are.html.twig',"HOME > Who we are Section")),
            (new PageTemplate('components/index/_why_with_us.html.twig',"HOME > Why with us Section")),
        ];
    }

    public static function getTemplatesChoiceList(): array
    {
        $templateList = [];
        foreach (self::getTemplates() as $template)
        {
            $templateList[$template->getName()] = $template->getPath();
        }
        return $templateList;
    }

    public static function getRegionTemplatesChoiceList(): array
    {
        $templateList = [];
        foreach (self::getRegionTemplates() as $template)
        {
            $templateList[$template->getName()] = $template->getPath();
        }
        dump($templateList);
        return $templateList;
    }


    /**
     * @return mixed
     */
    public function getTemplate()
    {
        return $this->template;
    }

    /**
     * @param PageTemplate $template
     * @return PageTemplateSelector
     */
    public function setTemplate(PageTemplate $template): PageTemplateSelector
    {
        $this->template = $template;
        return $this;
    }




}