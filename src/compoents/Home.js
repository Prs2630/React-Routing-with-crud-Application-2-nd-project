import React,{useState,useEffect} from "react";
import axios from "axios"
 import {Link} from "react-router-dom";

const Home = () => {
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    loadUsers();
    console.log("status ok")
  },[]);
  const loadUsers=async()=>{
    const result=await axios.get("http://localhost:3003/users");
    setUsers(result.data.reverse()) //to add 1 st reverse it
    console.log(result)
  }
  const deleteUser= async id=>{
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();

  }
  return (
    <div>
      <h1>welcome!!!</h1>
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user,index)=>(
        <tr>
      <th scope="row">{index+1}</th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <Link to class= "btn btn-primary mr-2" to={`/users/view/${user.id}`}>View</Link>
        <Link to class= "btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
        <Link to class= "btn btn-danger" onClick={()=>deleteUser(user.id)}>Delete</Link>

      </td>
    </tr>

      ))
    }
  </tbody>
</table>
      
    </div>
  );
};

export default Home;
