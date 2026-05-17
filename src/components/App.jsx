import { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }

  function handleToggleStock(id) {
    setPlants((prev) =>
      prev.map((plant) =>
        plant.id === id
          ? { ...plant, inStock: !plant.inStock }
          : plant
      )
    );
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <PlantPage
        plants={filteredPlants}
        onAddPlant={handleAddPlant}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onToggleStock={handleToggleStock}
      />
    </div>
  );
}

export default App;