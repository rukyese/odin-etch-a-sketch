drawGrid(3);

function drawGrid(size) {
  const grid = document.querySelector(".container");
  grid.replaceChildren();

  for (let i = 0; i < size ** 2; i++) {
    const cell = document.createElement("div");

    cell.style.width =  `${100 / size}%`;
    grid.appendChild(cell);
  }
}


