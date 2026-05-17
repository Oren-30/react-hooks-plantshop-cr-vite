import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import PlantCard from "./PlantCard";
import PlantPage from "./PlantPage";


function App() {
  // Store all plants fetched from backend
  const [plants, setPlants] = useState([])

  // Store user search input
  const [search, setSearch] = useState("")

  // Fetch plants when component loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((response) => response.json())
      .then((data) => setPlants(data))
  }, [])

  // Add newly created plant to state
  function addPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  )
return (
    <main>
      <h1>Plant Shop</h1>

      <NewPlantForm addPlant={addPlant} />

      <Search
        search={search}
        setSearch={setSearch}
      />

      <PlantList plants={filteredPlants} />
    </main>
  )
}
export default App