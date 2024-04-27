import Item from "./Item";

import React, { Component } from "react";
import "../App.css";



export default function Toys(props) {
  const defe = (word) =>
{
 let da = word;
  
  props.stp(da)
}

  return (
    <>

    <div className="main" >
      <ul className="cards">
        <Item
          price="3009"
          title="Jerry stuffed toy"
          iurl="https://assets.ajio.com/medias/sys_master/root/20220528/stcV/6291b09ff997dd03e242608c/-473Wx593H-4924084910-multi-MODEL.jpg"
          cw={defe}       />
        <Item
          price="12499"
          title="RC ferrari"
          iurl="https://m.media-amazon.com/images/I/81OvXb5fZuL.jpg"
          cw={defe}      />
        <Item
          price="111899"
          title="RC helicopter"
          iurl="https://www.modellbau-berlinski.de/img_big/4aefb6fc7fec44176fd75e5c3c377df7.jpg"
          cw={defe}       />

      

        <Item
          price="1199"
          title="Walkie talkie"
          iurl="https://m.media-amazon.com/images/I/51WrZqKwDiS._AC_UF1000,1000_QL80_.jpg"
          cw={defe}       />
        <Item
          price="499"
          title="Girls projector watch"
          iurl="https://www.trendilook.com/wp-content/uploads/2022/09/KW-00004119.jpg"
          cw={defe}      />
        <Item
          price="78899"
          title="Working robot toy"
          iurl="https://m.media-amazon.com/images/I/71xxDNZKl5L._AC_UF1000,1000_QL80_.jpg"
          cw={defe}         />
      </ul>
    </div>
 


  </>
  )
}



  