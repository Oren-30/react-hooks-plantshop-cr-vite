import { useState } from "react";

function NewPlantForm({ onAddPlant }) {
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

    // ✅ THIS IS WHAT YOUR TEST IS LOOKING FOR
    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newPlant) => {
        onAddPlant(newPlant);
      });

    setFormData({
      name: "",
      image: "",
      price: "",
    });
  }

  return (
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
  );
}

export default NewPlantForm;