import React, { useState } from 'react'
import {ProductConsumer} from './Context'



export default function  RenderCartItems(){

    return(
        <>
        <div className="h3 headcart">
            Cart
        </div>
        <div className="pt-4">
        <div className="card cartwid p-4">
            <div className="h5 mt-2 mb-2 carthead">
                Order Summary
            </div>
            <ProductConsumer>
                        {(values)=>{

                            let subtotal = values.cart.map(item => parseInt(item.quantity) * parseInt(item.price)).reduce((prev, next) => prev + next,0)                                
                            
                            return(
                                <>
                                <div>
                                {console.log("from cart",values)}
                                
                                {values.cart.length === 0 && <div className='text-center'>Cart is empty</div>}  
                                <div className="p-2">
                                    {
                                        values.cart.map((item)=>{
                                            return(
                                                <div className="pt-4">
                                                    <img style={{width:'150px'}} src={item.image} alt="" className="cartimg " />
                                                    <div className="h6 pt-1 orderhead">
                                                    &nbsp;&nbsp;&nbsp;  {item.name}
                                                    </div>
                                                    <div>&nbsp;&nbsp;&nbsp;</div>
                                                    <div className="h6 inlin orderprice">
                                                    &nbsp;&nbsp;&nbsp; ₹{item.price}/Kg 
                                                    </div>
                                                    <div className="h6 inlin flrright">
                                                       Quantity : {item.quantity}
                                                    </div>
                                                    <div>&nbsp;&nbsp;&nbsp;</div>
                                                    <div 
                                                        onClick={()=>{values.deleteFromCart(item.id)}}
                                                        className="btn btn-danger flrright">
                                                        X
                                                    </div>
                                                    <div>&nbsp;&nbsp;&nbsp;</div>
                                                </div>
                                            )
                                        })
                                    }          
                                </div> 
                                <div className="margintop">
                                <div className="card p-3 subtotalprice">
                                    <div className="h4 clresa">Subtotal</div>
                                    <div classname="subtotalprice">
                                    {
                                       "₹ " +  subtotal
                                    }
                                    </div>
                                </div>
                                </div>

                                </div>
                                </>
                            )
                        }}
            </ProductConsumer>
        </div>
        </div>
        </>
    )
}