import React, {useState} from 'react'
import {FormConfig} from './FormConfig';
import RenderForm from './RenderForm';
import axios from 'axios'
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Try from './Try';

function Form({cardInfo, setOpenPopup}) {

    // const [quote, setQuote] = useState({})
    // var quote
    const history = useHistory();

    const onSubmit = (data) => {
        console.log("Final Data to be sent => ",
        {category: formConfig.category, product: formConfig.product, partner: formConfig.partner, formData: data, apiData: formConfig.api})
        const finalData = {category: formConfig.category, product: formConfig.product, partner: formConfig.partner, formData: data, apiData: formConfig.api}
        axios.post("http://localhost:9090/api/response", finalData).then((response) => {
            console.log(response.data)
            // setQuote(response.data)
            const quoteData = {
                cardData: cardInfo,
                quoteValue: response.data
            }
            history.push("/quote", { finalData: JSON.stringify(quoteData)})
            // quote = response.data
        })
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
