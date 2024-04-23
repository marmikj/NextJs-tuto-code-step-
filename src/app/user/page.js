import React from 'react'
import  getUsers from '../../../services/getusers'
import Link from 'next/link'
import DeleteUser from '../components/deleteUser'


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
                    <div className='user-item'>
                        <h1>
                            <Link href={`/users/${user.id}`}>{user.name}</Link><br />
                           <span><Link href={`/user/${user.id}/update`}>Edit</Link></span> 
                            <DeleteUser id={user.id}/>
                        </h1>
                    </div>
                )
            })
        }
    </div>
  )
}

