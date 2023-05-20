import { params, chosenLevel, numberMines } from './generate.js';

let firstClick = false;
let firstX;
let firstY;
let sizeX = params[chosenLevel].sizeX;
let sizeY = params[chosenLevel].sizeY;
let lost = false;
let flagOnField = 0;
let data = new Array(params[chosenLevel].sizeY).fill(0).map(() => new Array(params[chosenLevel].sizeX).fill(0));

async function newGame() {
    await getFirstClick();
    putMines();
    countMines();
    console.log(data);
    openFirst(firstX, firstY);
}

document.querySelectorAll('.tools-btn-apply').forEach(btn => btn.addEventListener('click', () => {
    sizeX = params[chosenLevel].sizeX;
    sizeY = params[chosenLevel].sizeY;
    firstClick = false;
    data = new Array(params[chosenLevel].sizeY).fill(0).map(() => new Array(params[chosenLevel].sizeX).fill(0));
    newGame();
}));

function countMines() {
    let x = [0, 1, 1, 1, 0, -1, -1, -1];
    let y = [1, 1, 0, -1, -1, -1, 0, 1];
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            if (data[i][j] === 0) {
                let cnt = 0;
                for (let k = 0; k < 8; k++) {
                    if (0 <= i + y[k] && i + y[k] < data.length && 0 <= j + x[k] && j + x[k] < data[i].length) {
                        if (data[i + y[k]][j + x[k]] === -1) cnt++;
                    }
                }
                data[i][j] = cnt;
            }
        }
    }
}

function putMine(cnt) {
    let x = Math.floor(Math.random() * sizeX);
    let y = Math.floor(Math.random() * sizeY);
    if (x == firstX && y == firstY) {
        putMine(cnt);
    }
    else if (data[y][x] === 0 && cnt != 0) {
        data[y][x] = -1;
        cnt--;
        putMine(cnt);
    }
    else if (cnt === 0) {
        return;
    }
    else {
        putMine(cnt);
    }
}

function putMines() {
    let cnt = numberMines;
    if (!cnt) cnt = 10;
    console.log(cnt);
    putMine(cnt);
}


function getFirstClick() {
    return new Promise((resolve, reject) => {
        let button = document.querySelectorAll('.field-key');
        button.forEach(btn => btn.addEventListener('click', () => {
            if (!firstClick) {
                firstClick = true;
                let coords = btn.getAttribute('key-coord').split(',');
                firstX = coords[1];
                firstY = coords[0];
                resolve(firstClick);
            }
            else if(!btn.classList.contains('flagged')){
                openCells(btn);
                if(checkWin()) ifWin();
            }
        }));
        button.forEach(btn => btn.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            let used = document.querySelector('.number-used');
            let remained = document.querySelector('.number-remained');
            if (firstClick) {
                if (btn.innerHTML != 'F' && flagOnField != numberMines) {
                    btn.classList.add('flagged');
                    used.innerHTML = String(parseInt(used.textContent) + 1);
                    remained.innerHTML = String(parseInt(remained.textContent) - 1);
                    btn.innerHTML += 'F';
                    flagOnField++;
                }
                else if(btn.innerHTML == 'F'){
                    btn.classList.remove('flagged');
                    used.innerHTML = String(parseInt(used.textContent) - 1);
                    remained.innerHTML = String(parseInt(remained.textContent) + 1);
                    btn.innerHTML = '';
                    flagOnField--;
                }
            }
        }));
    });
}

function checkWin(){
    let cnt = 0;
    let cntFlag = 0;
    let numToOpen = sizeX * sizeY - numberMines;
    let rows = document.querySelectorAll('.field-row');
    for(let i = 0; i < rows.length; i++){
        let cells = rows[i].childNodes;
        for(let j = 0; j < cells.length; j++){
            if(cells[j].classList.contains('opened')) cnt++;
            if(cells[j].classList.contains('flagged') && data[i][j] === -1) cntFlag++;
        }
    }
    return (cnt === numToOpen) && (cntFlag === numberMines);
}

let button = document.querySelectorAll('.field-key');
button.forEach(btn => btn.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}));

function openTiles(i, j) {
    i = parseInt(i);
    j = parseInt(j);
    let x = [0, 1, 1, 1, 0, -1, -1, -1];
    let y = [1, 1, 0, -1, -1, -1, 0, 1];
    for (let k = 0; k < 8; k++) {
        if (0 <= i + y[k] && i + y[k] < data.length && 0 <= j + x[k] && j + x[k] < data[i].length) {
            if (data[i + y[k]][j + x[k]] === 0) {
                let el = document.querySelector(
                    `[key-coord="${i + y[k]},${j + x[k]}"]`
                );
                if (!el.classList.contains('opened') && !el.classList.contains('flagged')) el.classList.add('opened');
                else continue;
                if (!el.classList.contains('flagged')) openTiles(i + y[k], j + x[k]);
            }
            else if (data[i + y[k]][j + x[k]] != -1) {
                let el = document.querySelector(
                    `[key-coord="${i + y[k]},${j + x[k]}"]`
                );
                if (!el.classList.contains('opened') && !el.classList.contains('flagged')) el.classList.add('opened');
                else continue;
                el.innerHTML += data[i + y[k]][j + x[k]];
            }
        }
    }
    return;
}

let popUp = document.querySelector('.pop-up');
let popUpBtn = document.querySelector('.pop-up-btn');
let popUpCont = document.querySelector('.pop-up-content');

function ifLost() { //check again
    popUp.classList.remove('hidden');
    popUpCont.childNodes.forEach(child => {
        if (child.classList.contains('hidden') && child.classList.contains('lost')) child.classList.remove('hidden');
        else child.classList.add('hidden');
    })
}

function ifWin() {
    popUp.classList.remove('hidden');
    popUpCont.childNodes.forEach(child => {
        if (child.classList.contains('hidden') && child.classList.contains('game-over')) child.classList.remove('hidden');
        else child.classList.add('hidden');
    })
}


popUpBtn.addEventListener('click', () => {
    popUp.classList.add('hidden');
});

function openFirst(x, y) {
    let el = document.querySelector(
        `[key-coord="${y},${x}"]`
    );
    openCells(el);
}

function openCells(btn) {
    let coords = btn.getAttribute('key-coord').split(',');
    let i = coords[0];
    let j = coords[1];
    if (!btn.classList.contains('opened')) btn.classList.add('opened');
    if (data[i][j] === -1) {
        btn.innerHTML += 'M';
        lost = true;
        ifLost();
    }
    else {
        if (data[i][j] > 0) {
            btn.innerHTML += data[i][j];
        }
        else openTiles(i, j);
    }
}

