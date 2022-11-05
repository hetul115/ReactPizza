import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';

const ButtonAddRemoveItem = ({  setPopup, item, cart, setCart }) => {
  const [quantity,setQuantity] = useState(0);

  useEffect(()=>{
    setQuantity(cart?.items?.find((x)=>x?.id === item?.id)?.quantity || 0);
  },[cart])

  const handleChange = (direction)=>{
    const ind = cart?.items?.findIndex((x)=>x?.id === item?.id);

    if(ind !== -1 && ind !== undefined){
      if((cart?.items?.[ind]?.quantity>=10 && direction === 1) || (cart?.items?.[ind]?.quantity<=0 && direction === -1)) 
        return;

      let itemsWithoutObj = cart?.items?.filter((x)=>x?.id !== item?.id);

      let amt = 0;
      itemsWithoutObj?.map((x)=>amt+=(x?.price * x?.quantity));
      amt += (item?.price * (cart?.items?.[ind]?.quantity + direction));
      
      itemsWithoutObj?.push({...item,quantity: cart?.items?.[ind]?.quantity + direction});
      setCart({...cart, items: itemsWithoutObj, total_amt: amt});
    }
  }

  return (
    <div className='btnAddRemove'>
      {quantity !== 0 ? (
        <div className='btnAddRemove-positive'>
          <i
            className='fa fa-minus'
            aria-hidden='true'
            onClick={()=>handleChange(-1)}
          ></i>
          <span> {quantity}</span>
          <i className='fa fa-plus' aria-hidden='true' onClick={()=>handleChange(1)}></i>
        </div>
      ) : (
        <div onClick={()=>setPopup(true)} className='btnAddRemove-negative'>
          <span >ADD</span>
          <i className='fa fa-plus' aria-hidden='true'></i>
        </div>
      )}
    </div>
  );
};

export default ButtonAddRemoveItem;
