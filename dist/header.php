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
                <span>PROSJEKTER<i class="fas fa-lg fa-project-diagram"></i></span>
                <div id="projects-submenu">
                    <div id="javascript">JavaScript</div>
                    <div id="csharp">C#</div>
                    <div id="java">Java</div>
                    <div id="vuejs">Vue.js</div>
                    <div id="php">PHP</div>
                </div>
            </div>
            <div id="contact" <?php isActive('Kontakt'); ?>>KONTAKT<i class="fas fa-lg fa-envelope"></i></div>
        </nav>
</header>