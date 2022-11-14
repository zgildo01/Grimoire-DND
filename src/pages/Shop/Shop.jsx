import { useState } from "react";
import { inventoryData } from "../../data/data";
import InventoryList from "../../components/InventoryList/InventoryList";

const style = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-around'
}

const Shop = () => {
  const [shopInventory, setShopInventory] = useState(inventoryData)
  const [userInventory, setUserInventory] = useState([])

  const handleAddItem = item => {
    setUserInventory([...userInventory, item])
    setShopInventory(shopInventory.filter(el => el.id !== item.id))
  }

  const handleRemoveItem = item => {
    setShopInventory([...shopInventory, item])
    setUserInventory(userInventory.filter(el => el.id !== item.id))
  }

  return (
    <main>
      <h1>Shop</h1>
      <section style={style} >
        <InventoryList 
          title="Shop Inventory" 
          inventory={shopInventory}
          handleAddItem={handleAddItem}
        />
        <InventoryList 
          title="User Inventory" 
          inventory={userInventory}
          handleRemoveItem={handleRemoveItem}
        />
      </section>
    </main>
  );
}

export default Shop;