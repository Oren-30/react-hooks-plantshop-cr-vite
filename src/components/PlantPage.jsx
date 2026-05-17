import { useState } from "react";

function PlantPage({
  plants,
  onAddPlant,
  searchTerm,
  setSearchTerm,
  onToggleStock,
}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newPlant) => onAddPlant(newPlant));

    setFormData({ name: "", image: "", price: "" });
  }

  return (
    <main>
      {/* FORM */}
      <div className="new-plant-form">
        <h2>New Plant</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Plant name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />
          <input
            name="price"
            placeholder="Price"
            type="number"
            value={formData.price}
            onChange={handleChange}
          />

          <button type="submit">Add Plant</button>
        </form>
      </div>

      {/* SEARCH */}
      <div className="searchbar">
        <label htmlFor="search">Search Plants:</label>
        <input
          id="search"
          placeholder="Type a name to search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* LIST */}
      <ul className="cards">
        {plants.map((plant) => (
          <li key={plant.id} data-testid="plant-item">
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>

            <button onClick={() => onToggleStock(plant.id)}>
              {plant.inStock ? "In Stock" : "Out of Stock"}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default PlantPage;