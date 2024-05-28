let button = document.getElementById('buy');

button.addEventListener('click', buttonFn);

function buttonFn() {
    const age = prompt('Quanti anni hai?');

    if (!age || age < 0 || age > 120) {
        return buttonFn();
    }

    let msg;
    if (age < 5) {
        msg = "Il biglietto è gratis";
    } else if (age > 18 && age < 25) {
        msg = "Il costo del biglietto è di 3.50€";
    } else if (age > 50 && age < 55) {
        msg = "Il costo del biglietto è di 5€";
    } else {
        msg = "Il costo del biglietto è di 8€";
    }

    console.log(msg);
    alert(msg);
}