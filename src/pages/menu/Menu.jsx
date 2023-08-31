import React from "react";
import { burgers } from "./menuConstant";
import Card from "../../components/card/Card";
const Menu = () => {
  // const addToCartHandler = (itemNum) => {};

  return (
    <div className="container menu my-5">
     
      <div className="row">
        {burgers.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default Menu;
