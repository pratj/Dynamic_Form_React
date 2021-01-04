import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {CardConfig} from './CardConfig'
import Form from './Form';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core';
import './Dialog.css'

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

    const [cardInfo, setCardInfo] = useState({
        category: "",
        partner: "",
        product: "",
    })

    const [open, setOpen] = useState(false)

    const handleClickOpen = (card) => {
        console.log(card.category, card.partner)
        setCardInfo({
            category: card.category,
            partner: card.partner,
            product: card.product
        })
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const classes = useStyles()

    const renderCard = (card, index) => {
        return (
                <Grid item xs={12} sm={6}>
                <Card key={index} style={{maxWidth: 345, margin: 'auto', marginTop: 20}}>    
                <CardMedia image={card.image} style={{height: 140}}/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {card.text}
                    </Typography>  
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => handleClickOpen(card)}>
                        Proceed
                    </Button>
                </CardActions>
                </Card>
                </Grid>
        )
    }

    return (
        <div className="cardRender">
            <Grid container>
                {CardConfig.map(renderCard)}
            </Grid>
            {cardInfo.category !== '' && 
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="sm" fullWidth={true} classes = {{paper : classes.dialogWrapper}}>
                    <DialogTitle>
                        <div className="dialogTitle">
                            <div className="dialogTitle__close">
                                <CloseIcon onClick={handleClose}/>
                            </div>
                            <p className="dialogTitle_description">{cardInfo.product} By {cardInfo.partner}</p>
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
