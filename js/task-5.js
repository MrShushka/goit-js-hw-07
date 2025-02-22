const button = document.querySelector(".change-color");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

const style = document.createElement("style");

button.addEventListener("click", (enent) => {
    style.textContent = `body { background-color: ${getRandomHexColor()}}`;
    document.head.appendChild(style);
})