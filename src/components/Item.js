import React,{useState} from "react";

function Item({ name, category }) {
  const [Iscart, setCart] = useState(false);
  console.log({Iscart, setCart});
   //cart ? "Remove From Cart" : "Add to Cart"
   function handleClick(event) {
    setCart(!Iscart)
  }

  
  return (
    <li className={Iscart ? "in-cart" : " "} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className="add" 
      onClick={handleClick}>{Iscart ? "Add to Cart" : " Remove From Cart"}</button>
    </li>
  );
}

export default Item;
