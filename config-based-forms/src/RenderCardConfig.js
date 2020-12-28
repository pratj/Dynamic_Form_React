import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardConfig} from './CardConfig'

function RenderCardConfig() {

    const renderCard = (card, index) => {
        return (
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
                    <Button size="small" color="primary" href={card.href}>
                        Proceed
                    </Button>
                    {/* <Button size="small" color="primary">
                        Learn More
                    </Button> */}
                </CardActions>
            </Card>
        )
    }

    return (
        <div className="cardRender">
            {CardConfig.map(renderCard)}  
        </div>
    )
}

export default RenderCardConfig
