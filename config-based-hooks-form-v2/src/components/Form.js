import React from 'react'
import RenderForm from './RenderForm';
import axios from 'axios'

function Form({cardInfo, setOpenPopup}) {

    var formFields;

    const onSubmit = (data) => {
        const finalData = {category: cardInfo.category, product: cardInfo.product, formData: data}
        console.log("Final Data to be sent => ", finalData)
        axios.post("http://localhost:9090/api/response", finalData).then((response) => {
            console.log("Quote => ", response.data)
        })
        setOpenPopup(false)
    }

    useEffect(() => {
        axios.post("http://localhost:9090/api/", cardInfo).then((response) => {
            console.log(response.data)
            formFields = response.data
        })
    }, [formFields])

    return (
        <div>
            {typeof formFields !== 'undefined' && 
                <RenderForm formFields={formFields} onSubmit={onSubmit}/>
            }
        </div>
    )
}

export default Form
