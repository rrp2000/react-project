import { useState } from "react";
import Books from "./Books";
import CreateBook from "./CreateBook";
function Homepage(){
   let [isClicked, setIsClicked] = useState(false)
   return <div>
      <h1>Books</h1>
      <div className="books">
         <Books />
         {isClicked?<CreateBook />:null}
      </div>
         <button onClick={()=>setIsClicked(!isClicked)}>{isClicked?"cancel":"create book"}</button>
   </div>
}

export default Homepage