import React, { useState } from 'react'
import {ProductConsumer} from './Context'
import {Link} from 'react-router-dom'

export default function Rendercartorder(props) {
    

    return (
        <>
             
            <ProductConsumer>
                {(values)=>{
                    return(
                        <>
                        <div className="card p-3 bord">
                        <div className="h5 completeorder">
                Complete Order
            </div> 
                            <div className="h6">
                                select address
                            </div>
                            {
                                
                                values.user_address.length === 0  ?
                                <>
                                    <div className="text-danger small">
                                        No address specified
                                    </div>
                                    <Link  to='/billing' className="btn btn-link">
                                        Set billing address
                                    </Link>
                                    <br />
                                </>
                                :
                                <>
                                <div className="card m-2">

                                    <div className="p-1">
                                    name : {values.user_address[0].name}
                                    </div>
                                    <div className="p-1">
                                    house name : {values.user_address[0].house_name}
                                    </div>
                                    <div className="p-1">
                                    phone  {values.user_address[0].phone}
                                    </div>
                                    <div className="p-1">
                                    Address : {values.user_address[0].address}
                                    </div>
                                    <div className="p-1">
                                    pin_or_zip : {values.user_address[0].pin_or_zip}
                                    </div>
                                    <div className="p-1">
                                    town_or_city : {values.user_address[0].town_or_city}
                                    </div>
                                    <div className="p-1">
                                    landmark : {values.user_address[0].landmark}
                                    </div>
                                                              
                                </div>
                                </>
                            }
                            {
                            values.user_address.length === 0 ?
                            <>
                                <button type="button" className="btn btn-secondary" disabled>
                                    Complete order
                                </button>
                            </>
                            :
                            <>
                                <div 
                                    onClick={()=>{values.CheckOut()}}
                                    type="button" className="btn btn-success">
                                    Complete order
                                </div>
                            </>
                            }
                        </div>
                        </>
                    )
                }}
            </ProductConsumer>
            

        </>
    )
}
