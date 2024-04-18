import React from 'react'

const getData = async() =>{
    let res = await fetch('https://dummyjson.com/products')
    res = res.json()
    return res.products
}

const page = async() => {
   
    console.log("====")
  return (
    <div>
        <h1>Products </h1>
    </div>
  )
}

export default page