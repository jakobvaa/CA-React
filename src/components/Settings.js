import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/RefreshSharp';
import Play from '@material-ui/icons/PlayArrowOutlined';
import Stop from '@material-ui/icons/PauseOutlined';


export default function Settings(props) {
    return (
        <div>
            {
                props.running ?
                    <IconButton aria-label="delete" color="secondary" onClick={props.stop} >
                        <Stop />
                    </IconButton> :
                    <IconButton aria-label="delete" color="secondary" onClick={props.start} >
                        <Play />
                    </IconButton>
            }
            <IconButton aria-label="delete" color="secondary" onClick={props.refresh} >
                <RefreshIcon />
            </IconButton>

        </div>
    )
}
