import { Button } from 'flowbite-react'
import React from 'react'

const Buttons = ({type,childern,onClick,outline}) => {
    return (
        <Button gradientMonochrome={type} outline={outline} onClick={onClick}>
            {childern}
        </Button>
    )
}

export default Buttons