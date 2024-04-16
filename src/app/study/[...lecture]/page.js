'use client'
import React from 'react'

const Lecture = ({params}) => {
    console.log(params.lecture ,"saddasdas")
  return (
    <div>
       {
            params.lecture.map((index ,segment)=>{
            console.log(segment,"sdad")
            return(
                <ul key={index}>
                    <li>{segment}</li>
                </ul>
            )
        })
       }
    </div>
  )
}

export default Lecture