import React from 'react'
import RenderCard from './RenderCard'

const CardConfig = [
    {
        component: "card",
        children: [
            {
                component: "body",
                children: [
                    {
                        component: "title",
                        children: "Lizard"
                    },
                    {
                        component: "text",
                        children: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                    }
                ]
            },
            {
                component: "cardAction",
                children: [
                    {
                        component: "button",
                        children: "Share"
                    },
                    {
                        component: "button",
                        children: "Learn More"
                    }
                ]
            }
        ]
    }

]

function CardConfigDemo() {
    return (
        <div className="cardConfigDemo">
            {CardConfig.map(config => RenderCard(config))}            
        </div>
    )
}

export default CardConfigDemo
