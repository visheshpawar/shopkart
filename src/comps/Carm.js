import React from 'react'
import "../App.css"
const Carm = (props) => {



const removeitem = (data) => {
document.getElementById(data).style.display="none";
}


  return (
    <div id={props.title}>
    <div className='b-con' id='cls'>
    <div className='d1'><img src={props.iurl} className='b-ig'/></div>
    <div className='d2'>
    <div>{props.title}</div>
    <div>₹{props.price}/-</div>
    <hr className='lin'/>
    <div className='gho'>
    
    <button className='d5'   >-</button>
    <input readOnly id='d-4' value={1}/ >
    <button className='d5'>+</button>
    
    </div>
    </div>
        <div className='d3'  onClick={()  => removeitem(props.title)}  >X</div>
       </div>
           </div>
  )
}

export default Carm
