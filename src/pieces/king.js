import Piece from './Piece'
import board from '../board'

class King extends Piece {
    constructor(x, y, side) {
        super(x, y, side);
        this.name = 'king';
        this.display = `<i class="fas fa-chess-king ${side}"></i>`; //fontawesome king
        this.firstMove = false;
        this.castling = false;
    }
    findLegalMoves() {

        const possibleMoves = [];

        /* tablica z zakresem dozwolonych ruchów - dla osi X i Y */
        const ruchyXY = [
            [-1, -1, -1, 0, 1, 1, 1, 0],
            [-1, 0, 1, 1, 1, 0, -1, -1]
        ];

        for (let direction = 0; direction < 8; direction++) {
            let newX = this.x + ruchyXY[0][direction];
            let newY = this.y + ruchyXY[1][direction];
            // console.log(newX, newY)
            // console.log(board[this.x][this.y])
            if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
                if (board[newX][newY] == undefined || board[newX][newY].side != this.side) {
                    // console.log(newX, newY);
                    console.log(board[newX][newY])
                    possibleMoves.push(`${newX},${newY}`);
                }
            }
        }

        //Small castling
        if (!this.wasMoved && !board[this.x][7].wasMoved && !board[this.x][this.y + 1]) {
            possibleMoves.push(`${this.x},${this.y + 2}`)
        }

        //Big castling
        if (!this.wasMoved && !board[this.x][0].wasMoved && !board[this.x][this.y - 1]) {
            possibleMoves.push(`${this.x},${this.y - 2}`)
        }

        return possibleMoves;
    }

}


export default King;