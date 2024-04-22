import React from 'react'


const page = () => {
  return (
    <div>
        <h1>Add USers </h1>
        <input type="text" placeholder="Username"  className='input-field'/>
        <input type="text" placeholder="Enter Age" className='input-field'/>
        <input type="text" placeholder="Enter Email" className='input-field'/>
        <button className='button'>Add USer</button>
    </div>
  )
}

export default page