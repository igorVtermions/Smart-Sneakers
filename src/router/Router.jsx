import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Navbar } from "../pages/Navbar/Navbar";

export function RouterBrowser (){

    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </Router>

    )
}