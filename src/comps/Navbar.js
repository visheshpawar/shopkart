import React, { useState,Component } from 'react'
import '../App.css'
import {Link, useLocation} from 'react-router-dom';
import cart from './cart.png'
import prof from './prof.png'
import hom from './home.png'
import Info from './Info'
import Bak from './Bak';
export default function Navbar(props) {

  const opac = () =>
  {
    document.getElementById('jy-1').style.animation=" .5s comer linear 1";
    document.getElementById('jy-2').style.animation=" .5s comer-1 linear 1";
    document.getElementById('jy-3').style.animation=" .5s comer linear 1";
    document.getElementById('jy-4').style.animation=" .5s comer-1 linear 1";




      document.getElementById('ioo').style.height="100%";
      document.getElementById('crs').style.transform="rotateZ(-360deg)";
      document.getElementById('crs').style.opacity="1";
     
    
     
  }

  
  const pro = (event) =>
  {

    let x = text.toLowerCase()
   
    if(x.includes("men"))
    {
      if(!x.includes("women"))
      {
      window.location.href = '/#/mens';
      }
      else if(x.includes("women"))
      {
        window.location.href = '/#/women';
      }

    }
   

    else if(x.includes("kid"))
    {
      window.location.href = '/#/kids';
    }
    else if(x.includes("bag"))
    {
      window.location.href = '/#/purse';
    }
    else if(x.includes("shoe"))
    {
      window.location.href = '/#/shoes';
    }
    else if(x.includes("toy"))
    {
      window.location.href = '/#/toys';
    }
    let element=document.getElementById('s-f')
    element.blur()
    Settext("")
  }
  const huc = (event) =>
  {
    Settext(event.target.value)
  }
  






const [text, Settext] = useState("")
  return (
    <>






     
     <Info/>
        <div className='navi'>
      
<div className='l-navi'><div className='l-name'><Link to="/" className='lk'>{props.title}</Link></div></div>
<div className='r-navi'>
    <div>
        <input type="text" className='r-sear' id="s-f"  onKeyDown={(e) => {
        if (e.key === "Enter")
            pro();
        
        }}  placeholder='Search' value={text} onChange={huc}  />
       
    </div>
  <Link to="/cart">
    <img src={cart} className='r-name' alt='imag'  />
   
    </Link>
    <img src={prof} className='r-name' alt="imag" onClick={opac}/>
  
  
  
   </div>




        </div>


    </>
  )
}




























