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
        // axios.post("http://localhost:9090/api/response", finalData).then((response) => {
        //     console.log("Quote => ", response.data)
        // })
        const quoteData = [
            {
                "partner": "Tata AIG",
                "image": "https://www.tataaig.com/logo.png",
                "quote": {
                    "idv": "50000",
                    "benefits": "Car benefits",
                    "others": ""
                }
            },
            {
                "partner": "Bajaj Allianz",
                "image": "https://m.economictimes.com/thumb/height-450,width-600,imgsize-145233,msid-73152868/bajaj-allianz-general-insurance.jpg",
                "quote": {
                    "idv": "40000",
                    "benefits": "Car benefits & Motor benefits",
                    "others": "Health benefits"
                }
            }
        ]
        history.push("/quote", {quoteData: JSON.stringify(quoteData)})
        setOpenPopup(false)
    }

    useEffect(() => {
        // axios.post("http://localhost:9090/api/", cardInfo).then((response) => {
        //     console.log(response.data)
        //     formFields = response.data
        // })
        setFormFields([
            {
                "name": "vehicleNo",
                "type": "text",
                "label": "Car Registration Number",
                "placeholder": "Car Registration Number"
            },
            {
                "name": "fullName",
                "type": "text",
                "label": "Full Name",
                "placeholder": "Enter Full Name"
            },
            {
                "name": "email",
                "type": "email",
                "label": "Email Address",
                "placeholder": "Enter Email Id"
              },
              {
                "name": "phoneNumber",
                "type": "tel",
                "label": "Phone Number",
                "placeholder": "Enter Phone Number"
              }
        ])
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
