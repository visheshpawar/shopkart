import React, { Component, useState } from "react";
import "../App.css";

import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Item(props) {
const [pi, setpi] = useState(props.price);
const [pii, setpii] = useState(0);

const cwd = (e) =>
{

  props.cw([props.title,props.iurl,pi])
  window.location.href = '/#/details'

 
e.preventDefault()

}




  return (
<>
<li className="cards_item">
  <div className="card">
    <div className="card_image">
  <img src={props.iurl}  />
    </div>
    <div className="card_content">
      <h2 className="card_title" >{props.title}</h2>
      <p className="card_text">₹{pi}/-</p>
     <form>
      <button className="btn card_btn" type="submit" id="fg" onClick={cwd} >Details</button>
      </form>
    </div>
  </div>
</li>
</>
  )
}






