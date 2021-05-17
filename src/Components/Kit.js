import React from 'react'
import Footer from './footer'
import Nav from './nav'
import KitItems_400 from './KitItems_400'
import KitItems_200 from './KitItems_200'
import { ProductConsumer } from './Context'

const Home1 = () => {
    return (
        <div>
            <Nav/>
            <ProductConsumer>
                {values=>{
                    return(
                    <>
                    {values.kit_screen === '200' && <KitItems_200 AddToCart={values.AddToCart} />}
                    {values.kit_screen === '400' && <KitItems_400 AddToCart={values.AddToCart}/>}
                    
                    </>)
                }}
            </ProductConsumer>
          
        </div>
    )
}
export default Home1
