import React, {useState, useMemo} from 'react'
import { getConfig } from './config'
import Renderer from './Renderer'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useForm, Controller} from 'react-hook-form'
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

function Form({cardInfo, setOpenPopup}) {

    const classes = useStyles();
    const {handleSubmit} = useForm()

    const [state, setState] = useState({
        vehicleNo:"",
        fullName: "",
        email: "",
        phoneNumber: "",
        startDate: "",
        endDate: "",
        destination: ""
    })

    const onSubmit = () => {
        console.log("state", state)
        // Testing request to mountebank to get the quote
        axios.get("http://localhost:9000/motor-insurance/car-insurance/tata-aig/quote").then(response => {
            console.log(response.data.quote)
        })
        // data that will be sent to the backend (Quote will be generated from the backend)
        // post request will be sent to the spring backend.

        console.log("Final Data to be sent => ", 
        {category: formConfig.category, product: formConfig.product, partner: formConfig.partner, formData: state, apiData : formConfig.api})
        setOpenPopup(false)
    }

    const handleOnChange = field => event => {
        const {value} = event.target
        setState(prevState => ({ ...prevState, [field]: value}))
    }

    const config = useMemo(() => {
        return getConfig({state, onChange: handleOnChange})
    }, [state])

    // Mapping cardInfo to Form Config
    //Will return an array of size 1 therefore fetching the Oth index
    const formConfig = config.filter((formItem) => {
        return (formItem.category === cardInfo.category) && (formItem.partner === cardInfo.partner)
    })[0]

    return (
        <Container component="main" maxWidth="xs" className="registration">
            <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Provide the following details
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <Renderer formConfig={formConfig}/>
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

export default Form
