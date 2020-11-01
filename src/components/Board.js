import React from "react";
import Cell from './Cell.js';
import "./board.css";

function Board(props) {
    const matrix = Array(props.n).fill().map(() => [])
    for (let i = 0; i < props.n; i++) {
        matrix.push([])
        for (let j = 0; j < props.n; j++) {
            // Add 1 to row and column counter. CSS Grid is 1 indexed
            matrix[i][j] = <Cell alive={props.board[i][j]} i={i + 1} j={j + 1} />
        }
    }
    return (
        <div class="board-container">
            {
                matrix
            }
        </div>
    );
}

export default Board;
