import { useState } from 'react'
import './App.css'
import SignUpForm from './components/SignUpForm'
import Authenitcate from './components/Authenticate'

function App() {
  const [token, setToken] = useState(null)
  return (
    <>
      <SignUpForm setToken={setToken}/>
      <Authenitcate token={token}/>
    </>
  )
}

export default App
