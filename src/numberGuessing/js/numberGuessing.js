const guessInputEl = document.getElementById('guessInput');
const guessBtnEl = document.getElementById('guessBtn');

const remainingAttemptsEl = document.getElementById('remainingAttempts');
const insertedNumbersEl = document.getElementById('insertedNumbers');
const tipEl = document.getElementById('tip');
const resultEl = document.getElementById('result');
const guessBoxEl = document.getElementById('guessBox');

const maxAttempts = 7;

const randomNumberMin = 1;
const randomNumberMax = 100;

function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const randomNumber = getRandomIntInclusive(randomNumberMin, randomNumberMax);

let remainingAttempts = maxAttempts;
const insertedNumbers = [];

function updateAttempts() {
    remainingAttemptsEl.innerHTML = String(remainingAttempts);
}

function updateInsertedNumbers() {
    insertedNumbersEl.innerHTML = insertedNumbers.join(', ');
}

function updateTip(tip) {
    tipEl.innerHTML = tip;
}

function userWon() {
    resultEl.innerHTML = 'YOU WIN';
    guessBoxEl.classList.replace('bg-white', 'bg-success');

    endGame();
}

function userLost() {
    resultEl.innerHTML = `YOU LOSE - The number was ${randomNumber}`;
    guessBoxEl.classList.replace('bg-white', 'bg-danger');

    endGame();
}

guessBtnEl.addEventListener('click', guess);
guessInputEl.addEventListener('keyup', guessCheckKey);

function endGame() {
    guessBtnEl.disabled = true;
    guessBtnEl.removeEventListener('click', guess);
    guessInputEl.removeEventListener('keyup', guessCheckKey);
}

function guessCheckKey(e) {
    if (e.key === 'Enter') {
        guess();
    }
}

function guess() {
    const guess = parseInt(guessInputEl.value);

    if (guess < 1 || guess > 100) {
        alert('Please insert a number between 1 and 100');
        return;
    }

    if (insertedNumbers.includes(guess)) {
        alert('You already tried that number');
        return;
    }

    insertedNumbers.push(guess);
    updateInsertedNumbers();

    if (guess === randomNumber) {
        userWon();
    } else {
        remainingAttempts--;
        updateAttempts();

        if (remainingAttempts === 0) {
            userLost();
            return;
        }

        if (guess < randomNumber) {
            updateTip('The number is higher');
        } else {
            updateTip('The number is lower');
        }
    }
}

