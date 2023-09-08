import { useState } from "react"

function SignUpForm(props){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [submitMessage, setSubmitMessage] = useState("")
    const { setToken } = props

    async function handleSubmit(event){
        event.preventDefault()
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
              { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  username: `${username}`, 
                  password: `${[password]}` 
                }) 
              })
              const result = await response.json()
              setToken(result.token)
              setSubmitMessage("Submitted!")
        } catch {
            setError(error.message)
        }
    }

    return (
        <>
        <div>
            <h2>Sign Up</h2>
            {error != null ? <p>{ error }</p> : null}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={ username } onChange={(event)=> {setUsername(event.target.value)}}/>
                </label>
                <label>
                    Password: <input value={ password } onChange={(event)=> {setPassword(event.target.value)}}/>
                </label>
                <button>Submit!</button>
            </form>
            { submitMessage != null ? <p>{ submitMessage }</p> : null}
        </div>
        </>
    )
}

export default SignUpForm