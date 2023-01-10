<script>
import {gameMatrix, newNumber, getScore, moveRight, moveLeft, moveDown, moveUp, checkGameOver } from './utils/Board'
newNumber()
let computedMatrix = gameMatrix
let gameOver = false;
let points = getScore()
$: points = getScore()
$: computedMatrix = gameMatrix;
let movement = ""
function keypressed(e){
    switch(e.key){
        case "ArrowRight":
            moveRight()
            movement = "R"
            break
        case "ArrowLeft":
            moveLeft()
            movement = "L"
            break
        case "ArrowUp":
            moveUp() 
            movement = "U"
            break
        case "ArrowDown":
            moveDown()
            movement = "D"
            break
    }
    computedMatrix = gameMatrix;
    points = getScore()
    gameOver = checkGameOver()
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
<div class="anim">{movement}</div>
<button>Reset</button>
<div id="board" on:keydown={keypressed}>
    {#each computedMatrix as row}
        {#each row as cell}
            <div class={`square ${cell === 0 ? "zero" : "nonzero"}`} itemid={Math.log2(cell).toString()}>{cell}</div>
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

.square:nth-child(5n+1).nonzero, .square:nth-child(3).nonzero, .square:nth-child(8).nonzero, .square:nth-child(9).nonzero, .square:nth-child(14).nonzero{
    border: inset 8px;
    border-color: rgb(240, 214, 182);
}

.nonzero{
    border: inset 8px;
    border-color: rgb(160, 199, 212)
}

.anim{
    position: absolute;
    left: 50%;
    top: 10%;
    animation: cubic-bezier(0.075, 0.82, 0.165, 1)
}

/* .square[itemid="1"]{ background-color: #FFB6C1}
.square[itemid="2"]{ background-color: #FFA07A}
.square[itemid="3"]{ background-color: #FF7F50}
.square[itemid="4"]{ background-color: #FF4500}
.square[itemid="5"]{ background-color: #FF0000}
.square[itemid="6"]{ background-color: #8B0000}
.square[itemid="7"]{ background-color: #800000}
.square[itemid="8"]{ background-color: #A52A2A}
.square[itemid="9"]{ background-color: #B22222}
.square[itemid="10"]{ background-color: #CD5C5C}
.square[itemid="11"]{ background-color: #DC143C} */



</style>
