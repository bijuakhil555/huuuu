import React from 'react'
import { ProductConsumer } from './Context'
import Kit from './Kit'
import Veg from './Veg'

export default function Home(props) {
    

    return (
        <>
        <ProductConsumer>
            {values=>{
                return(
                    <>
                    {values._home_screen ==='kit' && <Kit/> }
                    {values._home_screen ==='veg' && <Veg/> }
                    </>
                )
            }}
        </ProductConsumer>
            
        </>
    )
}
