const grid = document.querySelector(".container");

drawGrid(16);

function drawGrid(size) {
  grid.replaceChildren();
  
  for (let i = 0; i < size ** 2; i++) {
    const cell = document.createElement("div");
    
    cell.style.width =  `${100 / size}%`;
    grid.appendChild(cell);
  }

  handleHover();
}

function handleHover() {
  const cells = document.querySelectorAll(".container div");
  cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
      cell.style.backgroundColor = 'black';
    });
  });
}



