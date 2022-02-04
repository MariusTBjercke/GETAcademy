$(function() {

    let selectedPiece;
    let rotationNumber;

    let puzzlePiecesLocations = [
        {
            x: 0,
            y: 0
        },
        {
            x: 0,
            y: 150
        },
        {
            x: 0,
            y: 300
        },
        {
            x: 150,
            y: 0
        },
        {
            x: 150,
            y: 150
        },
        {
            x: 150,
            y: 300
        },
        {
            x: 300,
            y: 0
        },
        {
            x: 300,
            y: 150
        },
        {
            x: 300,
            y: 300
        }
    ];

    let puzzles = document.querySelectorAll("#puzzle-container div");

    // Rotate and onclick event
    var pieces = document.querySelectorAll("#puzzle-pieces div");
    pieces.forEach((piece, pieceIndex) => {
        let randomNumber = Math.round(10*Math.floor(Math.random() * 360));
        piece.style.transform = `rotate(${randomNumber}deg)`;

        piece.onclick = function() {
            if (selectedPiece) {
                selectedPiece.style.border = '';
                selectedPiece = '';
            } else {
                rotationNumber = parseInt(piece.style.transform.replace(/[^0-9]/g,''));
                selectedPiece = piece;
                selectedPiece.style.border = "1px solid #000000";
            }
        }

    });

    // Second click event, place the puzzle piece
    puzzles.forEach(puzzle => {
        puzzle.onclick = function() {
            if (selectedPiece) {
                puzzle.style.background = selectedPiece.style.background;
                selectedPiece.style.border = '';
                selectedPiece = '';
            } else {
                puzzle.style.background = '';
            }
        }
    })

    var ranNums = shuffle([0,1,2,3,4,5,6,7,8]);

    for (let i = 0; i < ranNums.length; i++) {
        pieces[ranNums[i]].style.left = puzzlePiecesLocations[i]['x'] + 'px';
        pieces[ranNums[i]].style.top = puzzlePiecesLocations[i]['y'] + 'px';
    }

    // Since no use of jQuery, use Fisher-Yates Shuffle
    function shuffle(array) {
        var i = array.length,
            j = 0,
            temp;
    
        while (i--) {
    
            j = Math.floor(Math.random() * (i+1));
    
            // Swap randomly chosen element with current element
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
    
        }
    
        return array;
    }

    // Reset puzzle
    document.getElementById("reset").onclick = function() {
        puzzles.forEach(puzzle => {
            puzzle.style.background = '';
        });
    }

    function movePuzzlePiece(e) {
        if (selectedPiece) {
            let posX = e.pageX - mainOffsetLeft + 'px';
            let posY = e.pageY - mainOffsetTop + 'px';
            selectedPiece.style.left = posX;
            selectedPiece.style.top = posY;
        }
    }

    addEventListener("mousemove", movePuzzlePiece, false);

    addEventListener("wheel", function(e) {
        if (selectedPiece) {
            if (e.deltaY < 0) {
                rotationNumber = rotationNumber + 10;
                selectedPiece.style.transform = `rotate(${rotationNumber}deg)`;
            } else {
                rotationNumber = rotationNumber - 10;
                selectedPiece.style.transform = `rotate(${rotationNumber}deg)`;
            }
        }
    })

    // Reponsive puzzle pieces location
    let marginLeft = 550;
    let marginTop = 100;
    let piecesWrapper = document.querySelector("#puzzle-pieces-wrapper");
    let mainOffsetLeft = document.querySelector("#puzzle-container").offsetLeft + marginLeft;
    let mainOffsetTop = document.querySelector("#puzzle-container").offsetTop + marginTop;
    piecesWrapper.style.left = mainOffsetLeft + 'px';
    piecesWrapper.style.top = mainOffsetTop + 'px';

    addEventListener("resize", function() {
        mainOffsetLeft = document.querySelector("#puzzle-container").offsetLeft + marginLeft;
        piecesWrapper.style.left = mainOffsetLeft + 'px';
    })

    $('#reset').on("click", function() {
        location.href = "puzzle.html";
    })

})