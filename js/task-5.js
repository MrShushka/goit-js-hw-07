const button = document.querySelector(".change-color");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const style = document.createElement("style");
const spam = document.querySelector(".color");

button.addEventListener("click", (enent) => {
    const color = getRandomHexColor();
    style.textContent = `body { background-color: ${color}}`;
    spam.textContent = color;
    document.head.appendChild(style);
})