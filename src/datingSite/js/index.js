const people = [
  {
    name: "Andrea Dipré",
    age: "50",
    hobby: "Cocco",
    picture: "dipre.webp",
  },
  {
    name: "Nevio Lo Stirato",
    age: "67",
    hobby: "Castelletti",
    picture: "nevio.webp",
  },
  {
    name: "Cruciani",
    age: "58",
    hobby: "Fare la doccia",
    picture: "cruciani.webp",
  },
  {
    name: "Filippo Champagne",
    age: "50",
    hobby: "Ballare la fresca",
    picture: "champagne.webp",
  },
  {
    name: "Er Brasiliano",
    age: "45",
    hobby: "Lanciare chitarre nei fiumi",
    picture: "brasile.webp",
  },
  {
    name: "Vittorio Feltri",
    age: "70",
    hobby: "Visitare le periferie",
    picture: "feltri.webp",
  },
  {
    name: "Rosario Muniz",
    age: "48",
    hobby: "Le cappelle",
    picture: "muniz.avif",
  },
];

const titleEl = document.getElementById("title");
const heartEl = document.getElementById("heart");

const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const userImageEl = document.getElementById("userImage");

info1.innerHTML = String(people.length);

document.getElementById("searchBtn").addEventListener("click", () => {
  heartEl.classList.add("d-none");
  
  const nextPerson = people[Math.floor(Math.random() * people.length)];

  titleEl.innerHTML = nextPerson.name;
  info1.innerHTML = nextPerson.age + " anni";
  info2.innerHTML = nextPerson.hobby;

  userImageEl.attributes["src"].value = `./images/userPic/${nextPerson.picture}`;
});

userImageEl.addEventListener("dblclick", () => {
    heartEl.classList.remove("d-none");
});