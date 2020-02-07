let myNum = Math.round(Math.random() *99) + 1;
    console.log(myNum);
let count = 0;
    
function sendData(form) {
    let guessNum = document.forms['myform']['inputbox'].value;
    let text;
    count++;
    let background = document.body;
    let winner = document.getElementById('hidden');

    if (guessNum == myNum) {
        text = 'You win! It took you ' + count + ' tries to get it right!';
        background.style.backgroundColor = 'grey';
        winner.style.display = 'flex';
    } else if (guessNum > 100 || guessNum < 1 || isNaN(guessNum)) {
        text = 'Invaild. Please play again, and enter a vaild number.';
    } else if (guessNum > myNum) {
        text = 'Too high! Try again!';
    } else if (guessNum < myNum) {
        text = 'Too low! Try again!';
    } else {
        text = 'Something went wrong in the game. Please reload the page and play again.';
    }
    document.getElementById('theiranswer').innerHTML = text;
}


