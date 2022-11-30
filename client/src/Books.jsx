import React, {useState, useEffect} from "react";
import axios from "axios"
import Book from "./components/Book";

function Books(){
    let [books, setBooks] = useState([])
    useEffect(()=>{
       axios.get("/books").then(res=>{
          setBooks(res.data.data)
       })
    },[])
    return (books.map((ele,index)=>{return <Book className = "books" key = {index} id = {ele._id} title = {ele.title} />}))
}

export default Books