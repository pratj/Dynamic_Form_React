import React, {useEffect, useState} from 'react'
import RenderForm from './RenderForm';
import axios from 'axios'
import { useHistory } from "react-router";

function Form({cardInfo, setOpenPopup}) {

    const [formFields, setFormFields] = useState()
    const history = useHistory();

    const onSubmit = (data) => {
        const finalData = {category: cardInfo.category, product: cardInfo.product, formData: data}
        console.log("Final Data to be sent => ", finalData)
        axios.post("http://localhost:9090/api/response", finalData).then((response) => {
            console.log("Quote => ", response.data)
            const quoteData = response.data
            history.push("/quote", {quoteData: JSON.stringify(quoteData)})
        })
        setOpenPopup(false)
    }

    useEffect(() => {
        axios.get(`http://localhost:9090/api/config/category/${cardInfo.category}/product/${cardInfo.product}`).then((response) => {
            console.log("Form Data", response.data[0].fields)
            setFormFields(response.data[0].fields)
        })
        // setFormFields([
        //     {
        //         "name": "vehicleNo",
        //         "type": "text",
        //         "label": "Car Registration Number",
        //         "placeholder": "Car Registration Number"
        //     },
        //     {
        //         "name": "fullName",
        //         "type": "text",
        //         "label": "Full Name",
        //         "placeholder": "Enter Full Name"
        //     },
        //     {
        //         "name": "email",
        //         "type": "email",
        //         "label": "Email Address",
        //         "placeholder": "Enter Email Id"
        //       },
        //       {
        //         "name": "phoneNumber",
        //         "type": "tel",
        //         "label": "Phone Number",
        //         "placeholder": "Enter Phone Number"
        //       }
        // ])
    }, [])

    return (
        <div>
            {typeof formFields !== 'undefined' && 
                <RenderForm formFields={formFields} onSubmit={onSubmit}/>
            }
        </div>
    )
}

export default Form
