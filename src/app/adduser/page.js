"use client"
import React, { useState } from 'react'


const page = () => {
  const [name,setName]= useState("");
  const [age,setAge]= useState("");
  const [email,setEmail]= useState("");
  
  const adduser =async() => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users",{
      method: "POST",
      body: JSON.stringify({name,age,email})
    })
    response = await response.json()
    if(response.success){
      alert("successfully added user")
    }
    else{
      alert("failed to add user")
    }
    console.log(response);
  }
  return (
    <div>
        <h1>Add USers </h1>
        <input type="text" placeholder="name"  value={name} onChange={(e)=>setName(e.target.value)} className='input-field'/>
        <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}className='input-field'/>
        <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} className='input-field'/>
        <button className='button' onClick={adduser}>Add USer</button>
    </div>
  )
}

export default page