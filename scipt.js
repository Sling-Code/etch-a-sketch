const container = document.getElementById('container');
const sizeBtn = document.getElementById('sizeBtn');
const colorBtn = document.getElementById('colorBtn')
let gridSize = 16;




const setGrid = () => {
    let newSize = prompt('Enter a number between 4 and 100');
    
    // Parse the input to ensure it's treated as a number
    newSize = parseInt(newSize);

    if (newSize >= 4 && newSize <= 100) {
        gridSize = newSize;
        console.log(gridSize);

        // Clear existing grid before creating a new one
        container.innerHTML = '';

        // Calculate the size of each grid square based on the container size and number of squares
        const squareSize = 640 / gridSize;

        // Create a new grid with the updated size
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const square = document.createElement('div');
                square.classList.add('grid-square');

                // Set the width and height of each square dynamically
                square.style.width = squareSize + 'px';
                square.style.height = squareSize + 'px';

                square.addEventListener('mouseover', () => {
                    square.style.backgroundColor = 'black';
                });

                container.appendChild(square);
            }
        }
    } else {
        alert('Invalid Input. Please enter a number between 4 and 100.');
    }
};

   

sizeBtn.addEventListener('click', setGrid);

document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black';
            });            
            container.appendChild(square);
        }
    }
});


