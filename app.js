const firstPlayerButton = document.querySelector('button:nth-of-type(1)')
const secondPlayerButton = document.querySelector('#pButton2')
const resetButton = document.querySelector('#resetButton')

const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')

const selectElement = document.querySelector('#selectElement')
const score = document.querySelector('#score')
const h1 = document.querySelector('h1')

let maxScore = 0;
let p1Score = 0;
let p2Score = 0;
function addScoreP1() {
    if (p1Score < maxScore) {
        p1Score += 1;
        checkWinner();
    } else {
        console.log('error')
    }
    p1Display.textContent = p1Score.toString();

}
function addScoreP2() {
    if (p2Score < maxScore) {
        p2Score += 1;
        checkWinner();
    } else {
        console.log('error')
    }


    p2Display.textContent = p2Score.toString();

}
function removeScore() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score.toString();
    p2Display.textContent = p2Score.toString();
    p1Display.style.color = 'black';
    p2Display.style.color = 'black';
}

const firstPlayerWinner = document.createElement('h2')
const secondPlayerWinner = document.createElement('h2')

function checkWinner() {
    if (p1Score === maxScore) {
        p1Display.style.color = 'green';
        p2Display.style.color = 'red';
        firstPlayerButton.disabled = true;
        secondPlayerButton.disabled = true;
        firstPlayerWinner.innerText = 'Player 1 is the Winner, Congrats!'
        firstPlayerWinner.classList.add('green')
        h1.append(firstPlayerWinner)
    } else if (p2Score === maxScore) {
        p2Display.style.color = 'green';
        p1Display.style.color = 'red';
        firstPlayerButton.disabled = true;
        secondPlayerButton.disabled = true;
        secondPlayerWinner.innerText = 'Player 2 is the Winner, Congrats!'
        secondPlayerWinner.classList.add('green')
        h1.append(secondPlayerWinner)
    }
}




firstPlayerButton.addEventListener('click', function (e) {
    console.log('clicked')
    addScoreP1();
})

secondPlayerButton.addEventListener('click', function (e) {
    console.log('clicked')
    addScoreP2();
})

resetButton.addEventListener('click', function (e) {
    console.log('clicked')
    firstPlayerButton.disabled = false;
    secondPlayerButton.disabled = false;
    firstPlayerWinner.innerText = ''
    secondPlayerWinner.innerText = ''
    removeScore();
})
selectElement.addEventListener('change', function (e) {
    console.log(e.target.value);
    maxScore = parseInt(e.target.value)

})
