// console.log('knight is a horse!');

const makeGameBoard = () => {
    let boardArr = [];
    let i = 0;
    while(i < 8) {
        for (let j = 0; j < 8; j++) {
            boardArr.push([i, j]);
        }
        i++;
    }
    console.log(boardArr);
}

makeGameBoard();