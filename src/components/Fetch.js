import React, { useEffect, useState } from 'react'



    

const Fetch = () => {
  const [deta, setDeta] = useState([])

  const fetchData = () => {
    fetch('http://localhost:3000/info')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        setDeta(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>


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

 {deta.map(deta=> (
              <tr key={deta.id} >
        
                      <td>{deta.firstName}</td>
                       <td>{deta.lastName}</td>
                      <td>{deta.address}</td>
                      
              </tr>
                   
           
          ))}
 




</table>
</div>


      
    </div>
  )
}

export default Fetch




