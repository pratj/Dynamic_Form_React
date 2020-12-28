import React from 'react'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

function SelectField({...props}) {
    return (
        <div>
            <Select {...props}>
                <MenuItem value={"England"}>England</MenuItem>
                <MenuItem value={"India"}>India</MenuItem>
                <MenuItem value={"Australia"}>Australia</MenuItem>
                <MenuItem value={"Singapore"}>Singapore</MenuItem>
            </Select>
        </div>
    )
}

export default SelectField
