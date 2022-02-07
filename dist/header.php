<?php

function isActive($pageName) {
    global $page;
    if ($page === $pageName) {
        echo 'class = "active"';
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="favicon.png">
    <title><?php echo $page; ?> | Marius Toresen Bjercke</title>
</head>

<body>

<header>
    <div class="logo"></div>
        <nav>
            <div id="home" <?php isActive('Forside'); ?>>HJEM<i class="fas fa-lg fa-home"></i></div>
            <div id="about" <?php isActive('Om meg'); ?>>OM MEG<i class="fas fa-lg fa-address-card"></i></div>
            <div id="projects" <?php isActive('Prosjekt'); ?>>
                <span>PROSJEKTER<i class="fas fa-lg fa-gamepad"></i></span>
                <div id="projects-submenu">
                    <div id="mariojs">Mario JS</div>
                    <div id="tictactoe">Tic Tac Toe</div>
                    <div id="calculator">Kalkulator</div>
                    <div id="puzzle">Puslespill</div>
                </div>
            </div>
            <div id="contact" <?php isActive('Kontakt'); ?>>KONTAKT<i class="fas fa-lg fa-envelope"></i></div>
        </nav>
</header>