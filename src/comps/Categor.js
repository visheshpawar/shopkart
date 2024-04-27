import React, { Component } from 'react'
import '../App.css';
import {Link, useLocation} from 'react-router-dom';
import female from './female.png'
import chil from './children.png'
import acce from './accessories.png'
import toy from './toys.png'

import shoe from './footwear.png'
import malee from './male.png'


export default class Categor extends Component {





  render() {

  



    return (
      <>
       <div className='cate-box'>


<div>
<div className='cate-in'>
<Link to="/mens">
 <img src={malee} className='cate' alt='imag' />
 </Link>
  
</div>
<div className='c-name'> Mens</div>

</div>






<div>

<div className='cate-in'>
  <Link to="/kids">
  <img src={chil} className='cate' alt='imag'/>
  </Link>
  
  </div>

<div className='c-name2'>Kids</div>
</div>



<div>
<div className='cate-in'>
  <Link to="/purse">
  <img src={acce} className='cate' alt='imag'/>
  </Link>
  </div>
<div className='c-name3'>Bags</div>
</div>



<div>
<div className='cate-in'>
  <Link to="/shoes">
  <img src={shoe} className='cate' alt='imag'/>
  </Link>
  </div>
<div className='c-name4'>Shoes</div>

</div>


<div>

<div className='cate-in'>

<Link to="/toys">
  <img src={toy} className='cate' alt='imag'/>
  </Link>
  </div>

<div className='c-name5'>Toys</div>
</div>


<div>
<div className='cate-in'>
<Link to="/women">
  <img src={female} className='cate' alt='imag'/>
  </Link>
  </div>

<div className='c-name1'>Women</div>
</div>






       </div>

     



       
      </>
    )
  }
}
