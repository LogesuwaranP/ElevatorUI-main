import React from 'react';
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
  return (
    <div className='nav-comtainer'>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/transactions")}>Transaction</button>
        <button onClick={()=>navigate("/config")}>🔧</button>
    </div>
  )
}

export default Nav
