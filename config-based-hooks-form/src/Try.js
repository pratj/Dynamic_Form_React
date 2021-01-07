import React from 'react'

function Try({location}) {

    var quote = JSON.parse(location.state.quoteData)

    return (
        <div>
            <h1>hello</h1>
            {console.log(location)}
            <p>{location.state.quoteData}</p>
            <p>{quote.value}</p>
            <p>{quote.benefits}</p>
        </div>
    )
}

export default Try
