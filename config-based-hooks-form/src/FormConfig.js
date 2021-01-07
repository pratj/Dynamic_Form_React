export const FormConfig = [
    {
        "category": "Motor Insurance",
        "partner": "Tata AIG",
        "product": "Car Insurance",
        "fields": [
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
              },
        ],
        "api": {
            "method": "GET",
            "path": "http://localhost:9000/motor-insurance/car-insurance/tata-aig/quote",
            "headers": [],
            "uriType": "/"
        }
    },
    {
        "category": "Motor Insurance",
        "partner": "Bajaj Allianz",
        "product": "Car Insurance",
        "fields": [
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
              },
        ],
        "api": {
            "method": "GET",
            "path": "http://localhost:9000/motor-insurance/car-insurance/bajaj-allianz/quote",
            "headers": [],
            "uriType": "?"
        }   
    },
    {
        "category": "Travel Insurance",
        "partner": "Tata AIG",
        "product": "Overseas Travel Insurance",
        "fields": [
            {
                "name": "destination",
                "type": "select",
                "label": "Travelling To"
            },
            {
                "name": "startDate",
                "type": "date",
                "label": "Trip Start Date"
            },
            {
                "name": "endDate",
                "type": "date",
                "label": "Trip End Date",
            }
        ],
        "api": {
            "method": "POST",
            "path": "http://localhost:9000/travel-insurance/overseas-insurance/tata-aig/quote",
            "headers": [],
            "uriType": "/"
        }
    },
    {
        "category": "Travel Insurance",
        "partner": "Bajaj Allianz",
        "product": "Overseas Travel Insurance",
        "fields": [
            {
                "name": "destination",
                "type": "select",
                "label": "Travelling To"
            },
            {
                "name": "startDate",
                "type": "date",
                "label": "Trip Start Date"
            },
            {
                "name": "endDate",
                "type": "date",
                "label": "Trip End Date",
            }
        ],
        "api": {
            "method": "GET",
            "path": "http://localhost:9000/travel-insurance/overseas-insurance/bajaj-allianz/quote",
            "headers": [],
            "uriType": "/"
        } 
    }
]