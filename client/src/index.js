import React from 'react';
import ReactDOM from 'react-dom'
import {Auth0Provider} from '@auth0/auth0-react';


import App from "./App"

ReactDOM.render(    
    <Auth0Provider
        domain='dev-7jkulua6hvim7hqk.us.auth0.com'
        clientId='wPPNsH6CiGkcdd7JSY0Wr3D1Vo6fHuhh'
        redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>, document.getElementById("root")
)

