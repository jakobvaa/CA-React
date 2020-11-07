import React from 'react'

export default function Cell(props) {
    const color = props.alive ? 'yellow' : 'black';
    return (
        <div style={{ backgroundColor: color, width: 8, height: 8, gridColumn: props.i, gridRow: props.j }}>
        </div>
    )
}
