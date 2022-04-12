import React ,{useState}from "react";
import Item from "./Item";

function ShoppingList({ items }) {
 
  const [isCategory,setIsCategory] = useState("All")

  function handelChange(e){
    setIsCategory(e.target.value)

  }

    const categoryItem = items.filter(item => {
      if(isCategory==="All") return  true 
   return item.category === isCategory 


    })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handelChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categoryItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
