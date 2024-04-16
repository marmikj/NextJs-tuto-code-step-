'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const about = () => {
  const route =useRouter()
  return (
    <div>
        <h1>ABOUT PAGE</h1>
        <button onClick={()=>route.push('/')} style={{backgroundColor:'yellow'}}>Go TO Home PAge </button><hr />
        <Link href='about/aboutcollege'>Go TO About College</Link><br />
        <Link href='about/aboutstudent'>Go TO About Student</Link>
    </div>
  )
}

export default about