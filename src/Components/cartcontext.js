import React, { createContext, useState } from 'react'

export const Cartcontext = createContext()

export const Cartprovider = props => {

    const [cart, setCart] =  useState([
    ])
    return (
        <Cartcontext.Provider value={[cart, setCart]}>
            {props.children}
        </Cartcontext.Provider>
    )
}

