import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home() {
    const [users,setUsers]=useState([])

    useEffect(()=>{
        loadUsers();
    },[]);

    const loadUsers=async()=>{
        const result = await axios.get("http://localhost:8080/users")
        setUsers(result.data)
        console.log(result.data)
    }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">profile picture</th>
      <th scope="col">Username</th>
      <th scope="col">Country</th>
      <th scope="col">email</th>
      <th scope="col">message</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user, index)=>
        <tr>
        <th scope="row" key={index}>{index+1}</th>
        <td>{user.name}</td>
        <td><img width="100px" height="100px" src={user.profileImageUrl} alt={`Image for ${user.username}`} /></td>
        <td>{user.username}</td>
        <td>{user.country}</td>
        <td>{user.email}</td>
        <td>{user.message}</td>
        <td></td>
        

      </tr>
        )
    }

   
    
  </tbody>
</table>
        </div>
    </div>
  )
}
