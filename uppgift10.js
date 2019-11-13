var boardSize = 8;
var boardString = '';
// loops to calc y and x axis hash placement
for (var y = 0; y < boardSize; y++){
    for (var x = 0; x < boardSize; x++) {
        // x + y divided by 2 is === to 0
        if ((x + y) % 2 === 0){
            // true add hashes to string
            boardString += ' ';
        } else {
            boardString += '#';
        }
    }
    // newline for each set of hashes
    boardString += '\n';
}
console.log(boardString);