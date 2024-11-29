import React from 'react'

const Hero = ({title = "a", subtitle ="b"}) => {
    return (
        <>
            <div>{title}</div>
            <div>{subtitle}</div>
        </>
    )
}

export default Hero;