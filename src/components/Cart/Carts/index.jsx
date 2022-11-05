import React from "react";
import { useHistory } from "react-router";
import "./styles.css";

const EmptyCart = () => {
  const history = useHistory();
  return (
    <div className="emptyCart">
      <div className="message"> Opps sorry Please Add Item
      </div>
        <button onClick={() => history.push("/")}>
          <i className="fas fa-long-arrow-alt-right"></i> No Any Items in Cart
          Go to Menu
        </button>
    </div>
  );
};

export default EmptyCart;
