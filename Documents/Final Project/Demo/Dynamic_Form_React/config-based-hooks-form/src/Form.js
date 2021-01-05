import React from 'react'
import {FormConfig} from './FormConfig';
import RenderForm from './RenderForm';

function Form({cardInfo, setOpenPopup}) {

    const onSubmit = (data) => {
        console.log("Final Data to be sent => ",
        {category: formConfig.category, product: formConfig.product, partner: formConfig.partner, formData: data, apiData: formConfig.api})
        setOpenPopup(false)
    }

    // Mapping cardInfo to Form Config
    //Will return an array of size 1 therefore fetching the Oth index
    const formConfig = FormConfig.filter((formItem) => {
        return (formItem.category === cardInfo.category) && (formItem.partner === cardInfo.partner)
    })[0]

    return (
        <div>
            <RenderForm
                formConfig={formConfig}
                onSubmit={onSubmit}
            />
        </div>
    )
}

export default Form
