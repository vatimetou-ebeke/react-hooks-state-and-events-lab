import React ,{useState}from "react";
import Item from "./Item";

function ShoppingList({ items }) {
 
  const [items,setItem] = useState()
  function updateItem(value) {
    const selectedCategory = items.filter(item => item.value !== value)
    setItem(selectedCategory)
}
console.log(items);

  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={updateItem}  name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
