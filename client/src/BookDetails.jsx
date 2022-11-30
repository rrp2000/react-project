import axios from "axios";
import React,{useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import  { useNavigate } from 'react-router-dom'


function BookDetails(){
    let navigate = useNavigate()
    let params = useParams()
    let {id} = params
    let [book, setBook] = useState({
        "_id": "",
        "title": "",
        "excerpt": "",
        "userId": "",
        "category": "",
        "subcategory": [],
        "isDeleted": false,
        "reviews": 0,
        "releasedAt": "",
        "createdAt": "",
        "updatedAt": "",
        "reviewsData": []
    })
    
    useEffect(()=>{
        axios.get(`/books/${id}`,{ headers: { "x-api-key":localStorage.getItem('x-api-key') }}).then(res=>setBook({
            "_id": res.data.data._id,
            "title": res.data.data.title,
            "excerpt": res.data.data.excerpt,
            "userId": res.data.data.userId,
            "category": res.data.data.category,
            "subcategory": res.data.data.subcategory,
            "isDeleted": res.data.data.isDeleted,
            "reviews": res.data.data.reviews,
            "releasedAt": res.data.data.releasedAt,
            "createdAt": res.data.data.createdAt,
            "updatedAt": res.data.data.updatedAt,
            "reviewsData": res.data.data.reviewsData
        })).catch(error=>{console.log(error)})
    },[id])

    let [update,setUpdate] = useState({})
    function handleChange(event){
        let {name,value} = event.target
        setBook({
            ...book,
            [name]: value
        })
        setUpdate({
            ...update,
            [name]: value
        })
    }
    function updateBook(event){
        axios.put(`/books/${id}`,update,{ headers: { "x-api-key":localStorage.getItem('x-api-key') }}).then(res=>
            {
                alert(book.title+" updated")    
                setBook({
                "_id": res.data.data._id,
                "title": res.data.data.title,
                "excerpt": res.data.data.excerpt,
                "userId": res.data.data.userId,
                "category": res.data.data.category,
                "subcategory": res.data.data.subcategory,
                "isDeleted": res.data.data.isDeleted,
                "reviews": res.data.data.reviews,
                "releasedAt": res.data.data.releasedAt,
                "createdAt": res.data.data.createdAt,
                "updatedAt": res.data.data.updatedAt,
                "reviewsData": res.data.data.reviewsData
            })
            navigate("/homepage")
            }).catch(error=>console.log(error))
    }
    function deleteBook(event){
        axios.delete(`/books/${id}`,{ headers: { "x-api-key":localStorage.getItem('x-api-key') }})
        .then(res=>{
            alert(res.data.data.title+" deleted")
            navigate("/homepage")
        })
        .catch(err => console.log(err))
    }
    return <div >
        <label>_id</label><input onChange = {handleChange} name = "_id" type= "text" value = {book._id}/><br/>
        <label>title</label><input onChange = {handleChange} name = "title" type= "text" value = {book.title}/><br/>
        <label>excerpt</label><input onChange = {handleChange} name = "excerpt" type= "text" value = {book.excerpt}/><br/>
        <label>category</label><input onChange = {handleChange} name = "category" type= "text" value = {book.category}/><br/>
        <label>subcategory</label><input onChange = {handleChange} name = "subcategory" type= "text" value = {book.subcategory}/><br/>
        <label>userId |</label> <label>{book.userId}</label><br/>
        <label>reviews | </label> <label>{book.reviews}</label><br/>
        <label>reviewData |</label> <label> {book.reviewsData}</label><br/>

        <button onClick={updateBook}>update</button> <button onClick={deleteBook}>delete</button>

    </div>
    
}

export default BookDetails