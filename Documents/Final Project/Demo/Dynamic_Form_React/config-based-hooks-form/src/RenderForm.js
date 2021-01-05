import React from 'react'
import { useForm, Controller } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import { MenuItem, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function RenderForm({formConfig, onSubmit}) {

    const classes = useStyles();
    const { register, handleSubmit, errors, control } = useForm()
    const {fields} = formConfig

    const renderFields = (fields) => {

        return fields.map(field => {
            const { name, type, label, placeholder } = field

            switch(type){

                case 'text':
                    return (
                        <div key={name}>
                            <TextField id={name} name={name} type="text" label={label} placeholder={placeholder} inputRef={register} 
                                variant="outlined" margin="normal" required fullWidth/>
                        </div>
                    )

                case 'email':
                    return (
                        <div className="input-field" key={name}>
                            <TextField id={name} name={name} type="email" label={label} placeholder={placeholder} inputRef={register}
                                variant="outlined" margin="normal" required fullWidth/>
                        </div>
                    )

                case 'tel':
                    return (
                        <div key={name}>
                            <TextField id={name} name={name} type="tel" label={label} placeholder={placeholder} inputRef={register}
                                variant="outlined" margin="normal" required fullWidth/>
                        </div>
                    )
                
                case 'date':
                    return (
                        <div key={name}>
                            <TextField id={name} name={name} type="date" label={label} inputRef={register}
                                variant="outlined" margin="normal" required fullWidth/>
                        </div>
                    )

                // case 'select':
                //     return (
                //         <Controller
                //         key={name}
                //         name={name}
                //         control={control}
                //         options={[
                //             { value: "England", label: "England" },
                //             { value: "Australia", label: "Australia" },
                //             { value: "Singapore", label: "Singapore" }
                //         ]}
                //         as={Select}
                //         />
                //         // <Select id={name} name={name} label={label} inputRef={register} 
                //         //     variant="outlined" margin="normal" required fullWidth>
                //         //         <MenuItem value={"England"}>England</MenuItem>
                //         //         <MenuItem value={"India"}>India</MenuItem>
                //         //         <MenuItem value={"Australia"}>Australia</MenuItem>
                //         //         <MenuItem value={"Singapore"}>Singapore</MenuItem>
                //         // </Select>
                //     )

                default:
                    return (
                        <div key={name}>
                            <span style={{color: 'red'}}>Invalid Field</span>
                        </div>
                    )
            }
        })
    }

    return (
        <Container component="main" maxWidth="xs" className="registration">
            <div className={classes.paper}>
                <Typography variant="subtitle1">
                    Provide the following details
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    {renderFields(fields)}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                    Submit
                    </Button>
                </form>
            </div>
        </Container>
    )
}

export default RenderForm
