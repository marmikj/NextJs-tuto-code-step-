import React from 'react'
import custom from './custom.module.css'
import outside from '@/app/style/outside.module.css'

const Study = () => {
  return (
    <div>
        <h1>All Lectures of college</h1>
        <h1 className={custom.main}>welcome to school</h1>
        <h1 className={outside.main}>hello admin </h1>
    </div>
  )
}

export default Study