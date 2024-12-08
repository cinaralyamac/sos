$(document).ready(function() {
    let currentplayer = "X";
    let board = ["","","","","","","","","",];
    let gameActive = true;

    const winCon = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    function handCellClick(){
        const index = $(this).data("index");

        if(board[index] !== "" || !
            gameActive) return;
        board[index] = currentplayer;

        $(this).text(currentplayer);
        checkWin();

        currentplayer = currentplayer === "X" ? "0" : "X" ;
    }


    function checkWin(){
        let roundWon = false ;
        for(let i = 0; i < winCon.length ; i++)
        { 
            const [a, b, c] = winCon[i];
            if(board[a] && board[a] === board[b] && board[a] === board[c])
        {
            roundWon = true ;
            break; 
        }
    }  
if(roundWon){

    $('.mizu').text(`Player ${currentplayer} wins! `);
    gameActive = false; 
    return;
}
if(!board.includes("")){
    $(".mizu").text("it is a draw!");
    gameActive = false ;
    return ;  
}

$('.mizu').text(`Player ${currentplayer}'s turn! `);


       
    }
function restartGame(){
    currentplayer= "X";
    board = ["", "", "", "", "", "", "", "", ""]
    gameActive = true;

    $(".cell").text("");
    $(".mizu").text("Player X's turn");
}

$(".cell").on("click", handCellClick);
$("#restart").on("click", restartGame);


})