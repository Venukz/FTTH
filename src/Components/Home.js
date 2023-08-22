import React from 'react'
import './home.css'
import Signin from './Signin';

function Home() {

    const logout = () =>
    {
        localStorage.removeItem("signup")
        window.location.reload()
    }
    const dele = () =>
    {
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div>
      <h4>Hello {localStorage.getItem("name")}</h4>
        <h4>Welcome to FTTH Services</h4>
        <button onClick={logout}className='log'>Log Out</button>
        <button onClick={dele}className='delete'>Delete Account</button>
    </div>
  )
}

export default Home;