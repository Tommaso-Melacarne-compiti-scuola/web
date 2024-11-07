const loginFormEl = document.getElementById("login-form");
const feedbackEl = document.getElementById("login-feedback");

const users = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const passwords = ["ciccio1", "wandanara", "tiktok", "siffredi33", "tatangelo"];

function changeLoginFeedback(message, bsColorClass) {
    feedbackEl.textContent = message;
    feedbackEl.classList.remove('bg-danger');
    feedbackEl.classList.remove('bg-success');
    feedbackEl.classList.add(`bg-${bsColorClass}`);
}

loginFormEl.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    const index = users.indexOf(username);

    if (index === -1) {
        changeLoginFeedback("Login failed. User not found", "danger");
        return;
    }

    if (passwords[index] !== password) {
        changeLoginFeedback("Login failed. Wrong password", "danger");
        return;
    }

    changeLoginFeedback("Logged in successfully", "success")
});
