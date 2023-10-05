import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Display = () => {
  const [data,setData] = useState("");
  const [gotData,setGotData] = useState(false)
useEffect(()=> {
axios.get("https://dummyjson.com/products")
.then(response => {
    setData(response.data)
    setGotData(true)
})
.catch(error => setData("An error occurred: "))
})
    return (
    <div>
        { gotData ?<div>
        <h1>Data Fetched from API</h1>
      <pre>
      {JSON.stringify(data)}
      </pre>
     </div>
        :  <div>Loading...</div>}
    </div>
  )
}

export default Display