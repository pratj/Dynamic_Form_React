import InputField from "./InputField";
import SelectField from "./SelectField";

export const getConfig = ({state, onChange}) => {
    return [
        {
            "category": "Motor Insurance",
            "partner": "Tata AIG",
            "product": "Car Insurance",
            "fields": [
                {
                    "name": "vehicleNo",
                    "id": "vehicleNo",
                    "type": "text",
                    "label": "Car Registration Number",
                    "placeholder": "Car Registration Number",
                    "component": InputField,
                    "value": state["vehicleNo"],
                    "onChange": onChange("vehicleNo")
                },
                {
                    "name": "fullName",
                    "id": "fullName",
                    "type": "text",
                    "label": "Full Name",
                    "placeholder": "Enter Full Name",
                    "component": InputField,
                    "value": state["fullName"],
                    "onChange": onChange("fullName")
                },
                {
                    "name": "email",
                    "id": "email",
                    "type": "email",
                    "placeholder": "Enter Email Id",
                    "component": InputField,
                    "label": "Email Address",
                    "value": state["email"],      
                    "onChange": onChange("email"),
                  },
                  {
                    "name": "phoneNumber",
                    "id": "phoneNumber",
                    "type": "tel",
                    "placeholder": "Enter Phone Number",
                    "component": InputField,
                    "label": "Phone Number",
                    "value": state["phoneNumber"],      
                    "onChange": onChange("phoneNumber")
                  },
            ],
            "apiPath": "/motor-insurance/car-insurance/tata-aig/quote", 
            "apiKey": "",
            "apiMethod": "GET"
        },
        {
            "category": "Motor Insurance",
            "partner": "Bajaj Allianz",
            "product": "Car Insurance",
            "fields": [
                {
                    "name": "vehicleNo",
                    "id": "vehicleNo",
                    "type": "text",
                    "label": "Car Registration Number",
                    "placeholder": "Car Registration Number",
                    "component": InputField,
                    "value": state["vehicleNo"],
                    "onChange": onChange("vehicleNo")
                },
                {
                    "name": "fullName",
                    "id": "fullName",
                    "type": "text",
                    "label": "Full Name",
                    "placeholder": "Enter Full Name",
                    "component": InputField,
                    "value": state["fullName"],
                    "onChange": onChange("fullName")
                },
                {
                    "name": "email",
                    "id": "email",
                    "type": "email",
                    "placeholder": "Enter Email Id",
                    "component": InputField,
                    "label": "Email Address",
                    "value": state["email"],      
                    "onChange": onChange("email"),
                  },
                  {
                    "name": "phoneNumber",
                    "id": "phoneNumber",
                    "type": "tel",
                    "placeholder": "Enter Phone Number",
                    "component": InputField,
                    "label": "Phone Number",
                    "value": state["phoneNumber"],      
                    "onChange": onChange("phoneNumber")
                  },
            ],
            "apiLink": "", 
            "apiKey": "",
            "apiMethod": ""
        },
        {
            "category":"Travel Insurance",
            "partner": "Tata AIG",
            "product": "Overseas Travel Insurance",
            "fields": [
                {
                    "name": "destination",
                    "id": "destination",
                    "label": "Travelling To",
                    "component": SelectField,
                    "value": state["destination"],
                    "onChange": onChange("destination")
                },
                {
                    "name": "startDate",
                    "id": "startDate",
                    "type": "date",
                    "label": "Trip Start Date",
                    "component": InputField,
                    "value": state["startDate"],
                    "onChange": onChange("startDate")
                },
                {
                    "name": "endDate",
                    "id": "endDate",
                    "type": "date",
                    "label": "Trip End Date",
                    "component": InputField,
                    "value": state["endDate"],
                    "onChange": onChange("endDate")
                }
            ],
            "apiLink": "", 
            "apiKey": "",
            "apiMethod": ""
        },
        {
            "category": "Travel Insurance",
            "partner": "Bajaj Allianz",
            "product": "Overseas Travel Insurance",
            "fields": [
                {
                    "name": "destination",
                    "id": "destination",
                    "label": "Travelling To",
                    "component": SelectField,
                    "value": state["destination"],
                    "onChange": onChange("destination")
                },
                {
                    "name": "startDate",
                    "id": "startDate",
                    "type": "date",
                    "label": "Trip Start Date",
                    "component": InputField,
                    "value": state["startDate"],
                    "onChange": onChange("startDate")
                },
                {
                    "name": "endDate",
                    "id": "endDate",
                    "type": "date",
                    "label": "Trip End Date",
                    "component": InputField,
                    "value": state["endDate"],
                    "onChange": onChange("endDate")
                },
            ],
            "apiLink": "", 
            "apiKey": "",
            "apiMethod": ""
        }
    
    ]
}