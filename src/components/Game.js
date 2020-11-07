import React, { Component } from 'react'
import Board from './Board';
import Settings from './Settings';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: this.props.n,
            board: this.randomNBoard(this.props.n, 0),
            running: false
        }
        this.nextBoard = this.nextBoard.bind(this);
        this.startInterval = this.startInterval.bind(this);
        this.stopInterval = this.stopInterval.bind(this);
    }
    randomNBoard = (n, percentage) => {
        return Array(n).fill().map(() => Array(n).fill().map(() => Math.round(Math.random() - percentage)));
    }
    newBoard = () => {
        this.setState({
            board: this.randomNBoard(this.state.n, 0)
        });
    }

    startInterval = () => {
        if (!this.state.running) {
            this.setState({ running: true });
            this.interval = setInterval(() => {
                this.setState((prevState) => {
                    let next = this.nextBoard(prevState.board);

                    return (
                        {
                            board: next
                        }
                    )
                }
                )
            }, 100);
        }
    }
    stopInterval = () => {
        if (this.state.running) {
            this.setState({ running: false });
            clearInterval(this.interval);
        }
    }


    nb0 = (x, y) => {
        return (x !== 0 || y !== 0);
    }
    nb1 = (x, y) => {
        return x !== 0 && y !== 0;
    }
    nb2 = (x, y) => {
        return x !== 1 && y !== 1;
    }
    nextBoard = (board) => {
        let nbEval;
        let birth = 2;
        switch (this.props.nbEval) {
            case 0:
                nbEval = this.nb0;
                birth = 3;
                break;
            case 1:
                nbEval = this.nb1;
                break;
            case 2:
                nbEval = this.nb2;
                break;
            default:
                nbEval = this.nb0;
                break;
        }
        // Assuming nxn board. Must be changed if nxm in the future
        let newBoard = Array(board.length).fill().map(() => Array(board.length).fill().map(() => 0));
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                let aliveNeighbours = 0;
                for (let x = -1; x < 2; x++) {
                    for (let y = -1; y < 2; y++) {
                        // Will only consider diagonal neighbours. Works well with dead nb 2 alive
                        // x !== 0 && y !== 0

                        // Reduce area from left upper corner
                        // x !== 1 && y !== 1 nb 2

                        // Original game of life
                        // x !== 0 || y !== 0

                        if (nbEval(x, y)) {
                            if (!((i + x < 0) || (i + x >= board.length) || (j + y < 0) || (j + y >= board.length)) && board[j + y][i + x]) {
                                aliveNeighbours += 1;
                            }
                        }
                    }
                }
                if (board[j][i] === 1) {
                    if (aliveNeighbours === 2 || aliveNeighbours === 3) {
                        newBoard[j][i] = 1
                    }
                }
                else {
                    if (aliveNeighbours === birth) {
                        newBoard[j][i] = 1
                    }
                }

            }
        }
        return newBoard;
    }
    setN = (n) => {
        this.setState({
            n: n
        });
    }

    componentWillUnmount() {
        this.stopInterval();
    }

    render() {
        return (
            <div>
                <Board
                    positions={this.state.board}
                    n={this.state.n}
                    board={this.state.board} />
                <Settings refresh={() => this.newBoard()} stop={() => this.stopInterval()} start={() => this.startInterval()} running={this.state.running} />
            </div>
        )
    }
}

export default Game
