import React from 'react'
import TextField from '@material-ui/core/TextField';
import {useForm, Controller} from 'react-hook-form'

function InputField({...props}) {

    const {register, errors} = useForm()
    const fieldName = props.name
    return (
        <div>
            {/* {label ? <label htmlFor={props.id}></label> : null}
            <input {...props}/>             */}
            <TextField {...props} variant="outlined" margin="normal" required fullWidth/>
            {errors.fieldName && <span>This field is required</span>}
        </div>
    )
}

export default InputField
