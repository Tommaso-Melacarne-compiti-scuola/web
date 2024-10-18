const eurElementEl = document.getElementById("eur");
const usdElementEl = document.getElementById("usd");
const gbpElementEl = document.getElementById("gbp");
const jpyElementEl = document.getElementById("jpy");

const eurToUsdRate = 1.16;
const eurToGbpRate = 0.85;
const eurToJpyRate = 128.77;

eurElementEl.addEventListener("input", () => {
    const eurValue = eurElementEl.value;

    usdElementEl.innerHTML = getTextToDisplay(eurValue, eurToUsdRate, "$");
    gbpElementEl.innerHTML = getTextToDisplay(eurValue, eurToGbpRate, "£");
    jpyElementEl.innerHTML = getTextToDisplay(eurValue, eurToJpyRate, "¥");
});

function getTextToDisplay(value, rate, currencyString) {
    return String((value * rate).toFixed(2)) + " " + currencyString;
}
