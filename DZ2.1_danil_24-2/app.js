const block = document.querySelector('.block');
const container = document.querySelector('.main__inner');

let value = 0;

function moveBlock() {
    value ++;
    const radius = (container.offsetWidth - block.offsetWidth) / -2;
    const x = radius * Math.cos(value * Math.PI / 180) + container.offsetWidth / 2 - block.offsetWidth / 2;
    const y = radius * Math.sin(value * Math.PI / 180) + container.offsetHeight / 2 - block.offsetHeight / 2;
    block.style.left = `${x}px`;
    block.style.top = `${y}px`;
    setTimeout(moveBlock, 10);
}

moveBlock()

