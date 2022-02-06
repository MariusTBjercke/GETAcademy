<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="favicon.png">
    <title>Forside | Marius Toresen Bjercke</title>
</head>

<body>

    <?php
    include 'header.php';
    ?>

    <main>
        <article class="about-front">
            <div class="container">
                <div class="row">
                    <div class="col about-text">
                        <h2>Marius Toresen Bjercke</h2>
                        <h5>IT-student hos <span>GET Academy</span> der jeg for øyeblikket lærer meg C#, ASP.net, SQL,
                            HTML,
                            CSS, JavaScript, Vue.js og Node.js. Har noe tidligere erfaring med PHP. Ved siden av
                            programmeringsspråk så lærer vi om diverse nøkkelkompetanser der <span>growth mindset</span>
                            står i sterk fokus.</h5>
                        <p>
                            <a href="https://github.com/MariusTBjercke" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                            <a href="#"><i class="fas fa-project-diagram"></i> Prosjekter</a>
                        </p>
                    </div>
                </div>
            </div>
        </article>

        <article>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Super Mario</h5>
                                <h6 class="card-subtitle mb-2 text-muted">JavaScript (Canvas)</h6>
                                <p class="card-text">Et veldig enkelt platformer-spill laget med vanilla JavaScript.</p>
                                <a href="#" class="card-link">Besøk</a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Tic Tac Toe</h5>
                                <h6 class="card-subtitle mb-2 text-muted">JavaScript</h6>
                                <p class="card-text">Spill det tradisjonelle spillet "tre på rad".</p>
                                <a href="#" class="card-link">Besøk</a>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Puslespill</h5>
                                <h6 class="card-subtitle mb-2 text-muted">JavaScript</h6>
                                <p class="card-text">Puslespill der jeg har testet ut drag/drop events i JavaScript.</p>
                                <a href="#" class="card-link">Besøk</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </main>

    <?php
    include 'footer.php';
    ?>

    <script src="bundle.js"></script>
</body>

</html>