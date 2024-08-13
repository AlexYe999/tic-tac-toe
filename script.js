let gameOver = false;
let xTurn = true;
let xScore = 0;
let oScore = 0;
let gameNum = 0;

function checkList(list) {
    console.log(list[0].children);
    if (list[0].children.length == 0 || list[1].children.length == 0 || list[2].children.length == 0) return false;
    let numX = 0;
    for (let i = 0; i < 3; i++) {
        if (list[i].children[0].classList.contains("x-obj")) numX++;
    }
    return numX == 0 || numX == 3;
}

function checkGameState() {
    let toCheck = document.querySelectorAll(".grid-col-0");
    if (checkList(toCheck)) {
        gameOver = true;
        if (toCheck[0].children[0].classList.contains("x-obj")) xScore++;
        else oScore++;
    }
    toCheck = document.querySelectorAll(".grid-col-1");
    if (checkList(toCheck)) {
        gameOver = true;
        if (toCheck[0].children[0].classList.contains("x-obj")) xScore++;
        else oScore++;
    }
    toCheck = document.querySelectorAll(".grid-col-2");
    if (checkList(toCheck)) {
        gameOver = true;
        if (toCheck[0].children[0].classList.contains("x-obj")) xScore++;
        else oScore++;
    }
    toCheck = document.querySelectorAll(".grid-row-0");
    if (checkList(toCheck)) {
        gameOver = true;
        if (toCheck[0].children[0].classList.contains("x-obj")) xScore++;
        else oScore++;
    }
    toCheck = document.querySelectorAll(".grid-row-1");
    if (checkList(toCheck)) {
        gameOver = true;
        if (toCheck[0].children[0].classList.contains("x-obj")) xScore++;
        else oScore++;
    }
    toCheck = document.querySelectorAll(".grid-row-2");
    if (checkList(toCheck)) {
        gameOver = true;
        if (toCheck[0].children[0].classList.contains("x-obj")) xScore++;
        else oScore++;
    }
    toCheck = document.querySelectorAll(".diag-l");
    if (checkList(toCheck)) {
        gameOver = true;
        if (toCheck[0].children[0].classList.contains("x-obj")) xScore++;
        else oScore++;
    }
    toCheck = document.querySelectorAll(".diag-r");
    if (checkList(toCheck)) {
        gameOver = true;
        if (toCheck[0].children[0].classList.contains("x-obj")) xScore++;
        else oScore++;
    }
    toCheck = document.querySelector(".x-score");
    toCheck.textContent = xScore;
    toCheck = document.querySelector(".o-score");
    toCheck.textContent = oScore;
}

function hoverAction(grid) {
    if (gameOver) return;
    const hoverObj = new Image();
    hoverObj.src = xTurn ? "svg/x.svg" : "svg/o.svg";
    hoverObj.classList.add("hover-obj");
    if (grid.children.length == 0) grid.appendChild(hoverObj);
}

let grids = document.querySelectorAll(".game-grid");
for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener("mouseleave", () => {
        if (grids[i].children.length == 1 && grids[i].children[0].classList.contains("hover-obj")) grids[i].removeChild(grids[i].children[0]);
    });
    grids[i].addEventListener("click", () => {
        if (gameOver || grids[i].children.length == 0 || grids[i].children[0].classList.contains("game-obj")) return;
        const gameObj = new Image();
        gameObj.src = xTurn ? "svg/x.svg" : "svg/o.svg";
        gameObj.classList.add("game-obj");
        gameObj.classList.add(xTurn ? "x-obj" : "o-obj");
        grids[i].removeChild(grids[i].children[0]);
        grids[i].appendChild(gameObj);
        xTurn = !xTurn;
        checkGameState();
    });
}

const restart = document.querySelector(".restart-btn");
restart.onclick = () => {
    for (let i = 0; i < grids.length; i++) {
        while (grids[i].firstChild) {
            grids[i].removeChild(grids[i].lastChild);
        }
    }
    gameOver = false;
    gameNum++;
    xTurn = gameNum % 2 == 0;
}