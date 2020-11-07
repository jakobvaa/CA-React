import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

export default function RadioButtons(props) {
    const [selectedValue, setSelectedValue] = React.useState("0");

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        props.change(event.target.value);
    };
    return (
        <div>
            <Radio
                checked={selectedValue === "0"}
                onChange={handleChange}
                value={"0"}
            />
            <Radio
                checked={selectedValue === "1"}
                onChange={handleChange}
                value={"1"}
            />
            <Radio
                checked={selectedValue === "2"}
                onChange={handleChange}
                value={"2"}
            />
        </div>
    );
}