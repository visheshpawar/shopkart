import React, { Component } from 'react'
import '../App.css'
import p1 from './bn1.jpg'
import p2 from './bn2.jpg'
import p3 from './bn3.jpg'
import p4 from './bn4.jpg'
import{

  Link

} from "react-router-dom";


export default class Slder extends Component {
  render() {
 
    return (
      <>
<div className='resi'>

<div className='sldr-cont'>

<Link to="/"><img src={p1} className='sldr-img ' alt='ima'/></Link>
<Link to="/"><img src={p2} className='sldr-img ' alt='ima'/></Link>
<Link to="/"><img src={p3} className='sldr-img ' alt='ima'/></Link>
<Link to="/"><img src={p4} className='sldr-img ' alt='ima'/></Link>
<Link to="/"><img src={p1} className='sldr-img ' alt='ima'/></Link>
<Link to="/"><img src={p2} className='sldr-img ' alt='ima'/></Link>
<Link to="/"><img src={p3} className='sldr-img ' alt='ima'/></Link>
<Link to="/"><img src={p4} className='sldr-img ' alt='ima'/></Link>

</div>

</div>


      </>
    )
  }
}
