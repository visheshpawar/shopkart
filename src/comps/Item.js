import React, { Component, useState } from "react";
import "../App.css";

import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Item(props) {
const [pi, setpi] = useState(props.price);
const [pii, setpii] = useState(0);
let x="name";
let y="price";
let z="lik";
const cwd = (e) =>
{

  props.cw([props.title,props.iurl,pi])
  //window.location.href = '/#/details'
localStorage.setItem(x , props.title)
localStorage.setItem(y , pi)
localStorage.setItem(z , props.iurl)
 
e.preventDefault()

}




  return (
<>

<li className="cards_item" onClick={cwd}>
<Link to="/details" className="gu">   <div className="card">
    <div className="card_image">
  <img src={props.iurl}  />
    </div>
    <div className="card_content">
      <h2 className="card_title" >{props.title}</h2>
      <p className="card_text"></p>
     <form>
     <button className="btn card_btn" type="buttton" id="fg" > ₹{pi}/-</button>
      </form>
    </div>
  </div></Link>
</li>
</>
  )
}






