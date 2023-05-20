let sizeField = 400; //px
let chosenLevel = 'Easy';
let numberMines = 10;

const params = {
    'Easy': {
        sizeX: 10,
        sizeY: 10
    },
    'Medium': {
        sizeX: 15,
        sizeY: 15
    },
    'Hard': {
        sizeX: 25,
        sizeY: 25
    }
}

function init() {
    let body = document.querySelector('body');
    body.innerHTML += '<div class="container"></div>';
    let container = document.querySelector('.container');
    container.innerHTML += '<div class="info"></div>';
    container.innerHTML += `<div class="field" style="width: ${sizeField}px; height: ${sizeField}px;"></div>`;
    container.innerHTML += '<div class="tools"></div>';
    container.innerHTML += '<div class="pop-up"></div>';

    //field
    let field = document.querySelector('.field');
    drawField(field);

    //info
    let info = document.querySelector('.info');
    info.innerHTML += '<h2>Flags</h2>';
    info.innerHTML += `<div>used: <span class="number-used">0</span></div>`;
    info.innerHTML += `<div>remained: <span class="number-remained">10</span</div>`;

    //time
    let tools = document.querySelector('.tools');
    tools.innerHTML += '<div class="tools-timer">Timer</div>';

    //level
    tools.innerHTML += '<div class="tools-choose-level"></div>';
    let levelChecker = document.querySelector('.tools-choose-level');
    createCheckBox(levelChecker);
    
    //number of mines
    tools.innerHTML += '<div class="tools-choose-mines"></div>';
    let minesChecker = document.querySelector('.tools-choose-mines');
    createInput(minesChecker);

    //pop-up
    let popUp = document.querySelector('.pop-up');
    popUp.classList.add('hidden');
    popUp.innerHTML += '<div class="pop-up-content"></div>';

    let popUpCont = document.querySelector('.pop-up-content');
    popUpCont.innerHTML += '<h1 class="game-over">Game Over!</h1>';
    popUpCont.innerHTML += '<h1 class="lost hidden">You lost!</h1>';
    popUpCont.innerHTML += '<button class="tools-btn-apply pop-up-btn">New Game</button>';
    
    tools.innerHTML += '<div><button class="tools-btn-apply">Apply</button></div>';
    document.getElementById('check-level-0').checked = true;
}

function createCheckBox(parent) {
    for (let i = 0; i < 3; i++) {
        let checkbox = document.createElement('input');
        checkbox.type = 'radio';
        checkbox.name = 'level';
        checkbox.id = 'check-level-' + i;
        let label = document.createElement('label');
        let tn;
        if (i === 0) tn = document.createTextNode('Easy');
        if (i === 1) tn = document.createTextNode('Medium');
        if (i === 2) tn = document.createTextNode('Hard');
        label.htmlFor = checkbox.id;
        label.appendChild(tn);
        parent.appendChild(label);
        parent.appendChild(checkbox);
    }
}

function createInput(parent){
    let textArea = document.createElement('input');
    textArea.type = 'text';
    textArea.name = 'mines';
    textArea.id = 'input-mines';
    textArea.autocomplete = 'off';
    textArea.minLength = '2';
    textArea.maxLength = '2';
    let label = document.createElement('label');
    label.htmlFor = textArea.id;
    label.innerText = 'Choose number of mines (from 10 to 99):';
    parent.appendChild(label);
    parent.appendChild(textArea);
}

init();

document.querySelectorAll('.tools-btn-apply').forEach(btn => btn.addEventListener('click', () => {
    if (document.getElementById('check-level-0').checked === true) chosenLevel = 'Easy';
    if (document.getElementById('check-level-1').checked === true) chosenLevel = 'Medium';
    if (document.getElementById('check-level-2').checked === true) chosenLevel = 'Hard';

    numberMines = parseInt(document.getElementById('input-mines').value);
    if(numberMines == '' || !numberMines || numberMines < 10) numberMines = 10;

    let remained = document.querySelector('.number-remained');
    remained.innerHTML = numberMines;
    resizeField();
}));

function resizeField() {
    let field = document.querySelector('.field');
    field.innerHTML = null;
    drawField(field);
}

function drawField(field){
    for (let i = 0; i < params[chosenLevel].sizeY; i++) {
        field.innerHTML += '<div class="field-row"></div>';
        let fieldRow = document.querySelectorAll('.field-row');
        fieldRow = fieldRow[fieldRow.length - 1];
        for (let j = 0; j < params[chosenLevel].sizeX; j++) {
            fieldRow.innerHTML += `<div class="field-key" key-coord="${i},${j}" style="width: ${sizeField / params[chosenLevel].sizeX}px; height: ${sizeField /  params[chosenLevel].sizeY}px;"></div>`;
        }
    }
}

export {params, chosenLevel, numberMines};