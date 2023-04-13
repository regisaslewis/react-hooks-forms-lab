import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");
  
  function handleItemSubmit(e) {
    e.preventDefault();
    onItemFormSubmit({
      name: itemName,
      category: itemCategory,
      id: uuid()
    });
  }

  function handleItemNameChange(event) {
    setItemName(event.target.value);
  }
  
  function handleItemCategoryChange(event) {
    setItemCategory(event.target.value);
  }
  
  return (
    <form className="NewItem" onSubmit={handleItemSubmit}>
      <label>
        Name: 
        <input type="text" name="name" value={itemName} onChange={handleItemNameChange} />
      </label>

      <label>
        Category:
        <select name="category" value={itemCategory} onChange={handleItemCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
