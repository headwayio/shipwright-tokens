<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ShipwrightController extends AbstractController
{
    #[Route('/', name: 'app_shipwright')]
    public function index(): Response
    {
        return $this->render('shipwright/index.html.twig', [
            'controller_name' => 'ShipwrightController',
        ]);
    }
}
