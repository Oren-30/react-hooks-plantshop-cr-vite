function PlantCard({ plant, onToggleSoldOut }) {
  return (
    <li data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h3>{plant.name}</h3>

      <p>${plant.price}</p>

      <button onClick={() => onToggleSoldOut(plant.id)}>
        {plant.isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;