import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import {AppContext} from '../../context/coin.context'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import "./SignIn.css";

function SignIn({handleSignIn}) {
	let navigate = useNavigate()
	const { 
		user, setUser,
    setError
	 }  = useContext(AppContext)


	let test = "-> demo login <-";


	if(user){
        return navigate('/portfolio')
      }
    

async function handleSignIn(event){
  event.preventDefault()
  let user = {
    email: event.target.email.value, 
    password: event.target.password.value, 
  }
  try {
    let response = await axios.post('/api/signin', user,{withCredentials: true})
    setUser(response.data)
  }
  catch(err){
    setError(err.response.data.errorMessage)
  }
 
}


	  

return (
	
<div id="loginform">
<h2 id="headerTitle">Welcome Back</h2>
<form onSubmit={handleSignIn}>
<div class="row">

		  <label>Email</label>
		  <input name="email" type="email" placeholder="Enter email"/>
		  
		</div>  
		<div class="row">
		  <label>Password</label>
		  <input name="password" type="password" placeholder="Enter password"/>
		  
		
     <Button  type="submit" id="fix" >Log In</Button>
   </div>
</form>
<div className='admin'>
<p>{test} </p>
<p>test@test.com</p>
<p>test </p>
</div>
  </div>

)

}

export default SignIn


// return (
//     <form onSubmit={handleSignIn}>
// 		<h1>Welcome to {school}</h1>
// 		<input  name="email"  type="email"  placeholder="Enter Email"/>
// 		<input  name="password"  type="password"  placeholder="Enter Password"/>
// 		<Button  type="submit"  >Submit</Button>
// 	</form>
//   )