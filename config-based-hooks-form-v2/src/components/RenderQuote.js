import { Grid } from '@material-ui/core'
import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

function RenderQuote({locationData}) {

    const quoteData = JSON.parse(locationData.location.state.quoteData)
    console.log(quoteData)

    const capitalize = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const renderQuote = (quote) => {
        let quotes=[]
        for(let key in quote){
            // if(quote[key] !== ""){
            //     quotes.push(<Typography variant="body2" color="textSecondary" component="p">{Capitalize(key)}: {quote[key]}</Typography>)
            // }
            if( key !== "partner" && key !== "image" && quote[key] !== ""){
                quotes.push(<Typography variant="body2" color="textSecondary" component="p">{capitalize(key)}: {quote[key]}</Typography>)
            }
        }
        return quotes
    }

    const renderPartner = (partner, index) => {
        return (
            <Grid item xs={12} sm={6}>
                <Card key={index} style={{maxWidth: 345, margin: 'auto', marginTop: 20}}>    
                    <CardMedia image={partner.image} style={{height: 140}}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {partner.partner}
                        </Typography>
                        <Divider/>
                        <br></br>
                        {/* {(typeof (partner.quote) === 'object') && <>{renderQuote(partner.quote)}</>} */}
                        {renderQuote(partner)}
                    </CardContent>
                </Card>
            </Grid>
        )
    }

    return (
        <div>
            <Grid container>
                {quoteData.map(renderPartner)}
            </Grid>
        </div>
    )
}

export default RenderQuote
