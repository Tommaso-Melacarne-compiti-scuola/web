let button = document.getElementById('buy');

button.addEventListener('click', buttonFn);

function buttonFn() {
    let age = prompt('Quanti anni hai?');

    if (!age || age < 0 || age > 120) {
        return buttonFn();
    }
    
    if (age < 5) { 
        alert("Il biglietto è gratis");
    } else if (age > 18 && age < 25) {
        alert("Il costo del biglietto è di 3.50€");
    } else if (age > 50 && age < 55) {
        alert("Il costo del biglietto è di 5€");
    } else {
        alert("Il costo del biglietto è di 8€");
    }
}