<script>
import {gameMatrix, newNumber, getScore, moveRight, moveLeft, moveDown, moveUp, checkGameOver } from './utils/Board'
newNumber()
let computedMatrix = gameMatrix
let gameOver = false;
let points = getScore()
$: points = getScore()
$: computedMatrix = gameMatrix;
function keypressed(e){
    if(e.key === "ArrowRight"){
        moveRight();   
    } else if (e.key == "ArrowLeft"){
        moveLeft();
    } else if (e.key == "ArrowUp"){
        moveUp();
    } else if (e.key == "ArrowDown"){
        moveDown();
    }
    computedMatrix = gameMatrix;
    gameOver = checkGameOver()
    points = getScore()
    if (gameOver){
        alert("Game Over")
    }
}
</script>
<svelte:window on:keydown={keypressed} />
{#if gameOver}
<span>Game Over</span>
{/if}
<span>Points: {points}</span>
<div id="board" on:keydown={keypressed}>
    {#each computedMatrix as row}
        {#each row as cell}
            <div class={`square ${cell === 0 ? "zero" : ""}`}>{cell}</div>
        {/each}
    {/each}
</div>


<style>
#board{
    width: 500px;
    height: 500px;
    border-radius: 50px;
    background-color: white;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    border: 20px solid white;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
}
.square{
    text-align: center;
    padding-top: 45px;
    border-radius: 15px;
    border: 1px solid white;
    font-size: 30px;
    font-family:monospace
}

.square:nth-child(5n+1), .square:nth-child(3), .square:nth-child(8), .square:nth-child(9), .square:nth-child(14){
    background-color: bisque;
}

.square:nth-child(5n+2), .square:nth-child(5n), .square:nth-child(4), .square:nth-child(13){
    background-color: lightblue;
}

.zero{
    color: transparent;
}


</style>
