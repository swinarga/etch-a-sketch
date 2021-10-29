// CREATE ETCH-A-SKETCH BOX
const grid = document.getElementById('grid');
const gridSizeText = document.querySelector('.grid-size');

let cells;
let size = 16;
let row, cell;
let grid_width = grid.clientWidth;
let grid_height = grid.clientHeight;
let color = 'black';
let isRandomColor;
createGrid();

function createGrid() {
    // create rows
    for (let i = 0; i < size; i++) {
        row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);

        // create columns
        for (let j  = 0; j < size; j++) {
            cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
    }

    // listen to mouse hover
    cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', changeColor);
    })
}

function changeSize() {
    cells.forEach(cell => {
        cell.style.height = `${grid_height / size}px`;
        cell.style.width = `${grid_width / size}px`;
    })
    gridSizeText.textContent = `${size}x${size}`

}

function promptGridSize() {
    size = parseInt(prompt("How big should the grid be?"));
    if (size > 100) promptGridSize();
}



// HOVER
function changeColor() {
    if (isRandomColor) return this.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
    this.style.background = color;
}



// CLEAR ETCH-A-SKETCH BOX
const clearBtn = document.getElementById('clear-cells');
clearBtn.addEventListener('click', () => {
    deleteCells();
    promptGridSize();
    createGrid();
    changeSize()
})

const randomColorBtn = document.getElementById('random-color');
randomColorBtn.addEventListener('click', () => {
    isRandomColor = true;
})

const blackBtn = document.getElementById('black');
blackBtn.addEventListener('click', () => {
    isRandomColor = false;
})



function deleteCells() {
   grid.innerHTML = ''
}






