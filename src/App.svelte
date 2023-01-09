<script>
import NumberGenerator from './utils/NumberGenerator'
let gameMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
console.log(NumberGenerator())
</script>

<div id="board">
    {#each gameMatrix as row}
        {#each row as cell}
            <div class="square">{cell}</div>
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
    padding-top: 50px;
    border-radius: 15px;
    border: 1px solid white;
}

.square:nth-child(5n+1), .square:nth-child(3), .square:nth-child(8), .square:nth-child(9), .square:nth-child(14){
    background-color: bisque;
}

.square:nth-child(5n+2), .square:nth-child(5n), .square:nth-child(4), .square:nth-child(13){
    background-color: lightblue;
}


</style>
