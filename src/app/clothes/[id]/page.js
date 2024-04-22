import React from 'react'

const getCustomer = async(id) =>{
    let data = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
     data = await data.json()
    console.log(data)
    return data 
  }
const page = async({params}) => {
    console.log(params,"custom")
    console.log("@@@@@")
    const custmor = await getCustomer(params.id)
    console.log(custmor ,"i d" )

  return (
    <div>
        <h1>user details </h1>
        <h2>{custmor.title}</h2>
        <h2>{custmor.description}</h2>
        <h2>{custmor.price}</h2>
    </div>
  )
}

export default page