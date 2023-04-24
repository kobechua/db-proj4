import React from 'react'

const homec = () => {
    return (
        <div className="container-xl">
        <div className="d-flex">
            <div className="col-lg-6">
                <div className="mb-4 mt-5 text-center">
                    <button type='submit' className='btn btn-secondary btn-block'>Lawyers</button>
                </div>
                <div className="mb-4 mt-5 text-center">
                    <button type='submit' className='btn btn-secondary btn-block'>Clients</button>
                </div>
                <div className="mb-4 mt-5 text-center">
                    <button type='submit' className='btn btn-secondary btn-block'>Cases</button>
                </div>
                <div className="mb-4 mt-5 text-center">
                    <button type='submit' className='btn btn-secondary btn-block'>Courts</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default homec