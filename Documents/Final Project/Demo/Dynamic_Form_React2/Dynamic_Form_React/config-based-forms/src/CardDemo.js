import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345,
//       marginTop: 20,
//       margin: 'auto'
//     }
//   });

function CardDemo() {

    //const classes = useStyles();

    return (
        <div className="cardDemo">
            <Grid container justify='center'>
                <Grid item xs={12} sm={6}>
                <Card style={{maxWidth: 345, margin: 'auto', marginTop: 20}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>  
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Card style={{maxWidth: 345, margin: 'auto', marginTop: 20}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>  
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default CardDemo
