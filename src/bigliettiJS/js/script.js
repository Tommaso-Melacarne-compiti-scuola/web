let button = document.getElementById('buy');

button.addEventListener('click', buy);

function buy() {
    let ageElement = document.getElementById('age');
    let age = parseInt(ageElement.value);
    
    if (!age) {
        return buy();
    }
    
    let isDiscounted = false;
    let msg;
    if (age < 5) {
        msg = "Il biglietto è gratis";
    } else if (age > 18 && age <= 25) {
        msg = "Il costo del biglietto è di 3.50€";
        isDiscounted = true;
    } else if (age >= 50 && age <= 55) {
        msg = "Il costo del biglietto è di 5€";
    } else {
        msg = "Il costo del biglietto è di 8€";
    }
    
    let priceContainer = document.getElementById('price-container');
    if (priceContainer.classList.contains('d-none')) {
        priceContainer.classList.remove('d-none');
    }
    
    let priceElement = document.getElementById('price');
    priceElement.innerText = msg;
    if (isDiscounted) {
        priceElement.style.color = 'yellow';
    }
    
}