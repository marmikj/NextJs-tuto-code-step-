'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
//pase 2 start with client Side api calling ################
const Page = () => {
   const [product ,setProducts]= useState([])
   
//   useEffect = async() => {
//         let data = await fetch('https://dummyjson.com/products')
//         data = await data.json()
//         console.log(data)
//         setProducts(data.products)
       
//     }

    useEffect(() => {
        fetch('https://dummyjson.com/products')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setProducts(data.products);
          });
      }, []);
  return (
    <div>
        <h1>Product List</h1>
        {
            product.map((items,index)=>{
               return(
               <ul key={index}>
                <h3 style={{backgroundColor:'yellow'}}>brand: {items.brand}</h3><h5> price: {items.price}</h5>
                <Image src={items.images[0]} height={100} width={100} alt='image not found' priority={true} />
               </ul>
               )
            })
        }
    </div>
  )
}

export default Page