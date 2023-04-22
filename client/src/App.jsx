import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import home from './routes/home';
import lawyer from './routes/lawyer';
import lawyerupdate from './routes/lawyerupdate';
import { LawyerContextProvider } from './context/lawyercontext';
import client from './routes/client';
import clientupdate from './routes/clientupdate';
import cases from './routes/cases';
import casesupdate from './routes/casesupdate';
import court from './routes/court';
import courtupdate from './routes/courtupdate';




const App = () => {
    return (
        <LawyerContextProvider>
            <div>
                <Router>
                    <Switch> 
                        <Route exact path ="/" component = {home}/>
                        <Route exact path = "/lawyer" component ={lawyer}/>
                        <Route exact path ="/lawyer/:id/update" component = {lawyerupdate}/>
                        <Route exact path = "/client" component ={client}/>
                        <Route exact path ="/client/:id/update" component = {clientupdate}/>
                        <Route exact path = "/cases" component ={cases}/>
                        <Route exact path ="/cases/:id/update" component = {casesupdate}/>
                        <Route exact path = "/court" component ={court}/>
                        <Route exact path ="/court/:id/update" component = {courtupdate}/>
                    </Switch>
                </Router>
            </div>
        </LawyerContextProvider>
    )
}

export default App;