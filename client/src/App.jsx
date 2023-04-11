import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Cases from "./routes/Cases";
import Update from "./routes/Update";

const App = () => {
    return (
    <div className="container">
        <Router>
            <Routes>
            <Route exact path = "/" element={<Home/>}/>
            <Route exact path = "/cases/:id" element={<Cases/>}/>
            <Route exact path = "/cases/:id/update" element={<Update/>}/>
            </Routes>
        </Router>
    </div>
    )
};

export default App;