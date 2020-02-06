let myNum = Math.round(Math.random() *99) + 1;
    console.log(myNum);
    
function sendData(form) {
    let guessNum = document.forms['myform']['inputbox'].value;
    let text;

    if (guessNum == myNum) {
        text = 'You win!';
    } else {
        text = 'I\'m sorry, try again.';
    }
    document.getElementById('response').innerHTML = text;
}


