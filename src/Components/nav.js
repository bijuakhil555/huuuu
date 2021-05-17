import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { ProductConsumer } from './Context'
import {signOut,isAuthenticated} from './Auth/Auth'



const Nav = () => {

    const userPhoneNo = isAuthenticated().phoneNumber

    return (
        <div>
            <div className="hero">
                <nav className=" navbar navbar-expand-lg navbar-light bg-light pt-4">
                    <img className="logowid" src="./images/logo1.png"/>
                    {/* <h1 className={'logo'}>NAMMUDE<span>VIPANI</span></h1> */}
                    <ProductConsumer>
                    {values => {
                            return (<> 
                            <div className="badge badge-danger show">
                            {values.cart.length}
                                            </div>
                            </>)}}
                    </ProductConsumer>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ProductConsumer>
                        {values => {
                            return (<>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to='/'>
                                            Home
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to='/cart'>
                                            Your cart&nbsp;
                                            <div className="badge badge-danger">
                                                {values.cart.length}
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        {userPhoneNo
                                        ?
                                        <Link
                                            to='/login'
                                            className={''}
                                            onClick={()=>{signOut()}}
                                            >
                                                Logout
                                        </Link>
                                        :
                                        <Link to='/login'>
                                            Login
                                        </Link>
                                        }
                                    </li>

                                    <li>
                                    <Link

                                        to='/cart'
                                        // onClick={()=>{values.CheckOut()}}
                                        style={{cursor:'pointer'}}
                                        className="check mr-sm-2 my-2 my-sm-0" >
                                        <i class="fas fa-shopping-bag"></i>
                                        Checkout
                                        <i class="fas fa-arrow-right"></i>
                                    </Link>
                                    </li>

                                </ul>

                                {/* <Link

                                    to='/cart'
                                    // onClick={()=>{values.CheckOut()}}
                                    style={{cursor:'pointer'}}
                                    className="check mr-sm-2 " >
                                    <i class="fas fa-shopping-bag"></i>
                                    Checkout
                                    <i class="fas fa-arrow-right"></i>
                                </Link> */}
                            </>)
                        }}
                    </ProductConsumer>
                    </div>
                </nav>
            </div>



            {/* footer */}



        </div>
    )
}
export default Nav
