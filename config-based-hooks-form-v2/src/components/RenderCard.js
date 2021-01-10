import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Dialog, DialogContent, DialogTitle, Divider, Grid, Typography } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core';
import axios from 'axios'
import CloseIcon from '@material-ui/icons/Close';
import '../RenderCard.css'
import Form from './Form';

const useStyles = makeStyles(theme => ({
    dialogWrapper : {
        position: 'absolute',
        top: theme.spacing(5)
    },
    root: {
        flexGrow: 1
    }
}))

function RenderCard() {

    const [cardConfig, setCardConfig] = useState()

    const [cardInfo, setCardInfo] = useState({
        category: "",
        product: ""
    })

    const [open, setOpen] = useState(false)

    // var cardConfig;

    const handleClickOpen = (card) => {
        console.log(card.category, card.product)
        setCardInfo({
            category: card.category,
            product: card.product
        })
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        axios.get("http://localhost:9090/api/categories").then((response) => {
            console.log(response.data)
            setCardConfig(response.data)
        })
        // setCardConfig([
        //     {
        //         "category": "Motor Insurance", 
        //         "product": "Car Insurance",
        //         "image": "https://images.moneycontrol.com/static-mcnews/2018/03/car-insurance-770x433.jpg"
        //     },
        //     {
        //         "category": "Travel Insurance",
        //         "product": "Overseas Travel Insurance",
        //         "image": "https://www.shriramgi.com/images/travelproductbg.jpg"
        //     },
        //     {
        //         "category": "Health Insurance",
        //         "product": "General Health Insurance",
        //         "image": "https://images.financialexpress.com/2019/08/health-insurance.jpg"
        //     }
        // ])
    }, [])

    const classes = useStyles()

    const renderCard = (card, index) => {
        return (
            <Grid item xs={12} sm={4}>
                <Card key={index} style={{maxWidth: 345, margin: 'auto', marginTop: 20}}>
                    <CardActionArea onClick={() => handleClickOpen(card)}>
                        <CardMedia component="img" image={card.image} height="140" title={card.category}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.category}
                            </Typography>
                        {/* <Divider/>     */}
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions>
                        <Button size="small" color="primary" variant="outlined" onClick={() => handleClickOpen(card)}>
                            Proceed
                        </Button>
                    </CardActions> */}
                </Card>
            </Grid>
        )
    }

    return (
        <div className={`cardRender ${classes.root1}`}>
            <Grid container spacing={3}>
                {typeof cardConfig !== 'undefined' && cardConfig.map(renderCard)}
            </Grid>
            {cardInfo.category !== '' && 
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" fullWidth={true} classes = {{paper : classes.dialogWrapper}}>
                    <DialogTitle>
                        <div className="dialogTitle">
                            <div className="dialogTitle__close">
                                <CloseIcon onClick={handleClose}/>
                            </div>
                            <div className="dialogTitle__description">
                                <Typography component="h3" variant="h5">
                                    {cardInfo.product}
                                </Typography>
                            </div>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Form cardInfo={cardInfo} setOpenPopup={setOpen}/>
                    </DialogContent>
                </Dialog>
            }
        </div>
    )
}

export default RenderCard
