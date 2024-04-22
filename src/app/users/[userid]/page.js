import { API_BASE_URL } from '@/app/config/constant'
import React from 'react'

const page = () => {
    console.log(process.env.DB_PASSWORD,"development")
  return (
    <main>
    {
        process.env.NODE_ENV=="development"?
        <h1>you are in development</h1>:<h1>you are in production</h1>

    }
    {
      API_BASE_URL
    }
        
    </main>
  )
}

export default page