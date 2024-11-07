const users = ["ciccioGamer", "icardi", "khaby", "rocco", "anna"];
const passwords = ["ciccio1", "wandanara", "tiktok", "siffredi33", "tatangelo"];

// Internal utility
/**
 * Change the feedback message of a form
 * @param {HTMLElement} el The element to change the feedback of
 * @param {string} message The new message
 * @param {string} bsColorClass A Bootstrap color class (e.g. "danger", "success")
 */
function changeFeedback(el, message, bsColorClass) {
    el.textContent = message;
    el.classList.remove('bg-danger');
    el.classList.remove('bg-success');
    el.classList.add(`bg-${bsColorClass}`);
}

// Login form
const loginFeedbackEl = document.getElementById("login-feedback");


/**
 * Change the feedback message of the login
 * @param {string} message The new message
 * @param {string} bsColorClass A Bootstrap color class (e.g. "danger", "success")
 */
function changeLoginFeedback(message, bsColorClass) {
    changeFeedback(loginFeedbackEl, message, bsColorClass);
}

document.getElementById("login-form").addEventListener("submit", function (event) {
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


// Open and close the signup dialog
const signupDialogEl = document.getElementById("signup-dialog");

document.getElementById("close-signup-dialog").addEventListener("click", function () {
    signupDialogEl.open = false;
});

document.getElementById("create-account").addEventListener("click", function () {
    signupDialogEl.open = true;
});


// Signup form
const signupFeedbackEl = document.getElementById("signup-feedback");
/**
 * Change the feedback message of the signup
 * @param {string} message The new message
 * @param {string} bsColorClass A Bootstrap color class (e.g. "danger", "success")
 */
function changeSignupFeedback(message, bsColorClass) {
    signupFeedbackEl.classList.remove('d-none');
    changeFeedback(signupFeedbackEl, message, bsColorClass);
}

document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (users.includes(username)) {
        changeSignupFeedback("Signup failed. User already exists", "danger");
        return;
    }

    users.push(username);
    passwords.push(password);
    changeSignupFeedback("Signup successful", "success");
});