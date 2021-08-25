$(function() {

    let puzzleCounter = 0;

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

    // Rotate random puzzle pieces
    var pieces = document.querySelectorAll("#puzzle-pieces div");
    pieces.forEach((piece, pieceIndex) => {
        let randomNumber = Math.floor(Math.random() * 360);
        piece.style.transform = `rotate(${randomNumber}deg)`;

        piece.onclick = function() {
            puzzles[puzzleCounter].style.background = piece.style.background;
            puzzleCounter++;
        }

    });

    var ranNums = shuffle([0,1,2,3,4,5,6,7,8]);

    for (let i = 0; i < ranNums.length; i++) {
        pieces[ranNums[i]].style.left = puzzlePiecesLocations[i]['x'] + 'px';
        pieces[ranNums[i]].style.top = puzzlePiecesLocations[i]['y'] + 'px';
    }

    // Fisher-Yates Shuffle
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

    document.getElementById("reset").onclick = function() {
        puzzles.forEach(puzzle => {
            puzzle.style.background = '';
        });

        puzzleCounter = 0;
    }
        

})