'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
  const route = useRouter()
  const navigate = (page)=>{
    route.push('/login/'+page)
  }
  return (
    <div> 
     <h1 className='heading'>Login  page</h1><hr />
     <button onClick={()=>navigate('loginstudent')}>Login to Student</button><br />
     <button onClick={()=>navigate('loginteacher')}>Login to Teacher</button><br /> 
     <Link href="/">BAck to Home </Link> 
    </div>
  )
}

export default page