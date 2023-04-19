import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import home from './routes/home';
import lawyer from './routes/lawyer';
import lawyerdetail from './routes/lawyerdetail';
import lawyerupdate from './routes/lawyerupdate';
import { LawyerContextProvider } from './context/lawyercontext';


const App = () => {
    return (
        <LawyerContextProvider>
            <div className="container">
                <Router>
                    <Switch>
                        <Route exact path ="/" component = {home}/>
                        <Route exact path = "/lawyer" component ={lawyer}/>
                        <Route exact path ="/lawyer/:id/update" component = {lawyerupdate}/>
                        <Route exact path ="/lawyer/:id" component = {lawyerdetail}/>
                    </Switch>
                </Router>
            </div>
        </LawyerContextProvider>
    )
}

export default App;