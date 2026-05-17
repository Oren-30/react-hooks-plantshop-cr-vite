

import { useEffect, useState } from "react";
import Header from "./Header";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  // Store all plants
  const [plants, setPlants] = useState([]);

  // Store search input
  const [search, setSearch] = useState("");

  // Fetch plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Add new plant to state
  function addPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Filter plants by search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <Header />

      <NewPlantForm addPlant={addPlant} />

      <Search
        search={search}
        setSearch={setSearch}
      />

      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;