import React from 'react'
import { useState,  useEffect } from 'react'

import '../style.css'

import St from './St'

//import Cari from './Cari'
export default function Cart(props) {
 // var mx=0;





/*
useEffect(() => {





 }
 



}, [props.name]);
*/



















const cgs = () => 
{

console.log("hello")
}


  return (
    <>
       


<St/>


        <div className='det-1'>

        <h1 id='bh1' onClick={cgs} >Nothing Here</h1>
  
<div className='crt-i' id='c-y'>


</div>






        <div className='foot'>
            <div className='lf' id='c-m'>₹{props.price}</div>
            <div className='rf'><button className='but'>Proceed</button></div>
            
            </div>
        </div> 
        
       
    
    </>
  )
}

      
