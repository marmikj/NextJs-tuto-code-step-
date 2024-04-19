'use client'
import Script from 'next/script'
import React from 'react'

const page = () => {
  return (
    <div>
        <Script
        src='./location.js'
        onLoad={()=>
        {
            console.log('file loaded');
        }}
        />
        <h1>user details</h1>
    </div>
  )
}

export default page