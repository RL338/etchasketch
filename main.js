const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnGray = document.createElement('button');
const btnRGB = document.createElement('button');
const btnSize = document.createElement('button')
const buttonsContainer = document.querySelector('buttons')

//Function to create grid inside container

function createDivs(col,rows){
    for(let i=0; i<(col*rows);i++){
        const div = document.createElement('div')

        

        container.style.gridTemplateColumns = `repeat(${col}, ifr)`;
        container.style.gridTemplateRows = `repeat(${rows}, ifr)`;
        
        container.appendChild(div).classList.add('box')
    }
}
createDivs(16,16)

