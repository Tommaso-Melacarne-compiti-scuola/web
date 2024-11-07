const passwordEl = document.getElementById("password");
const togglePasswordIcon = document.getElementById("toggle-password");

togglePasswordIcon.addEventListener("click", () => {
  const type =
    passwordEl.getAttribute("type") === "password" ? "text" : "password";
  passwordEl.setAttribute("type", type);
  togglePasswordButtonIcon();
});

function togglePasswordButtonIcon() {
  const eyeSlash = "bi-eye-slash";
  const eye = "bi-eye";

  if (togglePasswordIcon.classList.contains(eyeSlash)) {
    togglePasswordIcon.classList.remove(eyeSlash);
    togglePasswordIcon.classList.add(eye);
  } else {
    togglePasswordIcon.classList.remove(eye);
    togglePasswordIcon.classList.add(eyeSlash);
  }
}
