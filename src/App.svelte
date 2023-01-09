<script>
let gameMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
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
    background-color: black;
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
    justify-content: center;
    text-align: center;
    align-items: center;
}

.square:nth-child(2n){
    background-color: bisque;
}

.square:nth-child(2n-1){
    background-color: yellow;
}
</style>
