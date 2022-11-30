import axios from "axios";
import React, { useState } from "react";


function CreateBook(){
    let [book, setBook] = useState({
        "title": "",
        "excerpt": "",
        "userId": "" ,
        "ISBN": "",
        "category": "",
        "subcategory": "",
        "releasedAt": ""
    })

    function handleChange(event){
        let {name, value} = event.target

        setBook({
            ...book,
            [name] : value
        })

    }

    function create(event){
        axios.post("/books",book,{ headers: { "x-api-key":localStorage.getItem('x-api-key') }})
        .then(res=>{
            console.log(res)
            alert(res.data.data.title+" created")
            setBook({
                "title": "",
                "excerpt": "",
                "userId": "" ,
                "ISBN": "",
                "category": "",
                "subcategory": "",
                "releasedAt": ""
            })
        })
        .catch(error=>{
            console.log(error)
            alert(error.response.data.message)})
    }
    return <div>
        <input onChange = {handleChange} name = "title" type= "text" placeholder= "title" value = {book.title}/><br/>
        <input onChange = {handleChange} name = "excerpt" type= "text" placeholder= "excerpt" value = {book.excerpt}/><br/>
        <input onChange = {handleChange} name = "userId" type= "text" placeholder= "userId" value = {book.userId}/><br/>
        <input onChange = {handleChange} name = "ISBN" type= "text" placeholder= "ISBN" value = {book.ISBN}/><br/>
        <input onChange = {handleChange} name = "category" type= "text" placeholder= "category" value = {book.category}/><br/>
        <input onChange = {handleChange} name = "subcategory" type= "text" placeholder= "subcategory" value = {book.subcategory}/><br/>
        <input onChange = {handleChange} name = "releasedAt" type= "date" placeholder= "releasedAt" value = {book.releasedAt}/><br/>
        <button className="submit-button" onClick={create}>create</button>
    </div>
}

export default CreateBook