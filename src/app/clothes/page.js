import Link from 'next/link'
import React from 'react'

const getCustomer = async() =>{
  let data = await fetch('https://api.escuelajs.co/api/v1/products')
   data = await data.json()
  console.log(data)
  return data 
}


const page = async() => {
  let customers = await getCustomer()
  return (
    <div>
        <h1>clothes details</h1>
        {
          customers.map((items,index) =>{
            return(
              <div key={index}>
                <Link href={`clothes/${items.id}`}>{items.title}</Link>

              </div>
            )
          })
        }
    </div>
  )
}

export default page