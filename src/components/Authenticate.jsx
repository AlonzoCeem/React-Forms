import { useState } from "react"

function Authenitcate(props){
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [userName, setUsername] = useState(null)
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
            setUsername(response.data.username)      
        } catch {
            setError(error.message)
        } 
    }

    return (
        <>
          <div>
            <h2>Authenticate</h2>
            {error != null ? <p>{ error }</p> : null}
            <button onClick={handleClick}>Authenticate Token</button>
            {successMessage != null ? <p>{ successMessage }</p> : null}
            { userName != null ? <h2>Welcome, { userName }</h2> : null}
          </div>
        </>
    )
}

export default Authenitcate