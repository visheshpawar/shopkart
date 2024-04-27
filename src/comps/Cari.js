import React from 'react'
import '../App.css'
export default function Cari(props) {

    const taker = () =>
    {
     let x=document.getElementById('qpy').value 
     if(x>=1)
     {
      x=x-1
      document.getElementById('qpy').value=x
     }
    }
    const adder = () =>
    {
     let y=Number(document.getElementById('qpy').value)
      y=y+1
      document.getElementById('qpy').value=y
    }
    

  return (
    
       <div className='ctr-ii'>
  <div className='lft'><img src={props.url} className='c-ij'/></div>

  <div className='rft'>
    <div>{props.name}</div>
    <div>₹{props.price}</div>
    <div className='q-t'><button className='qw-t' onClick={taker}>-</button><input type='text' value="1" readOnly className='q-ft' id='qpy'/><button className='qw-t'  onClick={adder}>+</button></div>
    </div>
  <div className='rrft' >X</div>


  </div>
 
    
  )
}
