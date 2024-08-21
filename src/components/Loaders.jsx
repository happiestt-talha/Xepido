import React from 'react'
import { PacmanLoader } from 'react-spinners'

const Loaders = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen'>

                <PacmanLoader
                    color="#aeee5f"
                    size={93}
                />
            </div>
        </>
    )
}

export default Loaders