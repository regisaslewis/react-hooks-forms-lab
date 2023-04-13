import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ onItemFormSubmit, items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchedItems, setSearchedItems] = useState("");
  
 const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
      })
    .filter(item => item.name.includes(searchedItems));

  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event) {
    setSearchedItems(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <ItemForm 
      onItemFormSubmit={onItemFormSubmit}
      />
      <Filter 
      onSearchChange={handleSearchChange} 
      onCategoryChange={handleCategoryChange} 
      search={searchedItems}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
