import React, { forwardRef } from 'react';
import { useState } from 'react';
import MenuItem from './MenuItem';
import './styles.css';

const Menu = forwardRef(({ items, setItems, cart, setCart }, ref) => {
  const [isIncreasing,setIsIncreasing] = useState(false);

  const setAccPopularity = (increasing)=>{
    if(!setItems) return;

    let newItems = [];

    if(increasing) newItems =  items?.sort((a,b)=>a?.popularity-b?.popularity);
    else newItems =  items?.sort((a,b)=>b?.popularity-a?.popularity);

    setIsIncreasing(increasing);
    setItems(newItems);
    console.log('new ->',newItems);
  }

  return (
    <div className='menu_container'>
      {setItems &&(
        <div className='sort_container'>
        <button className='sort_button' onClick={()=>setAccPopularity(!isIncreasing)} >
          Sort By Popularity
        </button>
      </div>
      )}
      
      <main ref={ref}>
      {items?.map((item) => (
        <MenuItem 
        item={item}
         key={item.id}
         cart={cart}
         setCart={setCart}
         /> 
      ))}
    </main>
    </div>
  )
});

export default Menu;
