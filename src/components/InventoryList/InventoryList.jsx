import './InventoryList.css'

const InventoryList = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        {props.inventory.map((item) => (
          <li key={item.id} >
            <p>{item.name}</p>
            <p>Cost: {item.cost}gp</p>

            {props.handleAddItem ? 
              <button onClick={() => props.handleAddItem(item)} >
                Add Item
              </button> 
            : 
              <button onClick={() => props.handleRemoveItem(item)}>
                Remove Item
              </button>
            }

          </li>
        ))}
      </ul>
    </div>
  );
}

export default InventoryList;