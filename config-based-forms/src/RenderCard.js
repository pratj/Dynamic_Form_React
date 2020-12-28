import React from 'react'
import Card from '@material-ui/core/Card';
//import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const KeysToComponentMap = {
    card: Card,
    body: CardContent,
    title: Typography,
    text: Typography,
    cardAction: CardActions,
    button: Button
}

function renderer(config) {
    console.log(config)
    console.log("-------------")
    console.log(config.component)
    if(typeof KeysToComponentMap[config.component] !== "undefined"){
        return React.createElement(
            "h1",
            "This is a welcome text"
        )
        // return React.createElement(
        //     KeysToComponentMap[config.component],
        //     config.children && 
        //     (typeof config.children === "string"
        //         ? config.children
        //         : config.children.map(c => renderer(c))
        //     )
        // )
    }
}

export default renderer
