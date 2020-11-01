import React from 'react'

export default function Cell(props) {
    const color = props.alive ? 'yellow' : 'black';
    return (
        <div style={{ backgroundColor: color, width: 10, height: 10, gridColumn: props.i, gridRow: props.j }}>
        </div>
    )
}
