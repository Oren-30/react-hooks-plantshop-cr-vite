// src/components/NewPlantForm.jsx

import { useState } from "react";

function NewPlantForm({ addPlant }) {
  // Controlled form state
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  // Update form state
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Submit form
  function handleSubmit(e) {
    e.preventDefault();

    const newPlant = {
      ...formData,
      price: Number(formData.price),
      inStock: true
    };

    // Send POST request
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
      .then((response) => response.json())
      .then((data) => addPlant(data));

    // Clear form inputs
    setFormData({
      name: "",
      image: "",
      price: ""
    });
  }

  return (
    <form
      className="new-plant-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Plant name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      <button type="submit">
        Add Plant
      </button>
    </form>
  );
}

export default NewPlantForm;