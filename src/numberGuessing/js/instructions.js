const instructionsArrowEl = document.getElementById('instructionsArrow');
const instructionsEl = document.getElementById('instructions')
const playBtnEl = document.getElementById('playBtn');

const arrowDown = 'bi-arrow-down-circle-fill';
const arrowRight = 'bi-arrow-right-circle';

instructionsArrowEl.addEventListener('click', () => {
    instructionsEl.classList.toggle('d-none')

    if (instructionsArrowEl.classList.contains(arrowRight)) {
        instructionsArrowEl.classList.replace(arrowRight, arrowDown);
    } else {
        instructionsArrowEl.classList.replace(arrowDown, arrowRight);
    }
});

playBtnEl.addEventListener('click', () => {
    guessBoxEl.classList.remove('d-none');
    playBtnEl.disabled = true;
});