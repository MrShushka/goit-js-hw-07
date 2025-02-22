function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  

  const controls = document.querySelector("#controls");
  const input = controls.querySelector("input");
  const createBtn = controls.querySelector("[data-create]");
  const destroyBtn = controls.querySelector("[data-destroy]");
  const boxes = document.querySelector("#boxes");
  
  createBtn.addEventListener("click", () => {
    const amount = parseInt(input.value.trim(), 10); 
    if (isNaN(amount) || amount < 1 || amount > 100) {
      alert("Please enter a number between 1 and 100.");
      return;
    }
    createBoxes(amount);
    input.value = ""; 
  });

  destroyBtn.addEventListener("click", destroyBoxes);
  

  function createBoxes(amount) {
    boxes.innerHTML = ""; 
  
    const elements = []; 
    let size = 30; 

    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      div.style.margin = "5px";
      div.style.display = "inline-block";
      elements.push(div);
      size += 10; 
    }
  
    boxes.append(...elements); 
  }
  

  function destroyBoxes() {
    boxes.innerHTML = ""; 
  }
  
  
  
  
  
  

