import React from 'react'

const navbar = () => {
    return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
            <a href="/" className="navbar-brand mb-0 h1">
                <img className="d-inline-block align-top" src="logo512.png" width="30" height='30' />
                LawfirmDB
            </a>
            <div className="collapse navbar-collapse" id="Nav">
                <ul className='navbar-nav'>
                    <li className="nav-item active">
                        <a href="/" className='nav-link'>Home</a>
                    </li>
                    <li className="nav-item active">
                        <a href="/lawyer" className='nav-link active'>Lawyers</a>
                    </li>
                    <li className="nav-item active">
                        <a href="/client" className='nav-link active'>Clients</a>
                    </li>
                    <li className="nav-item active">
                        <a href="/cases" className='nav-link active'>Cases</a>
                    </li>
                    <li className="nav-item active">
                        <a href="/court" className='nav-link active'>Courts</a>
                    </li>
                </ul>
            </div>

        </div>
    </nav>
    )
}

export default navbar