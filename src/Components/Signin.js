import React,{useEffect, useRef, useState} from 'react';
import './header.css';
import Home from './Home';

function Signin() {

const name = useRef();
const email = useRef();
const password = useRef();
const phoneNumber = useRef();
const localsignup = localStorage.getItem("signup")
const localEmail = localStorage.getItem("email")
const localpassword = localStorage.getItem("password")
const localname = localStorage.getItem("name")
const [showHome,setshowHome] = useState(false)
const [show,setShow]= useState(false)


useEffect(() => {
  if(localsignup)
  {
    setshowHome(true)
  }
  if(localEmail)
  {
    setShow(true)
  }
})

  const handleClick =()=>{
    if(name.current.value&&email.current.value&&password.current.value)
    {
      localStorage.setItem("name",name.current.value)
      localStorage.setItem("email",email.current.value)
      localStorage.setItem("password",password.current.value)
      localStorage.setItem("phoneNumber",password.current.value)
      localStorage.setItem("signup",email.current.value)
      alert("Account Created Sucessfully")
      window.location.reload()
    }
  }


  const handleSignin = () => {
    if(email.current.value==localEmail&&password.current.value==localpassword)
    {
      localStorage.setItem("signup",email.current.value)
      window.location.reload()
    }
    else{
      alert("Please enter valid Creditionals")
    }

  }
  return (
    <div>
      <center>

        {showHome?<Home/>:
        (show?
            <div className='form-items'>
              <h2>Hello {localname}</h2>
              <label>Email ID:</label>
              <input type='email' placeholder='Enter your Email ID' ref={email}/><br/>
              <label>Password:</label>
              <input type='password' placeholder='Enter Password' ref={password}/><br/>
              <button type='onsubmit' onClick={handleSignin}>Sign In</button>
            </div>
          :
          <div className='form-items'>
          <label>Name:</label>
          <input type='text' placeholder='Enter your Username' ref={name}/><br/>
          <label>Email ID:</label>
          <input type='email' placeholder='Enter your Email ID' ref={email}/><br/>
          <label>Password:</label>
          <input type='password' placeholder='Enter Password' ref={password}/><br/>
          <label>Phone Number:</label>
          <input type='phonenumber' placeholder='Enter Phone Number' ref={phoneNumber}/><br/>
          <button type='onsubmit' onClick={handleClick}>Sign Up</button>
        </div>
        )  
        }
      </center>
    </div>
  )
}

export default Signin;