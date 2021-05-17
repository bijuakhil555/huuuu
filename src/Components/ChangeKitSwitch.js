import React from 'react'
import { ProductConsumer } from './Context'
// import Product from './Veg'

export default function Changehomeswitch(props) {
    

    return (
        <>
        <ProductConsumer>
            {values=>{
                return(
                <>
                <div className="text-white">

                    <div 
                        onClick={()=>{values.changeKitScreen('200')}}
                        style={{cursor:'pointer'}}
                        className={`${values.kit_screen === '200'?'boxes':'boxes11'}`}>
                        <a >Kit <br />₹ 200 /- </a>
                    </div>
                    <div 
                        onClick={()=>{values.changeKitScreen('400')}}
                        style={{cursor:'pointer'}}
                        className={`${values.kit_screen === '400'?'boxes22':'boxes2'}`}>
                        < a >Kit <br />₹ 400 /- </a>
                    </div>
                </div>
                </>
                )
            }}
        </ProductConsumer>
            
        </>
    )
}
