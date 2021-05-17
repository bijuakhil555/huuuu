import React from 'react'
import { Cartprovider } from './cartcontext'
import VegItems from './VegItems'
import Nav from './nav'
import Footer from './footer'

const Product = ()=> {
    return (
    
        <Cartprovider>
            <Nav/>
            <VegItems/>

            <div className="clr">
            <div className="svgwid">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path className="svg"  fill-opacity="1" d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,112C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                    </path></svg>
            </div>
                    <h2 className="brought">Brought to you by</h2>
                
                
            </div>
            <div className="row backg">
                <div className = "col-6 col-md-6 col-lg-3 logo1">
                    <img src='./images/image1.png'/>
                </div>

                <div className = "col-6 col-md-6 col-lg-3 logo1">
                <img src='./images/image2.png'/>
                </div>

                <div className = "col-6 col-md-6 col-lg-3 logo1">
                <img src='./images/image3.png'/>
                </div>

                <div className = "col-6 col-md-6 col-lg-3 logo1">
                <img src='./images/image4.png'/>
                </div>
            </div>
            <Footer/>






        </Cartprovider>
      
    )
}
export default Product
