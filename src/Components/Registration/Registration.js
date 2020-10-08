import React, { useContext, useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import logo from "../../logos/Group 1329.png"

const Registration = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const onSubmit = data => {
        console.log('form submitted', data)
        const orederDetails =  {...loggedInUser ,  shipment: data , orderTime: new Date() }
  
        fetch('http://localhost:5000/addTask', {
          method: 'POST',
         headers:{'content-type': 'application/json'},
          body: JSON.stringify(orederDetails)
        })
        .then(res => res.json())
        .then(data => {
          if (data){
            alert('order placed successfully')
          }
        })
      };
    return (
        <div className="text-center bg-light">
            <img className="m-auto mb-5" src={logo} style={{ height: '10vh', marginTop: '5vh' }} alt="" />
           
            <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
            <h4>Register as a volunteer</h4>
            {/* <img name="img" src={showdata.img} style={{ height: '15vh', marginTop: '5vh'}}alt="" ref={register({ required: true })}/> <br/> */}
            <input className="mt-5 input-field " name="Name" defaultValue={loggedInUser.name} ref={register({ required: true })} /><br/>
                    {errors.Name && <span>your name is required<br/></span>}
                <input className="input-field " name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} /><br/>
                    {errors.email && <span>your email is required<br/></span>}
                <input className="input-field " name="task"  ref={register({ required: true })} /><br/>                    
                <input className="input-field " name="RegisterTime" type="date" ref={register({ required: true })} /><br/>
                    {errors.RegisterTime && <span>RegisterTime is required<br/></span>}
                <input type="submit" className="Registration-btn" />
                
        
               </form>    

               
        </div>
    );
};
      


export default Registration;