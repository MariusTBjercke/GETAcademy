$(function() {

    let puzzleCounter = 0;

    let selectedPiece;

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
        let randomNumber = Math.floor(Math.random() * 360);
        piece.style.transform = `scale(0.8) rotate(${randomNumber}deg)`;

        piece.onclick = function() {
            if (selectedPiece) {
                selectedPiece.style.border = '';
            }
            if (!(puzzleCounter === 9)) { 
                piece.style.border = '1px solid #000000';
                selectedPiece = piece;
                puzzleCounter++;
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

        puzzleCounter = 0;
    }
        

})