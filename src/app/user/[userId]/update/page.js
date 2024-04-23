"use client";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
    let id = params.userId;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

const getUserDetails=async() => {
    let data = await fetch(`/api/users/${id}`)
    data = await data.json()
    setName(data?.name)
    setAge(data?.age)
    setEmail(data?.email)
    console.log(data,"data")
}
 
const updateuser = async() => {
  let result = await fetch(`/api/users/${id}`,{
    method: "PUT",
    body: JSON.stringify({name,age,email})
  })
  result = await result.json()
  console.log(result)
  if (result.success){
    alert('update successfully')
  }
  else{
    alert('not update successfully')
  }
}
  

  useEffect(() =>{
    getUserDetails()
  },[])
  return (
    <div>
      <h1>Update User Details</h1>

      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
      />
    
      <button className="button" onClick={updateuser}>
        update USer
      </button>
    </div>
  );
};

export default page;
