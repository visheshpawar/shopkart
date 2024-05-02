import React , {useState, useEffect}from 'react'
import '../App.css'
import product from "./alit.json";
import Carm from './Carm';
export default function Cart(props) {
  const arr=props.demp;

 /* useEffect(() => {

    console.log(arr)
  }, []);
    

*/
  const for_loop = []

  if (arr){
  for (let i=0;i<arr.length;i++) {
    for_loop.push(


      product.filter((item)=>item.id== arr[i] ).map((item)=>(
        <Carm key={item.id} id= {item.id} title={item.title} iurl={item.iurl} price={item.price} />
        
        ))
      
      
  
  
  );
}
  };








  return (
 


    
    <div className='ehi'>

{for_loop}





<div className='couy'>
	<div> Total Amount : ₹0/-</div>
	<div><button className='bom'>Proceed To Pay</button></div>
</div>
  





	   
    </div>
  )
}

      
