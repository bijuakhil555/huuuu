import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Changehomeswitch from './ChangeHomeSwitch'
import ChangeKitSwitch from './ChangeKitSwitch'
import Footer from './footer'


const Pagecontent2=({AddToCart})=> {

    const [quantity,setQuantity] = useState('1')


    return (
        <div className={'home__container'}>
            <div className={'d-flex home-switch'}>
                <Changehomeswitch/>
            </div>

            <ChangeKitSwitch/>

            {/* <div className="boxes11">
                <Link to="/">
                    <a href="">Kit <br />₹ 200 /- </a>
                </Link>
            </div>
            <div className="boxes22">
                <Link to="/kit2">
                    <a href="">Kit <br />₹ 400 /- </a>
                </Link>
            </div> */}


            <div className="info">
                <h1>₹ 400 /-</h1>
                <h1 className="fresh">Fresh <br/> vegetable kit</h1>

                    <div>
                    <h3 className="qty">Quantity</h3>
                    <select
                        onChange={(e) => { setQuantity(e.target.value) }}
                        class="round">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    </div>

                    <br/>
              
                <button 
                type="button" 
                class="btn btn-success clr112"
                onClick={()=>{AddToCart({
                    id      :   'kit2',
                    name    :   "Kit 2",
                    price   :   "400",
                    image   :   "data:image/jpeg;base64,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",
                    quantity:   quantity,
                })}}
                >Add to cart</button>
            </div>
            <div className="elisp elipse2">

            </div>
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

        </div>
    )
}

export default Pagecontent2
