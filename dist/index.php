<?php
$page = 'Forside';
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
                        <div class="about-btns">
                            <a href="https://github.com/MariusTBjercke" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                            <a href="#"><i class="fas fa-project-diagram"></i> Prosjekter</a>
                        </div>
                </div>
            </div>
        </div>
    </article>

    <article>
        <div class="container">
            <div class="col">
                <h4>Denne nettsiden er fremdeles under utvikling...</h4>
            </div>
        </div>
    </article>

    <article class="cards">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h4>Noen prosjekter jeg har jobbet med:</h4>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="card">
                        <img src="img/projects/mariojs/mariojs-card.png" class="card-img-top bottom" alt="Mario JS">
                        <div class="card-body">
                            <h5 class="card-title">Mario JS</h5>
                            <p class="card-text">Et veldig enkelt platformer-spill laget med vanilla JavaScript.</p>
                            <div class="card-btns">
                                <a href="mariojs" target="_blank" class="btn btn-primary"><i class="fas fa-arrow-circle-right"></i> Spill</a>
                                <a href="https://github.com/MariusTBjercke/GETAcademy/tree/main/dist/mariojs" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="img/projects/aktivo/aktivo-card.png" class="card-img-top top" alt="Aktivo">
                        <div class="card-body">
                            <h5 class="card-title">Aktivo</h5>
                            <p class="card-text">Aktivitetsforslags-app laget med JavaScript og Google Firestore-database. Utviklet i et MVC-mønster.</p>
                            <div class="card-btns">
                                <a href="https://mariustbjercke.github.io/team1-aktivo/dist/" target="_blank" class="btn btn-primary"><i class="fas fa-arrow-circle-right"></i> Demo</a>
                                <a href="https://github.com/MariusTBjercke/team1-aktivo" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="img/projects/fjosboka/fjosboka-card.png" class="card-img-top top" alt="Aktivo">
                        <div class="card-body">
                            <h5 class="card-title">Fjøsboka</h5>
                            <p class="card-text">"Facebook" som en konsollapplikasjon, laget med C#. Inneholder brukerpålogging, venner, grupper og mer.</p>
                            <div class="card-btns">
                                <a href="https://github.com/MariusTBjercke/SocialMedia" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="img/projects/blizzlikecms/blizzlikecms-card.png" class="card-img-top top" alt="BlizzlikeCMS">
                        <div class="card-body">
                            <h5 class="card-title">Blizzlike CMS</h5>
                            <p class="card-text">En "CMS" kodet hovedsakelig med PHP, laget for å være enkel å bruke opp mot World of Warcraft privat-servere.</p>
                            <div class="card-btns">
                                <a href="https://github.com/MariusTBjercke/BlizzlikeCMS" target="_blank" class="btn btn-primary"><i class="fas fa-exclamation-triangle"></i> Kommer</a>
                                <a href="https://github.com/MariusTBjercke/BlizzlikeCMS" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="img/projects/knivpistolbombe/kpb-card.png" class="card-img-top center" alt="Kniv, pistol, bombe">
                        <div class="card-body">
                            <h5 class="card-title">Kniv, pistol, bombe</h5>
                            <p class="card-text">En liten twist på "stein, saks, papir" laget med JavaScript.</p>
                            <div class="card-btns">
                                <a href="https://mariustbjercke.github.io/team1-oppgave4" target="_blank" class="btn btn-primary"><i class="fas fa-arrow-circle-right"></i> Spill</a>
                                <a href="https://github.com/MariusTBjercke/team1-oppgave4" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="img/projects/soundboard/soundboard-card.png" class="card-img-top bottom" alt="Soundboard">
                        <div class="card-body">
                            <h5 class="card-title">Soundboard</h5>
                            <p class="card-text">Et "soundboard" laget med JavaScript.</p>
                            <div class="card-btns">
                                <a href="https://mariustbjercke.github.io/team1-oppgave5/" target="_blank" class="btn btn-primary"><i class="fas fa-arrow-circle-right"></i> Demo</a>
                                <a href="https://github.com/MariusTBjercke/team1-oppgave5" target="_blank" class="btn btn-primary"><i class="fab fa-github"></i> GitHub</a>
                            </div>
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
</body>

</html>