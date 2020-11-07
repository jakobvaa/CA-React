import React, { Component } from 'react';
import Game from './Game';
import RadioButtons from './Radios'

export default class GameOfLife extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nbEval: 0,
        }
        this.setEval = this.setEval.bind(this);
    }
    setEval = (nb) => {
        this.setState({
            nbEval: parseInt(nb)
        })
    }
    render() {
        return (
            <div style={{ alignItems: 'center' }}>
                <RadioButtons change={(nb) => this.setEval(nb)} />
                <Game n={this.props.n} nbEval={this.state.nbEval} />
            </div>
        )
    }
}
