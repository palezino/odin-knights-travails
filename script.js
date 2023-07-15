// create all possibles knight moves from a start point
class Knight {
  constructor(start) {
    this.upLeft = [start[0] - 2, start[1] - 1];
    this.leftUp = [start[0] - 1, start[1] - 2];
    this.leftDown = [start[0] + 1, start[1] - 2];
    this.downLeft = [start[0] + 2, start[1] - 1];
    this.downRight = [start[0] + 2, start[1] + 1];
    this.rightDown = [start[0] + 1, start[1] + 2];
    this.rightUp = [start[0] - 1, start[1] + 2];
    this.upRight = [start[0] - 2, start[1] + 1];
  }
  // return an array of each moves from the start point
  makeArr() {
    let arr = [];
    arr.push(
      this.upLeft,
      this.leftUp,
      this.leftDown,
      this.downLeft,
      this.downRight,
      this.rightDown,
      this.rightUp,
      this.upRight
    );
    return arr;
  }
}
// check if a node belongs to gameboard field
const checkItem = (node, path) => {
  let result = { node, path };
  // node if out of the gameboard if one of coordinates is less then 0 or higher then 7
  if (node[0] < 0 || node[0] > 7 || node[1] < 0 || node[1] > 7) {
    return null;
  }
  // if node belongs to the gameboard return the node itself plus record it as the first step of a path
  return result;
};
// display the path from a start point to the end point
const knightMoves = (start, end) => {
  // add eligible nodes to the queue and take the first one as the current
  let queue = [checkItem(start, [start])];
  let current = queue.shift();
  // while current node doesn't equal to the end point go through each move and its next moves and record the path
  while (current.node[0] !== end[0] || current.node[1] !== end[1]) {
    let moves = new Knight(current.node).makeArr();
    moves.forEach((move) => {
      let node = checkItem(move, current.path.concat([move]));
      if (node) {
        queue.push(node);
      }
    });
    current = queue.shift();
  }
  // show the path in the console
  let path = "";
  for (let i in current.path) {
    path += `[${current.path[i]}]\n`;
  }
  let message = `You made it in ${
    current.path.length - 1
  } moves! Here's your path:\n${path}`;
  console.log(message);
};

knightMoves([3, 3], [4, 3]);
