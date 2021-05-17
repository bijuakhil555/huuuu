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
                    <div
                        onClick={()=>{values.changeHomeScreen('kit')}}
                        className={`kitlink ${values._home_screen === 'kit' ?'active-switch':''} `}  >
                        Kit
                    </div>

                    <div
                        onClick={()=>{values.changeHomeScreen('veg')}}
                        className={`vegitablelink ${values._home_screen === 'veg' ?'active-switch':''} `}  >
                           Add-ons
                    </div>
                    <div className="whiteclr"></div>
                    <div className="hidn">

                    </div>
                </>
                )
            }}
        </ProductConsumer>

        </>
    )
}
