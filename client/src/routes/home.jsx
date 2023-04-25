import React from 'react'

import Homec from '../components/homec'
import LogoutButton from '../components/LogoutButton'

const home = () => {
  return ( 
    <div className="container-xl">
      <div className="d-flex justify-content-end">
        <div className="col-lg-6">
          <Homec />
          <LogoutButton />
        </div>
      </div>
    </div>
    
  )
};

export default home; 