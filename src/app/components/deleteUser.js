"use client"
import React from "react";

const DeleteUser = (props) => {
    const id= props.userId
    console.log(id)
    const deleteUser =async() =>{
        let result = await fetch(`/api/users/${id}`,{
            method: 'delete',
        });
        result = await result.json()
        if(result.success){
            alert('Delete user successfully')
        }
        else{
            alert('Failed')
        }

    }
  return (
    <div>
      <span>
        <button onClick={deleteUser}>delete</button>
      </span>
    </div>
  );
};

export default DeleteUser;
