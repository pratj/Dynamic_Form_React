import React from 'react'
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

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

function RenderForm({formFields, onSubmit}) {

    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm()

    const renderFields = (fields) => {

        return fields.map(field => {
            const { name, type, label, placeholder } = field

            switch(type){

                case 'text':
                case 'email':
                case 'tel':
                case 'date':
            }
        })
    }

    return (
        <Container component="main" maxWidth="xs" className="renderForm">
            <div className={classes.paper}>
                <Typography variant="subtitle1">
                    Provide the following details
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    {renderFields(formFields)}
                </form>
            </div>
        </Container>
    )
}

export default RenderForm
