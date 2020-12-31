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

function Renderer({config, cardInfo}) {

    if(!config){
        throw new Error('You are calling Renderer with no config.')
    }

    // Mapping cardInfo to Form Config
    //Will return an array of size 1 therefore fetching the Oth index
    const formConfig = config.filter((formItem) => {
        return (formItem.category === cardInfo.category) && (formItem.partner === cardInfo.partner)
    })[0]

    const configWithProps = mapPropsToConfig(formConfig.fields)

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
