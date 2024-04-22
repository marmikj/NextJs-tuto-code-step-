import React from 'react'
import  getUsers from '../../../../services/getusers' 

const UserDetails =async (props) => {
  const getUsersList =  getUsers()
  const users = await getUsersList
  const currentId = props.params.userId
  const userData = users[currentId-1]
  console.log(users[currentId-1])
  return (
    <div>
      <h1>User Details</h1>
      <h1>{userData?.id}</h1>
      <h1>{userData?.name}</h1>
      <h1>{userData?.website}</h1>
        
        
    </div>
  )
}

export default UserDetails

export async function generateStaticParams() {
  const getUsersList =  getUsers()
  const users = await getUsersList
  return users.map((user) => ({
    userId: user.id.toString()
  }))
}