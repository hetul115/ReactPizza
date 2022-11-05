import React from 'react';
import { useState } from 'react';

import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import SelectQuantityPopup from '../../Popup/SelectQuantityPopup';
import './styles.css';

const MenuItem = ({ item, cart, setCart }) => {
  const { id, img, name, price, popularity } = item;
  const [popup,setPopup] = useState(false);

  return (
    <>
    <div className='item'>
      <img src={img} alt='food' />
      <div className='item-head_desc'>
        <p className='head_desc-name'>{name}</p>
        <p className='head_desc-popularity'>
          <small>Popularity:- {popularity}</small>
        </p>
      </div>
      <div className='item-foot_desc'>
        <span className='foot_desc-price'>${price}</span>
        <ButtonAddRemoveItem
          setPopup={setPopup}
          item={item}
          cart={cart}
          setCart={setCart}
        />
      </div>
    </div>

      <SelectQuantityPopup 
        popup={popup} 
        setPopup={setPopup}
        item={item}
        cart={cart}
          setCart={setCart}
       />
    </>
  );
};

export default MenuItem;
