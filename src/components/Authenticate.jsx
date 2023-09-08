import { useState } from "react"

function Authenitcate(props){
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const { token } = props
    
    async function handleClick(){
        try{
            const data = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
            { 
            method: "GET", 
            headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
            }
            })
            const response = await data.json()
            setSuccessMessage(response.message)      
        } catch {
            setError(error.message)
        } 
    }

    return (
        <>
          <div>
            <h2>Authenticate</h2>
            {successMessage != null ? <p>{ successMessage }</p> : null}
            {error != null ? <p>{ error }</p> : null}
            <button onClick={handleClick}>Authenticate Token</button>
          </div>
        </>
    )
}

export default Authenitcate