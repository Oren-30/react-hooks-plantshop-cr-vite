import { useState } from "react"

function PlantCard({ plant }) {
  // Local stock state (not persisted)
  const [inStock, setInStock] = useState(plant.inStock)

  // Toggle plant stock status
  function handleToggleStock() {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img
        src={plant.image}
        alt={plant.name}
      />

      <h4>{plant.name}</h4>

      <p>Price: ${plant.price}</p>
       <button onClick={handleToggleStock}>
        {inStock ? "In Stock" : "Sold Out"}
      </button>
    </li>
  )
}

export default PlantCard