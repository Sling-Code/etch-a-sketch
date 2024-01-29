const container = document.getElementById('container');


document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.classList.add('grid-square');
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = 'black';
            });            
            container.appendChild(square);
        }
    }
});


