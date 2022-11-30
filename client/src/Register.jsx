import axios from "axios";
import React, { useState } from "react";
import {Link} from "react-router-dom"


function Register(){
    let [register, setRegister] = useState({
        title : "",
        name :"",
        phone : "",
        email : "",
        password : "",
        street : "",
        city : "",
        pincode : ""
    })

    function handleChange(event){
        let {name, value} = event.target
        setRegister({
            ...register,
            [name] : value
        })
    }

    function submit(event){
        
        axios.post("/register",register)
        .then(res=>{alert("submitted successfully "+res.data.data.title+" "+res.data.data.name)})
        .catch(error=>alert(error.response.data.message))
        event.preventDefault()
    }

    return <div className="register">
        <form>
            <h1>Register</h1>
            <input onChange = {handleChange} name = "title" type= "text" placeholder= "title" value = {register.title} /><br/>
            <input onChange = {handleChange} name = "name" type= "text" placeholder= "name" value = {register.name}/><br/>
            <input onChange = {handleChange} name = "phone" type= "text" placeholder= "phone" value = {register.phone}/><br/>
            <input onChange = {handleChange} name = "email" type= "text" placeholder= "email" value = {register.email}/><br/>
            <input onChange = {handleChange} name = "password" type= "password" placeholder= "password" value = {register.password}/><br/>
            <label>address</label><br/>
            <input onChange = {handleChange} name = "street" type= "text" placeholder= "street" value = {register.street}/><br/>
            <input onChange = {handleChange} name = "city" type= "text" placeholder= "city" value = {register.city}/><br/>
            <input onChange = {handleChange} name = "pincode" type= "text" placeholder= "pincode" value = {register.pincode}/><br/>
            <Link to = "/login"> Already Registered?</Link>

            <button className="submit-button" onClick = {submit}>Register</button>
        </form>
    </div>
}

export default Register