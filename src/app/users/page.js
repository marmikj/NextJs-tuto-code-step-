"use client"
import React, { useState } from 'react'

const Page = () => {
    const [h3style,setH3Style]=useState({backgroundColor:"green"});
  return (
    <div>
      <h1 style={{backgroundColor:'blue'}}>Users Page</h1>  
        <h2>Headings 2 in users Page </h2>
        <h3 style={h3style}> heading 3 for users</h3>
        <button onClick={()=>setH3Style({backgroundColor:'red'})}>Update Style</button><hr />
    </div>
  )
}

export default Page