import React, { useState } from "react"
import axios from "axios"
import  { useNavigate } from 'react-router-dom'

function Login(){
    let [login, setLogin] = useState({
        email : "",
        password : ""
    })
    let navigate = useNavigate()

    function handleChange(event){
        let {name,value} = event.target

        setLogin({
            ...login,
            [name] : value
        })
    }

    function log(event){
        axios.post("/login",login)
        .then(res=>{
            let token = res.data.data.token
            localStorage.setItem("x-api-key",token)
            alert("login successful")
            navigate("/homepage")
        })
        .catch(error=>alert(error.response.data.message))
        event.preventDefault()

    }
    return <div className="login">
        <form >
            <h1>Login</h1>
            <input onChange = {handleChange} name = "email" type= "text" placeholder= "email" value = {login.email}/><br/>
            <input onChange = {handleChange} name = "password" type= "password" placeholder= "password" value = {login.password}/><br/>
            <button className="submit-button" onClick = {log}>Login</button>
        </form>
    </div>
}

export default Login