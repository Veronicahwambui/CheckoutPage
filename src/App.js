import React, { useState } from 'react'
import './App.css';

function App() {

const [formData,setFormData]  =React.useState(
{firstName:""  ,lastName:"",email:"",address:"",location:"", fullname:"",amount:"",pin:""}
)




function handleChange(event){
    setFormData(event.target.value)
  }


 return(
  <> 
     <h1>Checkout Page</h1>


<div className='container'>
   <div className='checkout'>

<div className='check'>
   <form>
   
   <label for="fname"><i class="fa fa-user"></i> First Name</label>
       <input
         type="text"
         placeholder='First Name'
         onChange={handleChange} />

   <label for="fname"><i class="fa fa-user"></i> Last Name</label>


       <input
         type="text"
         placeholder='Last Name'
         onChange={handleChange}
         name="lastName" />

   <label for="email"><i class="fa fa-envelope"></i> Email</label>

       <input
         type="text"
         placeholder='Email'
         onChange={handleChange}
         name="email" />


<label for="phonenumber"><i class="fa fa-phone" aria-hidden="true"></i> PhoneNumber</label>


       <input
         type="text"
         placeholder='PhoneNumber'
         onChange={handleChange}
         name="PhoneNumber" />

<label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
       <input
         type="text"
         placeholder='Address'
         onChange={handleChange}
         name="address" />

<label for="country"><i class="fa fa-address-card-o"></i> Country</label>
       <input
         type="text"
         placeholder='Country'
         onChange={handleChange}
         name="location" />

<input type="submit" value="Save To Proceed" class="btn"/>


     
     </form>
     </div>

     <div className='payment'>
    <h1>Payment</h1>

    <label for="cars">Select payment method:</label>
    <div className='method'>
    {/* <select 
    name=" payment method"
    onChange={handleChange}>
    <option value="C">Cash On Delivery</option>
    <option value="M">Mpesa</option>
 
    </select> */}

<input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
 Pay with Mpesa

 <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                                                Cash on Delivery


    </div>


    <label for="fname"><i class="fa fa-user"></i> Full Name</label>

       <input 
        type="text" 
        onChange={handleChange}
        placeholder="fullname"
        name="fullname"
       />
     <label for="fname"><i class="fa fa-money" aria-hidden="true"></i>Amount</label>

      <input 
        type="text" 
        onChange={handleChange}
        placeholder="Amount"
        name="amount"
       />
  
  <label for="Pin"><i class="fa fa-lock" aria-hidden="true"></i> Pin</label>

    <input 
        type="text" 
        onChange={handleChange}
        placeholder="Your Pin"
        name="Pin"
       />
  



     <input type="submit" value="Continue to checkout" class="btn"/>

   

  </div>
  </div>
</div>
     </>
   

 );


 }

export default App;
