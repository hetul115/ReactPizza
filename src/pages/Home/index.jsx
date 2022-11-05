import React, { useRef } from "react";
import ButtonCartCount from "../../components/common/ButtonCartCount";
import Menu from "../../components/common/Menu";
import { menuItemsData } from "../../Services/data";
import Navbar from "../../components/common/Navbar";
import { useState } from "react";
import { globalCart } from "../../components/Atoms/cartAtom";
import { useRecoilState } from "recoil";

const Home = () => {
  const menuRef = useRef();
 const [items,setItems] =  useState(menuItemsData);
 const [cart,setCart] = useRecoilState(globalCart);



  return (
    <div>
      <Navbar items={items} setItems={setItems} />
      <Menu 
      items={items} 
      setItems={setItems}
       ref={menuRef} 
       cart={cart}
       setCart={setCart}
      />
      <ButtonCartCount />
    </div>
  );
};

export default Home;
