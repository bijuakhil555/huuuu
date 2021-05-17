import React, { useState } from 'react'
import { ProductConsumer } from './Context'
import Nav from './nav'
import {Link} from 'react-router-dom'
import { isAuthenticated } from './Auth/Auth'
import Select from 'react-select'


const Billing = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <div className="h5">Billing Info</div>
                <ProductConsumer>
                    {values=>{
                        return(
                            <>
                            <RenderForm UpdateAddress={values.UpdateAddress} />
                            </>
                            
                        )
                    }}
                </ProductConsumer>
            </div>
        </div>
    )
}
export default Billing




const RenderForm = ({UpdateAddress}) => {

    const [values, setValues] = useState({
        name: '',
        phone: isAuthenticated().phoneNumber,
        address: '',
        house_name:'',
        pin_or_zip:'',
        town_or_city:'',
        landmark:'',

    })

    const options = [
        { value: 'Adoor', label: 'Adoor' },
        // { value: 'strawberry', label: 'Strawberry' },
        // { value: 'vanilla', label: 'Vanilla' },
        // { value: 'vanilla', label: 'Vanilla' },
        // { value: 'vanilla', label: 'Vanilla' },
        // { value: 'vanilla', label: 'Vanilla' },
        // { value: 'vanilla', label: 'Vanilla' },
        // { value: 'vanilla', label: 'Vanilla' },
        
      ]

    
    const handleChange = name => event => {

        console.log("event : " ,event);
        console.log("event : " ,name);

        if(name==='town_or_city')
        {
            console.log("event : " ,event.value);
            console.log("value : " ,name);
            setValues({ ...values, [name]: event.value })
        }
        else{
        setValues({ ...values, [name]: event.target.value })
        }
        // console.log(values)
    }

    

    

    


    return (
        <>
            <div className="form">
                <div className="form-group">
                    <input
                        className={'form-control'}
                        onChange={handleChange('name')}
                        value={values.name}
                        placeholder="Name"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <input
                        className={'form-control'}
                        onChange={handleChange('house_name')}
                        value={values.house_name}
                        placeholder="House_name"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <input
                        className={'form-control'}
                        onChange={handleChange('phone')}
                        value={values.phone}
                        placeholder="Phone"
                        type="text"
                    />
                </div>
                <div className="form-group">
                    <input
                        className={'form-control'}
                        onChange={handleChange('address')}
                        value={values.address}
                        placeholder="Address"
                        type="text"
                    />
                </div>

                <div className="form-group">
                    {/* <input
                        className={'form-control'}
                        onChange={handleChange('town_or_city')}
                        value={values.town_or_city}
                        placeholder="town_or_city"
                        type="text"
                    /> */}
                    <Select options={options} onChange={handleChange('town_or_city')} />

                    
                    
                </div>
                <div className="form-group">
                    <input
                        className={'form-control'}
                        onChange={handleChange('pin_or_zip')}
                        value={values.pin_or_zip}
                        placeholder="Pin_or_zip"
                        type="text"
                    />
                </div>

                <div className="form-group">
                    <input
                        className={'form-control'}
                        onChange={handleChange('landmark')}
                        value={values.landmark}
                        placeholder="Landmark"
                        type="text"
                    />
                </div>
                <Link
                    to='cart'
                    onClick={()=>{
                        if(values.address==="")
                        {
                            alert("please enter address");   
                        }
                        else if(values.house_name ==="")
                        {
                            alert("please enter house name");  
                        }
                        else if(values.name ==="")
                        {
                            alert("please enter name");  
                        }
                        else if(values.town_or_city ==="")
                        {
                            alert("please select town or city");  
                        }
                        else
                        {
                            console.log("here");
                            if(values.landmark==="")
                            {
                                values.landmark="landmark";
                            }
                            if(values.pin_or_zip==="")
                            {
                                values.pin_or_zip="pin or zip";
                            }
                            console.log("data is : ");
                            console.log(values);
                            UpdateAddress(values);
                        }
                        
                    }}
                    className="btn btn-danger">
                    Submit
                </Link>
            </div>
        </>
    )
}