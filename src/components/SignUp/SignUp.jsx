import React from 'react'
import { Button } from 'react-bootstrap'
import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../context/coin.context";
import { useNavigate } from 'react-router-dom'
import axios from "axios";

function SignUp() {
  let navigate = useNavigate()
  const {
    setError,
    trending, setTrending,
    total
  }  = useContext(AppContext)


    async function handleSignUp(event){
        console.log(event)
        event.preventDefault()
        
        let user = {
          username: event.target.username.value, 
          email: event.target.email.value, 
          password: event.target.password.value, 
        }
        try {
          await axios.post('http://localhost:5005/api/signup', user, {withCredentials: true})
          navigate('/signin')
        }
        catch(err){
          setError(err.response.data.errorMessage)
        }
      }



  return (
<div id="loginform">
<h2 id="headerTitle">Signup to CryptoTrove</h2>
<form onSubmit={handleSignUp}>
<div class="row">

		  <label>Username</label>
		  <input name="username" type="text" placeholder="Enter username"/>
		  
		</div>  
<div class="row">

		  <label>Email</label>
		  <input name="email" type="email" placeholder="Enter email"/>
		  
		</div>  
		<div class="row">
		
		  <label>Password</label>
		  <input name="password" type="password" placeholder="Enter password"/>
		  
		
     <Button className='w-100' type="submit" id="fix" >Sign up</Button>
   </div>
</form>

  </div>
  )
}

export default SignUp 






// <form onSubmit={handleSignUp}>
//         <p>Please Signup</p>
//         <input  name="username"  type="text"  placeholder="Enter Username"/>
//         <input  name="email"  type="email"  placeholder="Enter Email"/>
//         <input  name="password"  type="password"  placeholder="Enter Password"/>
//         <Button  type="submit" >Submit</Button>
//     </form>