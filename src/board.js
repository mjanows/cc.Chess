import Rook from './pieces/rook';
import Pawn from './pieces/pawn';
import King from './pieces/king';
import Bishop from './pieces/bishop';
import Queen from './pieces/queen';


const board = new Array(8);
for (let i = 0; i < 8; i++) {
    board[i] = new Array(8);
}
//mamy pustą tablice tu trzeba zaimportować figury wedle przykładu dla pionka
/*let pawn = new Pawn(6, 0, 'white');
board[pawn.x][pawn.y] = pawn;
pawn = new Pawn(6, 1, 'white');
board[pawn.x][pawn.y] = pawn;*/

let pawn;
for(let y = 0; y < 8; y++){
    pawn = new Pawn(1, y, 'black');
    board[pawn.x][pawn.y] = pawn;
}
for (let y = 0; y < 8; y++) {
    pawn = new Pawn(6, y, 'white');
    board[pawn.x][pawn.y] = pawn;
}

let rook = new Rook(7, 0, 'white');
board[rook.x][rook.y] = rook;
rook = new Rook(7, 7, 'white');
board[rook.x][rook.y] = rook;
rook = new Rook(0, 1, 'black');
board[rook.x][rook.y] = rook;
rook = new Rook(0, 7, 'black');
board[rook.x][rook.y] = rook;

let bishop = new Bishop(0,1, 'black');
board[bishop.x][bishop.y]=bishop;

bishop = new Bishop(0,6, 'black');
board[bishop.x][bishop.y]=bishop;

bishop = new Bishop(7,1, 'white');
board[bishop.x][bishop.y]=bishop;

bishop = new Bishop(7,6, 'white');
board[bishop.x][bishop.y]=bishop;

let queen = new Queen(7, 3, 'white');
board[queen.x][queen.y] = queen;
queen = new Queen(0, 3, 'black');
board[queen.x][queen.y] = queen;
export default board;