import React, {useState, createContext} from "react";

export const lawyercontext = createContext();

export const LawyerContextProvider = props => {

    const [lawyers, setlawyers] = useState([])

    const addlawyer = (lawyer) => {
        setlawyers([...lawyers, lawyer])
    }

    const [clients, setclients] = useState([])

    const addclient = (client) => {
        setclients([...clients, client])
    }
    
    const [cases, setcases] = useState([])

    const addcase = (cse) => {
        setcases([...cases, cse])

    }

    const [courts, setcourts] = useState([])

    const addcourts = (court) => {
        setcourts([...courts, court])
    }
    return(
            <lawyercontext.Provider value={{lawyers, setlawyers, addlawyer,clients, setclients, addclient, cases, setcases, addcase, courts, setcourts, addcourts}}>
                {props.children}
            </lawyercontext.Provider>
    )

}