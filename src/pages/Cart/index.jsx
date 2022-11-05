import { createRouteLoader } from 'next/dist/client/route-loader';
import React,{useRef} from 'react';
import EmptyCart from '../../components/Cart/Carts';
import Menu from '../../components/common/Menu';
import Navbar from '../../components/common/Navbar';
import './styles.css';
import {useRecoilState} from 'recoil';
import {globalCart} from "../../components/Atoms/cartAtom";
import { useHistory } from "react-router-dom";


const Cart = () => {
  const [cart,setCart] = useRecoilState(globalCart);
  const menuRef = useRef(null);
  const history = useHistory();


  const handleSubmit = ()=>{
    localStorage.setItem('order', JSON.stringify(cart));

    alert('Your order is submitted!');
    window.location.reload(true);

    history.push('/')
  }
  
  return (
    <>
        <Navbar/>
      <div className='cart-header'>
      </div>
      {cart?.items?.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className='orders'>
          <h1 className='orders-heading'> Orders Details</h1>
          <div className='orders-menu'>
          <Menu 
            items={cart?.items} 
            ref={menuRef} 
            cart={cart}
            setCart={setCart}
            />
          </div>
          <h3 className='orders-total'>Your Total Order Value is =${cart?.total_amt}</h3>
          <button className='buttton' onClick={handleSubmit}>Submit Order</button>
        </div>
      )}
    </>
  );
};

export default Cart;
