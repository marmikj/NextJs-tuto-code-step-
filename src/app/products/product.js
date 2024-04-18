"use client"
import React from 'react'

const product = ({price}) => {
    console.log(price ,"price")
  return (
    <div>
        <button onClick={()=>alert(price)}>check</button>
    </div>
  )
}

export default product