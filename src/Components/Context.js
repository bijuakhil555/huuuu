import React,{useEffect, useState} from 'react'
import {authenticate, isAuthenticated} from './Auth/Auth'
import axios from 'axios'
import qs from 'qs';
import {format} from "date-fns";

// importing data
import fakedata from './fakedata'

const Base_URL = 'http://ec2-15-206-81-119.ap-south-1.compute.amazonaws.com'

const ProductContext = React.createContext()


function  ProductProvider(props) {
    
    // declaring all variables common for the project
    const [values,setValues] = useState({
        // cart : [],
        products_veg: [],
        _home_screen : 'kit', // kit or veg
        kit_screen : '200',      //200 or 400
        // user_address : [],

    })

    const [cartValues,setCartValues] = useState({
        cart : [],
    })

    const[userValues,setUserValues] = useState({
         user_address : [],
    })


    useEffect( async ()=>{
        // call function to initialize data to product kit
        
        await initKitProducts()
        await initCartItems()
        await initUserAddress()
        
    },[])

    const changeHomeScreen=(input)=>{
        setValues({
            ...values,
            _home_screen : input
        })
    }
    const changeKitScreen=(input)=>{
        setValues({
            ...values,
            kit_screen : input
        })
    }

    const UpdateAddress = (address)=>{

        let phoneNo = isAuthenticated().phoneNumber;
        console.log("phone num init user:" , phoneNo);
        let phoneNumber;
        try{
            phoneNumber = (phoneNo).substring(3);
            console.log("phone num rem init user :" , phoneNumber);
        }
        catch{

        }
        console.log("address : " , address );
        var pin_or_zip = address.pin_or_zip;
        if(pin_or_zip==="")
        {
            pin_or_zip = "pin or zip";
        }
        axios({
            'method'    :   'POST',
            'url'       :   `${Base_URL}/phpFiles/addOrEditAccount.php`,
            'headers'   :   {
                                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                            },
            'data'      :  qs.stringify({
                            'userPhone': phoneNumber,
                            'userName' : address.name,
                            'houseName' : address.house_name ,
                            'userAddress' : address.address ,
                            'userTownOrCity' : address.town_or_city ,
                            'userPostalcodeOrZip' :pin_or_zip  ,
                            'userLandmark' : address.landmark ,
                            }),
        })
        .then(res =>{
            // if success
            if(res.status === 202)
            {
                console.log("res :");
                console.log(res.data);
                setUserValues({
                                ...userValues,
                                user_address: [address],
                            })
                
                console.log("data : ",userValues);
            }
        }).catch(err=>{
            // setting dummy data 
        })

        // setUserValues({
        //     ...userValues,
        //     user_address: [address],
        // })

        
    }






    const UpdateNullAddress = async (address)=>{
        console.log("njan asyncil ethiyee");
        let phoneNo = isAuthenticated().phoneNumber;
        console.log("phone num init user:" , phoneNo);
        let phoneNumber;
        try{
            phoneNumber = (phoneNo).substring(3);
            console.log("phone num rem init user :" , phoneNumber);
        }
        catch{

        }
        console.log("address : " , address );
        var pin_or_zip = address.pin_or_zip;
        if(pin_or_zip==="")
        {
            pin_or_zip = "pin or zip";
        }
        await axios({
            'method'    :   'POST',
            'url'       :   `${Base_URL}/phpFiles/addOrEditAccount.php`,
            'headers'   :   {
                                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                            },
            'data'      :  qs.stringify({
                            'userPhone': phoneNumber,
                            'userName' : "name",
                            'houseName' : "house name",
                            'userAddress' : "address",
                            'userTownOrCity' : "town or city",
                            'userPostalcodeOrZip' :"postal or zip",
                            'userLandmark' : "landmark",
                            }),
        })
        .then(res =>{
            // if success
            if(res.status === 202)
            {
                console.log("njan asyncil ethiyee");
                let phoneNo = isAuthenticated().phoneNumber;
                console.log("phone num init user:" , phoneNo);
                let phoneNumber;
                
                console.log("res :");
                console.log(res.data);
                setUserValues({
                                ...userValues,
                                // user_address:[{ name:"",address:"", house_name:"",landmark:"",pin_or_zip:"",town_or_city:"",phone:phoneNumber }], // match it from backend
                                user_address :[],
                            })
                
                console.log("data : ",userValues);
            }
        }).catch(err=>{
            
        })
        
    }





    const initUserAddress = async ()=>{


        let phoneNo = isAuthenticated().phoneNumber;
        console.log("phone num init user:" , phoneNo);
        let phoneNumber ;
        try
        {
            phoneNumber = (phoneNo).substring(3);
            console.log("phone num rem init user :" , phoneNumber);
        }
        catch{

        }

        await axios({
            'method'    :   'POST',
            'url'       :   `${Base_URL}/phpFiles/getUserDetails.php`,
            'headers'   :   {
                                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                            },
            'data'      :  qs.stringify({
                            // 'userPhone': phoneNumber,
                            'userPhone': phoneNumber,
                            
                            }),
        })
        .then (res =>{
            // if success
            if(res.status === 202)
            {
                console.log("got202 : ",res.data.useraddress[0]);
                var name_full = res.data.useraddress[0];
                var name = name_full.name;
                console.log("got202 : " , name);
                console.log()
                if( (name==='notfound') || (name==='name') || (name==='postError') )
                {
                    console.log("no user");
                    setUserValues({
                        ...userValues,
                        // user_address : [{ name:"",address:"", house_name:"",landmark:"",pin_or_zip:"",town_or_city:"",phone:phoneNumber }], // match it from backend
                        user_address :[],
                    });
                    UpdateNullAddress(res.data.useraddress[0]) ;
                    console.log("here at update null");
                    
                }
                else
                {
                    console.log("res :");
                    console.log(res.data);
                    setUserValues({
                                    ...userValues,
                                    // products_veg : fakedata.products, // match it from backend
                                    user_address : [res.data.useraddress[0]], // match it from backend
                                });
                    
                }
                
                
                console.log("data : ",userValues);
            }
        }).catch(err=>{
            // setting dummy data 
        })



    }

    const initKitProducts = async ()=>{
        // write a function to fetch data from database 
        await fetch('https://api.npms.io/v2/search?q=react')
        .then(res =>{
            // if success
            if(res.status === 200)
            {
                setValues({
                    ...values,
                    products_veg : res.data.products, // match it from backend
                })
            }
        }).catch(err=>{
            // setting dummy data
            // delete this on production
            setValues({
                ...values,
                products_veg : fakedata.products 
            })
        })
        
    }

    const initCartItems = async ()=>{

        let phoneNo = isAuthenticated().phoneNumber;
        console.log("phone num init user:" , phoneNo);
        let phoneNumber ;
        try{
            phoneNumber = (phoneNo).substring(3);
            console.log("phone num rem init user :" , phoneNumber);
        }
        catch{

        }

        await axios({
            'method'    :   'POST',
            'url'       :   `${Base_URL}/phpFiles/cartRead.php`,
            'headers'   :   {
                                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                            },
            'data'      :  qs.stringify({
                            'userPhone': phoneNumber,
                            // 'userPhone': "9746464357",
                            
                            }),
        })
        .then(res =>{
            // if success
            if(res.status === 202)
            {
                console.log("cart from web : ");
                console.log(res)
                setCartValues({
                    ...cartValues,
                    cart : [...res.data.cart], // match it from backend
                })
            }
        }).catch(err=>{
            // handle error
        })
        

    }


    
    const AddToCart = (item) =>{
        // const item = values.products_veg.find((x) => x.id === id);
        // item.quantity = parseInt(quantity)
        console.log(item)

        // inset to cart --- backend
        if(item){

            let phoneNo = isAuthenticated().phoneNumber;
            console.log("phone num init user:" , phoneNo);
            let phoneNumber ;
            // try
            // {
                phoneNumber = (phoneNo).substring(3);
                console.log("phone num rem init user :" , phoneNumber);
            // }
            // catch{
                
            // }

            const totalPrice = item.price*item.quantity;
            console.log(" calling")
            console.log(item)


            axios({
                'method'    :   'POST',
                'url'       :   `${Base_URL}/phpFiles/addToCart.php`,
                'headers'   :   {
                                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                                },
                'data'      :  qs.stringify({
                                'userPhone': phoneNumber,
                                'itemId'   : item.id ,
                                'itemQuantity' : item.quantity ,
                                'itemPrice' :  totalPrice ,
                                }),
            })
            .then(res => {
                console.log(res)
                // if success--> set values to cart
                if(res.status === 202){
                    
                    let index = cartValues.cart.map(e=>e.id).indexOf(item.id)
                    let newCart = cartValues.cart
                    if(index < 0){
                        newCart = [item,...newCart]
                    }
                    else{
                        newCart[index] = item
                    }

                    setCartValues({
                        ...cartValues,
                        cart : newCart,

                    })
                } 
            })
            .catch(err=>{
                // on error also adding data to cart for testing
                // remove this on production
                console.log("error...")
                let index = cartValues.cart.map(e=>e.id).indexOf(item.id)
                let newCart = cartValues.cart
                if(index < 0){
                    newCart = [item,...newCart]
                }
                else{
                    newCart[index] = item
                }

                setCartValues({
                    ...cartValues,
                    cart : newCart,

                })
            })
        }
        
        console.log("values added to cart",item , cartValues)
        
    }


    const deleteFromCart=(id)=>{

            console.log("id is : " , id);
            let phoneNo = isAuthenticated().phoneNumber;
            console.log("phone num init user:" , phoneNo);
            let phoneNumber ;
            try
            {
                phoneNumber = (phoneNo).substring(3);
                console.log("phone num rem init user :" , phoneNumber);
            }
            catch{
                
            }
            
            axios({
                'method'    :   'POST',
                'url'       :   `${Base_URL}/phpFiles/deleteFromCart.php`,
                'headers'   :   {
                                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                                },
                'data'      :  qs.stringify({
                                'userPhone': phoneNumber,
                                'itemId'   : id ,
                                }),
            })
            .then(res => {
                console.log(res)
                // if success--> set values to cart
                if(res.status === 202){
                    
                    let index = cartValues.cart.map(e=>e.id).indexOf(id)
                    let newCart = cartValues.cart
                    if(index >= 0){
                        
                        newCart.splice(index,1)
                    }

                    setCartValues({
                        ...cartValues,
                        cart : newCart,

                    })
                } 
            })
            .catch(err=>{
                // on error also adding data to cart for testing
                // remove this on production
                let index = cartValues.cart.map(e=>e.id).indexOf(id)
                let newCart = cartValues.cart
                if(index >= 0){
                    
                    newCart.splice(index,1)
                }

                setCartValues({
                    ...cartValues,
                    cart : newCart,

                })
            })
    }


    const CheckOut = () =>{

        console.log("cheking out")
        alert("checking out..",cartValues.cart)

        const data = {
            cart : cartValues.cart,
            billing_address : userValues.user_address ,
            phoneNo: isAuthenticated().phoneNumber
        }
        

        console.log(" ------------  ");
        console.log(" ------------  ");
        console.log(" ------------  ");
        console.log("-----data is----");
        console.log(data.cart);
        let totalPrice = 0;
        (data.cart).forEach(function(key) {
            console.log("key : " , key );
            console.log("price : ",  key.price*key.quantity );
            totalPrice +=key.price*key.quantity ;            
        });
        console.log("total price : ", totalPrice );
        var billing_address_in =data.billing_address[0];
        console.log("billing address : " , billing_address_in.town_or_city );

        let phoneNo = isAuthenticated().phoneNumber;
        console.log("phone num :" , phoneNo);
        let phoneNumber = phoneNo.substring(3);
        console.log("phone num rem :" , phoneNumber);
        var dateToday     = new Date();
        console.log( "date : " ,  format( dateToday , " MMM do , yyyy") ) ;
// format( dateToday , " MMM do , yyyy")
        axios({
            'method' :   'POST',
            'url' :   `${Base_URL}/phpFiles/checkout.php`,
            'headers':   {
                             'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                         },
            'data':qs.stringify({
                            'userPhone'     : phoneNumber,
                            'orderPlace'    : billing_address_in.town_or_city ,
                            'totalPrice'    : totalPrice , 
                            'orderDate'     : format( dateToday , " MMM do , yyyy") ,
                            'orderStatus'   : "ordered",
                            }),
        })
        .then(res=>{
            // if success
            if(res.status === 202)
            {
                console.log(res);
                setCartValues({
                    ...cartValues,
                    cart : [],

                })
            } 

        }).catch(err=>{
            // show error
            console.log(err);
        })


    }

  

    return (
        <ProductContext.Provider value={{
            ...values,
            ...userValues,
            ...cartValues,
            AddToCart:AddToCart,
            CheckOut:CheckOut,
            changeHomeScreen:changeHomeScreen,
            changeKitScreen:changeKitScreen,
            UpdateAddress:UpdateAddress,
            deleteFromCart:deleteFromCart,
            initCartItems : initCartItems,
            initKitProducts :initKitProducts  ,
            initUserAddress : initUserAddress,
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer,ProductProvider}