import React from 'react'
import { ScaleLoader } from 'react-spinners'

const Loaders = () => {
    return (
        <>
            <div className='flex justify-center items-center h-screen'>

                <ScaleLoader
                    color="#aeee5f"
                    size={93}
                />
            </div>
        </>
    )
}

export default Loaders