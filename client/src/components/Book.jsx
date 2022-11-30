import React from "react";
import  { useNavigate } from 'react-router-dom'

function Book(props){
    let navigate = useNavigate()
    function handleClick(event){
        navigate(`/homepage/${props.id}`)
    }
    return <div onClick = {handleClick}className="book" id = {props.id}><h3>{props.title}</h3></div>
}

export default Book