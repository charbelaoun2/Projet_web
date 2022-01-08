import React from 'react'

function Donate2({donations}) {
    console.log(donations)
    return (
        <div style={{height:"30vh", padding:"4vh, 0 px"}}>
            {donations.map((donation)=>
                <option>{donation.name}</option>
            )}
            
        </div>
    )
}

export default Donate2
