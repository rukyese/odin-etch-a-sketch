const grid = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const newBtn = document.querySelector(".new");

drawGrid(16);

function drawGrid(size) {
  grid.replaceChildren();

  for (let i = 0; i < size ** 2; i++) {
    const cell = document.createElement("div");

    cell.style.width = `${100 / size}%`;
    // cell.style.opacity = '0';
    grid.appendChild(cell);
  }

  handleHover();
}

function handleHover() {
  const cells = document.querySelectorAll(".container div");
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      // cell.style.backgroundColor = 'black';

      const r = Math.random() * 256;
      const g = Math.random() * 256;
      const b = Math.random() * 256;
      cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  });
}

function handleReset() {
  const cells = document.querySelectorAll(".container div");
  cells.forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}

function newGrid() {
  let size = parseInt(prompt("Enter a grid size from 1 to 100"));

  if (size < 1 || size > 100) return newGrid();
  if (!size) return;
  if (!Number.isInteger(size)) return;

  drawGrid(size);
}

resetBtn.addEventListener("click", handleReset);
newBtn.addEventListener("click", newGrid);
