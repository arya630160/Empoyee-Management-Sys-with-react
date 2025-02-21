import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams , Link } from 'react-router-dom'

export default function ViewUser() {

      const [user,setUser]=useState({
        name:"",
        designation:"",
        email:""
      })

      const {id}=useParams();


      useEffect(()=>{
          loadUser()
      }, [])

      const loadUser=async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
      }

  return (
    <div className='container'>
     <div className='row'>
        <div className='col-md-6 offset-md-3 border round p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Employee Details</h2>

          <div className='card'>
            <div className='card-header'>
                Details of Employee :
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                          <b>Name :</b>
                          {user.name}
                    </li>

                    <li className='list-group-item'>
                          <b>Designation :</b>
                          {user.designation}
                    </li>

                    <li className='list-group-item'>
                          <b>Email :</b>
                          {user.email}
                    </li>

                </ul>

            </div>

          </div>
          <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>

      </div> 
     </div>
   </div>       
  )
}
