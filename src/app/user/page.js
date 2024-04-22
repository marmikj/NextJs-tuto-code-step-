import React from 'react'
import  getUsers from '../../../services/getusers'
import Link from 'next/link'
export default async function  page(props)  {
   const getUsersList =  getUsers()
   const users = await getUsersList
   console.log(props.params)
  return (
    <div>
        <h1>user pages </h1>
        {
            users.map((user,index) =>{
                return(
                    <div key={user.id}>
                        <h1>
                            <Link href={`/user/${user.id}`}>{user.name}</Link>
                        </h1>
                    </div>
                )
            })
        }
    </div>
  )
}

