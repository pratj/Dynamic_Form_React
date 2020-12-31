import React, {useState, useMemo} from 'react'
import { getConfig } from './config'
import Renderer from './Renderer'

function Form({cardInfo}) {

    const [state, setState] = useState({
        vehicleNo:"",
        fullName: "",
        email: "",
        phoneNumber: "",
        startDate: "",
        endDate: "",
        destination: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("state", state)
    }

    const handleOnChange = field => event => {
        const {value} = event.target
        setState(prevState => ({ ...prevState, [field]: value}))
    }

    const config = useMemo(() => {
        return getConfig({state, onChange: handleOnChange})
    }, [state])

    return (
        <div className="dynamicForm" style={{textAlign: 'center', marginTop: 100}}>
            <h1>{cardInfo.category}</h1><br/>
            <h3>{cardInfo.partner}</h3><br/>
            {/* <h5>{config[1].product}</h5><br/> */}
            <form onSubmit={handleSubmit}>
                <Renderer config={config} cardInfo={cardInfo}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
