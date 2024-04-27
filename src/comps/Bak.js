import React, { Component } from 'react'
import bac from './back.png'
export default class Bak extends Component {
  render() {
   
    const dsf = () =>
    {
      
      document.getElementById('bac-b').style.display="none";
  
    }

    return (
      <>
      <div id="bac-b">
         <a href="javascript:history.go(-1)" onClick={dsf}>x</a>
         </div>
      </>
    )
  }
}
