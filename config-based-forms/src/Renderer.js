import React, {Fragment} from 'react'

const mapPropsToConfig = config => {
    const configWithProps = []

    config.forEach(item => {
        if(item.component){
            const {component, ...props} = item
            configWithProps.push({
                ...props,
                Component: component
            })
        }
    })

    return configWithProps
}

function Renderer({config}) {

    if(!config){
        throw new Error('You are calling Renderer with no config.')
    }

    //console.log(config[0].fields)
    const configWithProps = mapPropsToConfig(config[1].fields)

    const renderComponents = (items) => {
        return items.map(item => {
            const {Component, ...props} = item
            return (
                <Fragment key={props.name}>
                    <Component {...props}/>
                </Fragment>
            )
        })
    }

    return renderComponents(configWithProps)
}

export default Renderer
