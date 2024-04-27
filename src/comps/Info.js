import React, { Component } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
export default class Info extends Component {
  render() {
    const clac = () => {
      document.getElementById("ioo").style.height = "0%";
      document.getElementById("crs").style.transform = "rotateZ(360deg)";
      document.getElementById('crs').style.opacity="0";
      document.getElementById('jy-1').style.animation=" .9s goer linear 1";
      document.getElementById('jy-2').style.animation=" .9s goer-1 linear 1";
      document.getElementById('jy-3').style.animation=" .9s goer linear 1";
      document.getElementById('jy-4').style.animation=" .9s goer-1 linear 1";
    
    };

    return (
      <>
        <div className="in-o" id="ioo">
          <div className="cross" onClick={clac}>
            <div id="crs">X</div>
          </div>

          <div className="in-i" id="jy">
            <ul className="u-2">
              <li className="sk" id="jy-1">Orders</li>
              <li className="sk" id="jy-2">Account</li>
              <li className="sk" id="jy-3">Settings</li>
              <li className="sk" id="jy-4">Contact Us</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
