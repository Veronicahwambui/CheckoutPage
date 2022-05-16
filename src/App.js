import React, { useEffect, useState } from 'react'
import './App.css';




function App() {


const [deta, setDeta]=useState("")
useEffect(()=>{
  
  fetch('http://localhost:3000/info')
  .then(res =>{
    return res.json();
  }).then(data => {
    console.log(data);
    // setFormData(data);
    // setDeta(data);
  })
})

const [formData,setFormData]  =React.useState(

{firstName:"" ,lastName:"",email:"",phoneNumber:"",
address:"",location:"", fullname:"",amount:"",pin:""}
 
)


const[firstName, setFirstname]=useState('');
const[lastName, setLastname]=useState('');
const[email, setEmail]=useState('');
const[phoneNumber, setPhonenumber]=useState('');
const[address, setAddress]=useState('');
const[location, setLocation]=useState('');
const[fullname, setFullname]=useState('');
const[amount, setAmount]=useState('');
const[pin, setPin]=useState('');
// const[isPending,SetIsPending]=useState(false)




// SetIsPending(true);

console.log(formData)

 //save data
 let saveData = (event) =>{
  localStorage.setItem( 'hjjj',FormData);
}

// let getData = () =>{
//   var data = localStorage.getItem("object")

 
 

 function handleChange(event){
    setFormData({...formData ,
    [event.target.name] : event.target.value
    })

  }
  const handleSubmit=(e)=>{
    e.preventDefault()

  const deta ={firstName,lastName,email,phoneNumber,address,location,fullname,amount,pin}

    console.log(deta);
  

  fetch( 'http://localhost:3000/info', {
   method:'POST',
   headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deta)
    }).then(() => {
      console.log('order added');
    })
  
  }

 

 return(
  
  <> 

     <h1>Checkout Page</h1>

<div className='container'>
   <div className='checkout'>

<div className='check'>

   <form onSubmit={handleSubmit}>
   
   <label for="fname"><i class="fa fa-user"></i> First Name</label>
       <input
         type="text"
         name='firstName'
         placeholder='First Name'
         onChange={(e) => {setFirstname(e.target.value)}}

         />

   <label for="fname"><i class="fa fa-user"></i> Last Name</label>


       <input
         type="text"
         name="lastName" 
         placeholder='last Name'
         onChange={(e) => {setLastname(e.target.value)}}
       
         />

   <label for="email"><i class="fa fa-envelope"></i> Email</label>

       <input
         type="text"
         placeholder='Email'
         onChange={(e) => {setEmail(e.target.value)}}
         name='email' 
         />


<label for="phonenumber"><i class="fa fa-phone" aria-hidden="true"></i> PhoneNumber</label>


       <input
         type="text"
         placeholder='PhoneNumber'
         onChange={(e) => {setPhonenumber(e.target.value)}}
         name='PhoneNumber'
         />

 <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
       <input
         type="text"
         placeholder='Address'
         onChange={(e) => {setAddress(e.target.value)}}
         name='address'
         />

  <label for="country"><i class="fa fa-address-card-o"></i> Location</label>
       <input
         type="text"
         placeholder='Location '
         onChange={(e) => {setLocation(e.target.value)}}
         name="location" />



 {/* <input type="submit"  onClick={saveData}value="Save To Proceed" class="btn"/> */}
     <button  type='submit' className='btn'> Save</button>

 </form>
     </div>

     <div className='payment'>
    <h1>Payment</h1>

    <label for="cars">Select payment method:</label>

    <div className='method'>
    
 <div className='select'>
 <input type="radio" 
 name="optionsRadios" 
 id="optionsRadios2" 
 value="option2" />
  Pay with Mpesa

 <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
  Cash on Delivery

</div>
    </div>


    <label for="fname"><i class="fa fa-user"></i> Full Name</label>

       <input 
        type="text" 
        onChange={(e) => {setFullname(e.target.value)}}
        placeholder="fullname"
        name="fullname"
       />
     <label for="am"><i class="fa fa-money" aria-hidden="true"></i>Amount</label>

      <input 
        type="text" 
        onChange={(e) => {setAmount(e.target.value)}}
        placeholder="Amount"
        name="amount"
       />
  
  <label for="Pin"><i class="fa fa-lock" aria-hidden="true"></i> Pin</label>

    <input 
        type="password" 
        onChange={(e) => {setPin(e.target.value)}}
        placeholder="Your Pin"
        name='Pin'
       />
  



     <input type="submit" value="Continue to checkout" class="btn"/>

   </div>
  </div>
</div>


<div>

<h1> Customer Details</h1>
    <table>
  <tr>
    <th>FirstName</th>
    <th>LastName</th>
    <th>Address</th>
  </tr>
<tr>
  <td></td>
  <td></td>
  <td></td>
  </tr>
  
  <tr>
  <td></td>
  <td></td>
  <td></td>
  </tr>

  


   
</table>
</div>
     </>
  

 );


 }

export default App;
