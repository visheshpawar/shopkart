import React from 'react'
import "../App.css"
const Carm = (props) => {



const removeitem = (data) => {

//  document.getElementById(data).style.display="none";
  props.jb(props.price)
  console.log(props.title+1)
  props.lij([props.id,props.price])
  console.log(props.id)

}

const dfr = () =>{
 let s = document.getElementById(props.title+1).value;
 if (s>1)
 {
 document.getElementById(props.title+1).value=s-1;

 }
}
const afr = () =>{
  let a = Number(document.getElementById(props.title+1).value);
  document.getElementById(props.title+1).value=a+1;

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
    
    <button className='d5'  onClick={dfr} >-</button>
    <input readOnly className='d-4' value={1}  id={props.title+1} / >
    <button className='d5' onClick={afr} >+</button>
    
    </div>
    </div>
        <div className='d3'  onClick={()  => removeitem(props.title)}  >X</div>
       </div>
           </div>
  )
}

export default Carm
