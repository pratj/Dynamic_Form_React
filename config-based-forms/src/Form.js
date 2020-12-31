import React, {useState, useMemo} from 'react'
import { getConfig } from './config'
import Renderer from './Renderer'

function Form({cardInfo, setOpenPopup}) {

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
        console.log(formConfig.apiLink)
        setOpenPopup(false)
    }

    const handleOnChange = field => event => {
        const {value} = event.target
        setState(prevState => ({ ...prevState, [field]: value}))
    }

    const config = useMemo(() => {
        return getConfig({state, onChange: handleOnChange})
    }, [state])

    // Mapping cardInfo to Form Config
    //Will return an array of size 1 therefore fetching the Oth index
    const formConfig = config.filter((formItem) => {
        return (formItem.category === cardInfo.category) && (formItem.partner === cardInfo.partner)
    })[0]

    return (
        <div className="dynamicForm" style={{textAlign: 'center'}}>
            {/* <h1>{cardInfo.category}</h1><br/>
            <h3>{cardInfo.partner}</h3><br/> */}
            {/* <h5>{config[1].product}</h5><br/> */}
            <form onSubmit={handleSubmit}>
                <Renderer formConfig={formConfig}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
