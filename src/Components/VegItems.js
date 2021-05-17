import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Nav from './nav'
import './nav.css'

import {ProductConsumer} from './Context'
import Changehomeswitch from './ChangeHomeSwitch'


const VegItems = () => {


    return (
        <div >

            {/* content */}

           <div className={'d-flex home-switch'}>
               <Changehomeswitch/>
           </div>
            {/* accessing common values and data from context.js */}

            <ProductConsumer>
                {(values)=>{
                    return(
                        
                        <>
                            <div className="row p-3 m-2 mt-3">
                                {console.log(values)}
                                {
                                // mapping all products
                                values.products_veg.map((product , key) => (
                                    
                                    // product.id==="item8"?
                                    key>6?
                                    <>
                                        <RenderRiceCard product={product} AddToCart={values.AddToCart} />
                                    </>
                                    :
                                    <>
                                        <RenderProductCard product={product} AddToCart={values.AddToCart} />
                                    </>
                                ))

                                }
                            </div>
                        </>
                    )
                }}
            </ProductConsumer>


        </div>
    )
}
export default VegItems


const RenderProductCard = ({product,AddToCart}) => {

    const [quantity,setQuantity] = useState('1')

    return (
        <>
            <div key={product.id} className="col-12 col-md-6 col-lg-3 p-2  d-inline-flex ">
                 <div className="card wid  ">
                 <div className="card-block">
                <img className="card-img-top inlin " src={product.image}  />
                <div className="card-details p-1 fltrght">
                    <h1 className="pl-4 pt-4 pdtname  ">{product.name}</h1>
                    <div className="h6 pl-4 inlin">Quantity</div>
                    <div className="pl-4 inlin">
                        <select
                            className="p-1 rads"
                            onChange={(e) => { setQuantity(e.target.value) }}
                            value={quantity}
                            name="" id="">
                            <option value="1">1 kg</option>
                            <option value="2">2 kg</option>
                            <option value="3">3 kg</option>
                        </select>
                    </div>
                    <div className={'d-flex card-details__button'}>
                        <h3 className="pl-4 price pt-1">₹ {product.price} /Kg</h3>
                        <div  className="pl-4 p-2 line">
                            <div
                                onClick={() => {
                                    AddToCart(
                                        {
                                            id      :   product.id,
                                            name    :   product.name,
                                            price   :   product.price,
                                            image   :   product.image,
                                            quantity:   quantity,
                                        })
                                }}
                                className='btn btn-light clres p-2'>Add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>


        </>
    )
}





const RenderRiceCard = ({product,AddToCart}) => {

    const [quantity,setQuantity] = useState('1')

    return (
        <>
            <div key={product.id} className="col-12 col-md-6 col-lg-3 p-2  d-inline-flex ">
                 <div className="card wid  ">
                 <div className="card-block">
                <img className="card-img-top inlin " src={product.image}  />
                <div className="card-details p-1 fltrght">
                    <h1 className="pl-2 pt-4 pdtname  ">{product.name}</h1>
                    <div className="h6 pl-2 inlin">Quantity</div>
                    <div className="pl-2 inlin">
                        <select
                            className="p-1 rads"
                            onChange={(e) => { setQuantity(e.target.value) }}
                            value={quantity}
                            name="" id="">
                            <option value="1">10 kg</option>
                            {/* <option value="2">2 kg</option>
                            <option value="3">3 kg</option> */}
                        </select>
                    </div>
                    <div className={'d-flex card-details__button'}>
                        <h3 className="pl-2 price pt-1">₹ {product.price} /Kg</h3>
                        <div  className="pl-2 p-2 line">
                            <div
                                onClick={() => {
                                    AddToCart(
                                        {
                                            id      :   product.id,
                                            name    :   product.name,
                                            price   :   product.price,
                                            image   :   product.image,
                                            quantity:   quantity,
                                        })
                                }}
                                className='btn btn-light clres p-2'>Add to cart</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>


        </>
    )
}
