'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
//pase 2 start with client Side api calling ################
const page = () => {
   const [product ,setProducts]= useState([])
   
//   useEffect = async() => {
//         let data = await fetch('https://dummyjson.com/products')
//         data = await data.json()
//         console.log(data)
//         setProducts(data.products)
       
//     }
const customLoader = ({ src, width, quality }) => {
  return `https://cdn.dummyjson.com/product-images/1/${width}
  }`;
};
    useEffect(() => {
        fetch('https://dummyjson.com/products')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data ,"asda");
            console.log(data.products[0].images ,"sdfa");
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
                <h3>brand: {items.brand}</h3><h5> price: {items.price}</h5>
                <Image src={items.images[0]} height={100} width={100} loader={customLoader} alt='image not found' priority={true} ></Image>
               </ul>
               )
            })
        }
    </div>
  )
}

export default page