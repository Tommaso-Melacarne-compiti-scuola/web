const darkmodeToggleEl = document.getElementById("darkmode-icon");

darkmodeToggleEl.addEventListener("click", () => {
    const desiredTheme = getCurrentToggleState() === "dark" ? "light" : "dark";

    if (desiredTheme === "dark") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
});

// Upon page load, set the theme to the preferred theme
(function () {
    setPageTheme(getPreferredTheme());
})();

function getCurrentToggleState() {
    if (darkmodeToggleEl.classList.contains("bi-toggle2-off")) {
        return "light";
    } else {
        return "dark";
    }
}

function setToggleState(theme) {
    if (theme === "light") {
        darkmodeToggleEl.classList.remove("bi-toggle2-on");
        darkmodeToggleEl.classList.remove("text-success");
        darkmodeToggleEl.classList.add("bi-toggle2-off");
        darkmodeToggleEl.classList.add("text-danger");
    } else {
        darkmodeToggleEl.classList.remove("bi-toggle2-off");
        darkmodeToggleEl.classList.remove("text-danger");
        darkmodeToggleEl.classList.add("bi-toggle2-on");
        darkmodeToggleEl.classList.add("text-success");
    }
}

function getStoredTheme() {
    return localStorage.getItem("theme");
}

function setStoredTheme(theme) {
    return localStorage.setItem("theme", theme);
}

function getPreferredTheme() {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
        return storedTheme;
    }

    const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;
    if (userPrefersDark) {
        return "dark";
    }

    return "light";
}

function setPageTheme(theme) {
    document.documentElement.setAttribute("data-bs-theme", theme);
}

function setTheme(theme) {
    setPageTheme(theme);
    setStoredTheme(theme);
    setToggleState(theme);
}
