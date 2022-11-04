import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Navbar } from "../pages/Navbar/Navbar";
import {  Login  } from "../pages/Acount/Login/Login";
import { Register } from "../pages/Acount/Register/Register";
import { Footer } from "../pages/Footer/Footer";
import { ListShoes } from "../pages/List/ListShoes";

export function RouterBrowser (){

    return(
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/list" element={<ListShoes />} />
            </Routes>
            <Footer />
        </Router>

    )
}