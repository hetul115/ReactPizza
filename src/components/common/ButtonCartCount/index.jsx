import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';

const ButtonCartCount = ({ cartCount }) => {
  const history = useHistory();
  return (
    <div className='btnCartCount' onClick={() => history.push('/cart')}>
      <i className='fas fa-shopping-cart'></i>
    </div>
  );
};

export default ButtonCartCount;
