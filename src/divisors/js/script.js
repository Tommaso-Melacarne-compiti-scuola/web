const calculateEl = document.getElementById('calculate');
const resultEl = document.getElementById('result-paragraph');
const numberEl = document.getElementById('number');

calculateEl.addEventListener('click', calculateDivisorsHandler);

function calculateDivisorsHandler() {
    const number = parseInt(numberEl.value);

    if (!isNumberValid(number)) {
        return;
    }

    const divisors = getDivisorsForNumber(number);

    if (divisors.length <= 0) {
        resultEl.innerHTML = 'Il numero non ha divisori';
        resultEl.style.backgroundColor = 'transparent';
        return;
    }

    const isPrime = divisors.length <= 2;

    resultEl.innerHTML = `I divisori di ${number} sono: <br> ${divisors.join(' - ')} <br> Il numero ${(isPrime ? '' : 'non')} è primo`;

    if (isPrime) {
        resultEl.style.backgroundColor = 'red';
    } else {
        resultEl.style.backgroundColor = 'green';
    }
}

function isNumberValid(number) {
    if (isNaN(number)) {
        resultEl.innerHTML = 'Inserisci un numero valido';
        resultEl.style.backgroundColor = 'red';
        return false;
    }

    if (number < 0) {
        resultEl.innerHTML = 'Inserisci un numero positivo';
        resultEl.style.backgroundColor = 'red';
        return false;
    }

    return true;
}

function getDivisorsForNumber(number) {
    const divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}