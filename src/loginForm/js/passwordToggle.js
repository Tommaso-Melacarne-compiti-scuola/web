// Login form
const loginPasswordEl = document.getElementById("password");
const loginTogglePasswordIcon = document.getElementById("toggle-password");

loginTogglePasswordIcon.addEventListener("click", () => {
    togglePasswordListener(loginPasswordEl, loginTogglePasswordIcon);
});

// Signup form
const signupPasswordEl = document.getElementById("signup-password");
const signupTogglePasswordIcon = document.getElementById(
    "signup-toggle-password",
);

signupTogglePasswordIcon.addEventListener("click", () => {
    togglePasswordListener(signupPasswordEl, signupTogglePasswordIcon);
});

/**
 * Toggle the visibility of the password
 * @param {HTMLElement} passwordEl The password input element
 * @param {HTMLElement} passwordIconEl The password icon element
 */
function togglePasswordListener(passwordEl, passwordIconEl) {
    const type =
        passwordEl.getAttribute("type") === "password" ? "text" : "password";
    passwordEl.setAttribute("type", type);
    togglePasswordButtonIcon(passwordIconEl);
}

/**
 * Toggle the password icon
 * @param passwordIconEl The password icon element
 */
function togglePasswordButtonIcon(passwordIconEl) {
    const eyeSlash = "bi-eye-slash";
    const eye = "bi-eye";

    if (passwordIconEl.classList.contains(eyeSlash)) {
        passwordIconEl.classList.remove(eyeSlash);
        passwordIconEl.classList.add(eye);
    } else {
        passwordIconEl.classList.remove(eye);
        passwordIconEl.classList.add(eyeSlash);
    }
}
