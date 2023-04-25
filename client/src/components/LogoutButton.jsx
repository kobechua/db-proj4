import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0(); 
    return (
        <div className="mb-4 mt-5 text-center">
            <button className="btn btn-secondary 
                mx-5 my-5 px-4" 
                onClick={() => logout({ returnTo: window.location.origin})}>
            Log Out
            </button>
            <br />

        </div>
    );
};
  
export default LogoutButton;