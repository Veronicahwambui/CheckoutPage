import React, { useEffect, useState } from 'react'



    

const Fetch = () => {
  const [deta, setDeta] = useState([])

  const fetchData = () => {
    fetch('http://localhost:3000/info')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDeta(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      

      {deta.length > 0 && (
        <tr>
          {deta.map(deta => (
            <td key={deta.id}>{deta.name}</td>
          ))}
        </tr>
      )}
 
    </div>
  )
}

export default Fetch




