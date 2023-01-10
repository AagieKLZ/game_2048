import NumberGenerator from "./NumberGenerator";

var gameMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]

const generator = new NumberGenerator();

function printBoard(){
    console.log(gameMatrix);
}

function getScore(){
    let sum = 0;
    for (let i = 0; i < gameMatrix.length; i++){
        for (let j = 0; j < gameMatrix[i].length; j++){
            sum += gameMatrix[i][j]
        }
    }
    return sum;
}

function newNumber(){
    let {row, col} = generator.generatePos(gameMatrix);
    gameMatrix[row][col] = generator.generateNumber();
    console.log(gameMatrix);
    printBoard();
}

function checkGameOver(){
    for (let i = 0; i < gameMatrix.length; i++){
        for (let j = 0; j < gameMatrix.length; j++){
            if (gameMatrix[i][j] === 0){
                return false;
            }
        }
    }
    for (let i = 0; i < gameMatrix.length - 1; i++){
        for (let j = 0; j < gameMatrix.length - 1; j++){
            if(gameMatrix[i][j+1] === gameMatrix[i][j] || gameMatrix[i+1][j] === gameMatrix[i][j]){
                return false;
            }
        }
    }
    for (let i = 0; i < gameMatrix.length - 1; i++){
        if (gameMatrix[i][gameMatrix.length - 1] === gameMatrix[i + 1][gameMatrix.length - 1] || gameMatrix[gameMatrix.length - 1][i+1] === gameMatrix[gameMatrix.length - 1][i]){
            return false;
        }
    }
    return true;
}

function moveRight(){
    let prevMatrix = gameMatrix.map(row => row.slice());
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = gameMatrix[i].length - 1; j >= 0; j--) {
            if(gameMatrix[i][j] === 0){
                for (let k = j - 1; k >= 0; k--) {
                    if(gameMatrix[i][k] !== 0){
                        gameMatrix[i][j] = gameMatrix[i][k];
                        gameMatrix[i][k] = 0;
                        break;
                    }
                }
            }
        }
    }
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = gameMatrix[i].length - 1; j >= 0; j--) {
            if(gameMatrix[i][j] === gameMatrix[i][j - 1]){
                gameMatrix[i][j] *= 2;
                gameMatrix[i][j - 1] = 0;
            }
        }
    }
    if (compare(prevMatrix)){
        newNumber();
    } else{
        checkGameOver()
    }
}
function compare(old){
    for (let i = 0; i < gameMatrix.length; i++){
        for (let j = 0; j < gameMatrix[i].length; j++){
            if(old[i][j] !== gameMatrix[i][j]){
                return true;
            }
        }
    }
    return false;
}
function moveLeft(){
    let prevMatrix = gameMatrix.map(row => row.slice());
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = 0; j < gameMatrix[i].length; j++) {
            if(gameMatrix[i][j] === 0){
                for (let k = j + 1; k < gameMatrix[i].length; k++) {
                    if(gameMatrix[i][k] !== 0){
                        gameMatrix[i][j] = gameMatrix[i][k];
                        gameMatrix[i][k] = 0;
                        break;
                    }
                }
            }
        }
    }
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = 0; j < gameMatrix[i].length; j++) {
            if(gameMatrix[i][j] === gameMatrix[i][j + 1]){
                gameMatrix[i][j] *= 2;
                gameMatrix[i][j + 1] = 0;
            }
        }
    }
    if (compare(prevMatrix)){
        newNumber();
    } else{
        checkGameOver()
    }
}
function moveUp(){
    let prevMatrix = gameMatrix.map(row => row.slice());
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = 0; j < gameMatrix[i].length; j++) {
            if(gameMatrix[j][i] === 0){
                for (let k = j + 1; k < gameMatrix[i].length; k++) {
                    if(gameMatrix[k][i] !== 0){
                        gameMatrix[j][i] = gameMatrix[k][i];
                        gameMatrix[k][i] = 0;
                        break;
                    }
                }
            }
        }
    }
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = 0; j < gameMatrix[i].length - 1; j++) {
            if(gameMatrix[j][i] === gameMatrix[j + 1][i]){
                gameMatrix[j][i] *= 2;
                gameMatrix[j + 1][i] = 0;
            }
        }
    }
    if (compare(prevMatrix)){
        newNumber();
    } else{
        checkGameOver()
    }
}
function moveDown(){
    let prevMatrix = gameMatrix.map(row => row.slice());
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = gameMatrix[i].length - 1; j >= 0; j--) {
            if(gameMatrix[j][i] === 0){
                for (let k = j - 1; k >= 0; k--) {
                    if(gameMatrix[k][i] !== 0){
                        gameMatrix[j][i] = gameMatrix[k][i];
                        gameMatrix[k][i] = 0;
                        break;
                    }
                }
            }
        }
    }
    for (let i = 0; i < gameMatrix.length; i++) {
        for (let j = gameMatrix[i].length - 1; j >= 1; j--) {
            if(gameMatrix[j][i] === gameMatrix[j - 1][i]){
                gameMatrix[j][i] *= 2;
                gameMatrix[j - 1][i] = 0;
            }
        }
    }
    if (compare(prevMatrix)){
        newNumber();
    }
}

export {gameMatrix, printBoard, getScore, newNumber, checkGameOver, moveRight, moveLeft, moveUp, moveDown};