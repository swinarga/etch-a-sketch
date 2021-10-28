// CREATE ETCH-A-SKETCH BOX
const grid = document.getElementById('grid');
let cells;

let size = 16;
let row, cell;
let grid_width = grid.clientWidth;
let grid_height = grid.clientHeight;
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
}

function promptGridSize() {
    size = parseInt(prompt("How big should the grid be?"));
    if (size > 100) promptGridSize();
}



// HOVER
function changeColor() {
    this.style.background = 'black';
}



// CLEAR ETCH-A-SKETCH BOX
const button = document.getElementById('clear-cells');
button.addEventListener('click', () => {
    deleteCells();
    promptGridSize();
    createGrid();
    changeSize()
})

function deleteCells() {
   grid.innerHTML = ''
}






