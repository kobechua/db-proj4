import React, { useState } from 'react'


export const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        

    }

    return (
        <div className="container-lg">
            <div className="row justify-content-center my-5">
                <div className="col-lg-6">
                    <form onSubmit={(handleSubmit)}>
                        <div className="form-group">
                            <label for="username" className='form-label'>Username:</label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type ="username" className="form-control" placeholder="Username" id="username" name="username" /> 
                        </div>
                        <div className="form-group">
                            <label for="password" className='form-label'>Password:</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" id="password" name="password"/> 
                        </div>
                        <div className="mb-4 mt-5 text-center">
                            <button type='submit' className='btn btn-secondary'>Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}