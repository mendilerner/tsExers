
// בנו תכנית שמדמה את המשחק אבן נייר ומספריים
// התכנית תגדיר מי המנצח לפי חוקיות המשחק
// אבן מנצח מספריים שמנצחות נייר שמנצח אבן

// דגשים
// שחקן  יכול לבחור בין אבן נייר ומספרים בלבד! אך שחקן יכול שלא תהיה לו בחירה
// התכנית יכולה להחזיר את המחרוזות
// 'tie', 'player1', 'player2' 
// התשובה חייבת להכיל
// ENUM
// type/interface
// union
// במידה ולשחקן אין בחירה הצג זרקו שגיאה
// ממשו את הפונקציה הוסיפו טיפוסים לפרמטרים ולערך החזרה של הפונקציה

enum Options{
    rock= 'rock',
    paper = 'paper',
    scisoors = 'scisoors',
    noCoiche = "no - coiche"
}

type results = 'player1' | 'player2' | 'tie';

interface Player{
    choice: Options;
}




function playGame(player1 : Player, player2: Player) {
    let result: results;
    if (player1.choice === player2.choice){
        result = 'tie'
    }
    else if (player1.choice === Options.rock && player2.choice === Options.scisoors){
        result = 'player1';
    }
    else if (player1.choice === Options.scisoors && player2.choice === Options.paper){
        result = 'player1';
    }
    else if(player1.choice === Options.paper && player2.choice === Options.rock){
        result = 'player1';
    }
    else{
        result = 'player2'
    }
    return result

}

const player1: Player = {choice: Options.scisoors}
const player2: Player = {choice: Options.scisoors}

const play = playGame(player1, player2);
console.log(play);
//Output: player1 or player2 or tie

