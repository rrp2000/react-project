import Register from "./Register"
import Homepage from "./Homepage"
import Login from "./Login"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import BookDetails from "./BookDetails";



function App(){
    // let token = localStorage.getItem("x-api-key")
    // return !token?<Register />:<Homepage />
    return(
        <Router>
            <Routes>
                <Route path="/" element = {<Register />}></Route>
                <Route path="/homepage" element = {<Homepage />}></Route>
                <Route path="/login" element = {<Login />}></Route>
                <Route path="/homepage/:id" element = {<BookDetails />}></Route>
            </Routes>
        </Router>
    )
}

export default App