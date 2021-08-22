$(function() {
    
    // Finn elementet der spillets status skal stå
    var statusDisplay = document.getElementById("game-status");

    // Sjekk om spillet er aktivt for funksjoner nedenfor
    var gameActive = true;

    // Start med spiller "X", viktig at spilleren også blir definert her
    var currentPlayer = "X";

    // Start spillet med tomme felt
    var gameState = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];

    // Variabler for beskjeder som dukker opp underveis mens man spiller
    var winningMessage = () => "Spiller " + currentPlayer + " har vunnet!";
    var drawMessage = () => "Spillet endte likt!";
    var currentPlayerTurn = () => "Det er " + currentPlayer + " sin tur.";

    // Sett status til hvilken spillers tur det er
    statusDisplay.innerHTML = currentPlayerTurn();

    // Funksjon for celleklikk
    function handleCellPlayed(clickedCell, clickedCellIndex) {

        gameState[clickedCellIndex] = currentPlayer;
        clickedCell.innerHTML = currentPlayer;

    }

    // Funksjon for å bytte spiller etter hver runde
    function handlePlayerChange() {

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusDisplay.innerHTML = currentPlayerTurn();

    }

    // Her er det definert hvilke rad-kombinasjoner man kan ha for å vinne
    var winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    function handleResultValidation() {

        var roundWon = false;

        for (var i = 0; i <= 7; i++) {
            var winCondition = winningConditions[i];
            var a = gameState[winCondition[0]];
            var b = gameState[winCondition[1]];
            var c = gameState[winCondition[2]];
            if (a === "" || b === "" || c === "") {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            statusDisplay.innerHTML = winningMessage();
            gameActive = false;
            return;
        }

        var roundDraw = !gameState.includes("");
        if (roundDraw) {
            statusDisplay.innerHTML = drawMessage();
            gameActive = false;
            return;
        }

        handlePlayerChange();

    }

    // Funksjon for hva som skjer når man trykker på de forskjellige cellene
    function handleCellClick(clickedCellEvent) {

        var clickedCell = clickedCellEvent.target;

        // Her henter vi informasjon fra f.eks <div data-cell-index="0"></div> og setter det som en variabel
        var clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"));

        if (gameState[clickedCellIndex] !== "" || !gameActive) {
            return;
        }

        handleCellPlayed(clickedCell, clickedCellIndex);
        handleResultValidation();

    }

    // Funksjon som gjør at man kan restarte spillet ved å trykke på restart-knappen
    function handleRestartGame() {

        // Sett spillets status tilbake til aktiv
        gameActive = true;

        // Sett spiller til X ved restart
        currentPlayer = "X";

        // Her resetter vi alle boksene
        gameState = [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ];

        statusDisplay.innerHTML = currentPlayerTurn();
        document.querySelectorAll(".flexbox-container div").forEach(cell => cell.innerHTML = "");

    }

    // Loop gjennom alle celler og legg til et klikk-event slik at vi kan hente informasjon fra cellen.
    document.querySelectorAll(".flexbox-container div").forEach(cell => cell.addEventListener("click", handleCellClick));
 
    // Klikk-event (type onclick) for å restarte spillet. Kjør funksjonen handleRestartGame når man trykker på restart-knappen.
    document.querySelector(".game-restart").addEventListener("click", handleRestartGame);

});