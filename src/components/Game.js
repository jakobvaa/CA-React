import React, { Component } from 'react'
import Board from './Board';
import Settings from './Settings';

export class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n: this.props.n,
            board: this.randomNBoard(this.props.n, 0.25)
        }
    }
    randomNBoard = (n, percentage) => {
        return Array(n).fill().map(() => Array(n).fill().map(() => Math.round(Math.random() - percentage)));
    }
    newBoard = () => {
        this.setState({
            board: this.randomNBoard(this.state.n)
        });
    }
    nextBoard = (board) => {

    }
    setN = (n) => {
        this.setState({
            n: n
        });
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log("HEY");
        }, 1000);
    }


    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <Board
                    positions={this.state.board}
                    n={this.state.n}
                    board={this.state.board} />
                {
                    this.props.withSettings ?
                        <Settings />
                        :
                        null
                }
            </div>
        )
    }
}

export default Game
