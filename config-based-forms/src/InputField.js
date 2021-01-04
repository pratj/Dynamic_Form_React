import React from 'react'
import TextField from '@material-ui/core/TextField';

function InputField({...props}) {
    return (
        <div>
            {/* {label ? <label htmlFor={props.id}></label> : null}
            <input {...props}/>             */}
            <TextField {...props}/>
        </div>
    )
}

export default InputField
