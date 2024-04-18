//server component with API calls
import React from 'react'
import Product from './product'
const getData = async() =>{
    let res = await fetch('https://dummyjson.com/products')
    res = await res.json()
    return res.products
}


const page = async() => {
   let products = await getData()
   console.log(products)
    console.log("====")
  return (
    <div>
        <h1>Products </h1>
        {
          products.map((data) =>{
              return(
                <>
                <h2>title : {data.title}</h2>
                <Product price={data.price}/>
                
                </>
              )
          })
        }
    </div>
  )
}

export default page