// Start koding lengre ned (ved startHere)

const failColor = "rgb(226, 101, 91)";
const correctColor = "rgb(25, 232, 168)";
const failText = "Feil";
const correctText = "Ny runde";

const wordList = [
  "Huske",
  "Trene",
  "Danse",
  "Hoppe",
  "Sykle",
  "Gå",
  "Rulle",
  "Trille",
  "Kjøre",
  "Løpe",
  "Springe",
  "Hinke",
  "Sparke",
  "Sprinte",
  "Forflytte",
  "Trimme",
  "Løfte",
  "Snurre",
  "Svinge",
  "Svømme",
  "Flyte",
  "Fly",
  "Sveve",
  "Ake",
  "Dra",
];

const button = document.querySelector("button");
const wordFields = document.querySelectorAll("span");

let spanList = [];

const loadSite = () => {
  for (let span of wordFields) {
    let rand = Math.floor(Math.random() * wordList.length);
    let word = wordList.splice(rand, 1)[0];
    span.innerHTML = word;
    spanList.push(word);
  }
};
loadSite();

spanList.sort();

const allLiElements = document.querySelectorAll("li");

//Her kjøres knappe-funksjonen, men med kriterier om det er riktig eller feil.
const numbersValue = () => {
  let inputValue;
  let correctOrder = true;

  for (const li of allLiElements) {
    let span = li.querySelectorAll("span")[0].innerHTML;
    inputValue = parseInt(li.querySelectorAll("input")[0].value);
    inputValue--;

    let correctSortedSpans = spanList.indexOf(span);

    if (parseInt(inputValue) === correctSortedSpans) {
      // console.log("Riktig");
    } else {
      // console.log("Feil");
      correctOrder = false;
    }
  }

  //Setter kriterier for knappen for hvis rekkefølgen er feil iht. correctOrder.
  if (correctOrder === false) {
    inputValue = "";
    button.innerText = failText;
    button.style.backgroundColor = failColor;
  } else {
    button.innerText = correctText;
    button.style.backgroundColor = correctColor;
  }

  // Legger så til kriterier for en ny runde om reglene stemmer, setter også
  // en ekstra animasjon som vises når det er riktig(For moro)
  if (
    button.style.backgroundColor === correctColor &&
    button.innerText === correctText
  ) {
    button.addEventListener("click", newRound);
    winningDots();
  }
};

const newRound = () => {
  location.reload();
};

button.addEventListener("click", numbersValue);

// Laget en liten animasjon som kjøres når man har satt riktige tall
// Det meste av denne koden er inspirert av en tutorial på youtube.
// https://www.youtube.com/watch?v=wIdYWNNNVRI&t=115s
const winningDots = () => {
  const count = 300;
  const dots = document.querySelector("body");

  let i = 0;

  while (i < count) {
    const dot = document.createElement("i");

    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const size = Math.random() * 5;
    dot.style.left = x + "px";
    dot.style.top = y + "px";
    dot.style.height = 1 + size + "px";
    dot.style.width = 1 + size + "px";

    const duration = Math.random() * 2;
    dot.style.animationDuration = 1 + duration + "s";

    dots.appendChild(dot);
    i++;
  }
};
