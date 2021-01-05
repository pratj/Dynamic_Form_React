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

function Renderer({formConfig}) {

    if(!formConfig){
        throw new Error('You are calling Renderer with no config.')
    }

    // const formConfig = config.filter((formItem) => {
    //     return (formItem.category === cardInfo.category) && (formItem.partner === cardInfo.partner)
    // })[0]

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
