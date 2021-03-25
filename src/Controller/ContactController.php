<?php

namespace App\Controller;

use App\Repository\InterestRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\DynamicPageRepository;
use App\Repository\ActivityRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use App\Entity\ContactPlaning;
use App\Form\ContactPlaningType;
use App\Entity\Activity;

class ContactController extends AbstractController
{

    /**
     *
     * @Route("/kontaktieren/{travel}", defaults={"travel": null}, name="contact")
     * @Route("/kontaktieren/activity/{activity}", defaults={"travel": null}, name="contact_for_activity")
     * @param Request $request
     * @param ActivityRepository $activityRepository
     * @param DynamicPageRepository $pageRepo
     * @param InterestRepository $interestRepository
     * @param $travel
     * @param Activity|null $activity
     * @return Response
     */
    public function contact(
        Request $request,
        ActivityRepository $activityRepository,
        DynamicPageRepository $pageRepo,
        InterestRepository $interestRepository,
        $travel = null,
        Activity $activity = null
    ): Response {
        $page = $pageRepo->findOneBy([
            'machineName' => 'contact'
        ]);

        if (!$page) {
            throw new NotFoundHttpException();
        }

        $fromTravel = $travel === 'raise';

        $contact = new ContactPlaning();

        if ($activity === null) {
            $formActionRoute = $this->generateUrl('processContact');
        } else {
            $formActionRoute = $this->generateUrl('processContact_for_activity', ['activity' => $activity->getId()]);
        }

        $form = $this->createForm(
            ContactPlaningType::class,
            $contact,
            [
                'action' => $formActionRoute
            ]
        );

        //obtaining activities from cookies
        $activities = $this->getActivitiesFromCookie($activityRepository, $request);

        $interests = $interestRepository->findAllActive();

        return $this->render('frontend/contact.html.twig', [
            'contact' => $contact,
            'activities' => $activities,
            'interests' => $interests,
            'form' => $form->createView(),
            'dynamic_page_id' => $page->getId(),
            'page' => $page,
            'from_travel' => $fromTravel,
            'selected_activity' => $activity]);
    }

    /**
     * @Route("/processContact", name="processContact", methods={"POST"})
     * @Route("/processContact/activity/{activity}", name="processContact_for_activity", methods={"POST"})
     * @param Request $request
     * @param MailerInterface $mailer
     * @param ActivityRepository $repository
     * @param UserRepository $userRepository
     * @param Activity|null $activity
     * @return JsonResponse
     */
    public function processContact(
        Request $request,
        MailerInterface $mailer,
        ActivityRepository $repository,
        UserRepository $userRepository,
        Activity $activity = null
    ): JsonResponse {
        $contact = new ContactPlaning();
        $form = $this->createForm(ContactPlaningType::class, $contact);
        $form->handleRequest($request);

        $allInterests = '';

        if ($activity === null) {
            //if there are interest checked in the form...
            if ($interest = $request->get('interest')) {
                $allInterests .= "\nInterests: \n";
                foreach ($interest as $index => $item) {
                    $allInterests .= $item . ', ';
                }
            }

            //if there are products selected in the cookie...
            if ($ids = $request->cookies->get('products_cart')) {
                $names = $repository->findNamesCollection(explode(',', $ids));

                $allInterests .= "\n\nActivities: \n";
                foreach ($names as $index => $item) {
                    $allInterests .= $item['name'] . ', ';
                }
            }
        } else { //If there is a 'selected activity'
            $allInterests .= "\n\nSelected Activity: \n" . $activity->getName();
        }

        $contact->setInterests($allInterests);
        $contact->setLocale($request->getDefaultLocale());

        if ($form->isSubmitted() && $form->isValid()) {

            //spam chek
            //The custom input for this field, is filled using js lib for tracks
            //Most of spammers can't fill this field, and fail to store the comment
            if ($contact->getTravelBudget() === null) {
                throw new BadRequestHttpException();
            }
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($contact);
            $entityManager->flush();

            $this->sendContactEmailNotification($contact, $mailer, $userRepository);
            return $this->json(['status' => 'success', 'id' => $contact->getRequestId()]);
        }


        $errors = $form->getErrors(true, true);
        $errorsMessages = '';
        foreach ($errors as $error) {
            $message = array_values($error->getMessageParameters());
            if (isset($message[0])) {
                $errorsMessages .= sprintf("%s (%s). ", $error->getMessage(), $message[0]);
            } else {
                $errorsMessages .= $error->getMessage() . " ";
            }
        }
        return $this->json(['status' => 'error', 'errors' => $errorsMessages], 400);
    }

    private function sendContactEmailNotification(
        ContactPlaning $contact,
        MailerInterface $mailer,
        UserRepository $userRepository
    ): void {

        //send admin email
        $message = (new TemplatedEmail())
            ->subject('Kuba-reisen kontaktieren - ' . $contact->getRequestId())
            ->htmlTemplate('emails/contactAdminNotification.html.twig')
            ->textTemplate('emails/contactAdminNotification.txt.twig')
            ->context(['contact' => $contact]);

        foreach ($userRepository->findAllActive() as $user) {
            if ($user->isAtEmailList()) {
                $message->to($user->getEmail());
                $mailer->send($message);
            }
        }


        //send message to client
        $clientMessage = (new TemplatedEmail())
            ->subject('Kuba-reisen kontaktieren - ' . $contact->getRequestId())
            ->htmlTemplate('emails/contactClientNotification.html.twig')
            ->textTemplate('emails/contactClientNotification.txt.twig')
            ->context(['contact' => $contact])
            ->to($contact->getClientEmail());

        $mailer->send($clientMessage);
    }

    /**
     * @param ActivityRepository $activityRepository
     * @param Request $request
     * @return array|null
     */
    public function getActivitiesFromCookie(ActivityRepository $activityRepository, Request $request): ?array
    {
        if (isset($request->cookies->all()['products_cart'])) {
            $ids = $request->cookies->all()['products_cart'];

            if ($ids !== '') {
                $ids = explode(',', $ids);

                return $activityRepository->findByIds(array_unique($ids));
            }
        }
        return null;
    }
}
