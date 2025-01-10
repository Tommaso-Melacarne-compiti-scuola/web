const lastAccessElement = document.getElementById("lastAccess");
const lastAccess = localStorage.getItem("lastAccess");

if (lastAccess) {
  const lastAccessDate = new Date(lastAccess);
  lastAccessElement.innerHTML = `Ultimo accesso: ${lastAccessDate.toLocaleString()}`;
} else {
  lastAccessElement.innerHTML = "Benvenuto!";
}

localStorage.setItem("lastAccess", new Date().toISOString());
