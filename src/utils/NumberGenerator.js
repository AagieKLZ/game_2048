class NumberGenerator{
    opts = [2, 2, 2, 4]
    generateNumber(){
        return this.opts[Math.floor(Math.random() * this.opts.length)]
    }
    /**
     * @param {number[][]} matrix
     */
    generatePos(matrix){
        this.matrix = matrix
        let {row, col} = {row : Math.floor(Math.random() * 4), col : Math.floor(Math.random() * 4)};
        if(matrix[row][col] !== 0){
            return this.generatePos(this.matrix);
        }
        return {row, col};
    }
}

export default NumberGenerator;