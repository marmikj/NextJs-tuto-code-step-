import React from 'react'

const page = () => {
  return (
    <div>
        <h1>Employee Pages</h1>
    </div>
  )
}

export default page

export async function generateMetadata({ params}) {
  return {
    title: 'Employee Details',
    description : 'Employee Details'
  }
}

