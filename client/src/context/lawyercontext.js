import React, {useState, createContext} from "react";

export const lawyercontext = createContext();

export const LawyerContextProvider = props => {

    const [lawyers, setlawyers] = useState([])

    const addlawyer = (lawyer) => {
        setlawyers([...lawyers, lawyer])
    }

    return(
            <lawyercontext.Provider value={{lawyers, setlawyers, addlawyer}}>
                {props.children}
            </lawyercontext.Provider>
    )

}