import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const center = [56.1629, 10.2039]; // Coordinates for Aarhus, Denmark

function MapComponent() {
  const [mushrooms, setMushrooms] = useState([]);

  useEffect(() => {
    // Fetching data from Firebase Realtime Database
    fetch(
      "https://mushroom-webapp-default-rtdb.europe-west1.firebasedatabase.app/users.json"
    )
      .then((response) => response.json())
      .then((data) => {
        // Transform data into an array suitable for rendering on the map
        const mushroomArray = Object.keys(data).map((key) => ({
          id: key,
          image: data[key].image,
          name: data[key].name,
          coordinates: data[key].coordinates, // Assuming 'coordinates' holds an object with latitude and longitude
        }));
        setMushrooms(mushroomArray); // Set mushrooms data in state
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: "100%", height: "55vh", position: "fixed" }}
    >
      {/* OpenStreetMap Tile Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Loop through the fetched mushroom data and add markers */}
      {mushrooms.map((mushroom) => {
        const icon = new L.Icon({
          iconUrl: mushroom.image,
          iconSize: [40, 40], // Adjust the size of the image
          iconAnchor: [20, 40], // Anchor to bottom-center
        });

        return (
          <Marker key={mushroom.id} position={mushroom.coordinates} icon={icon}>
            <Popup>{mushroom.name}</Popup>{" "}
          </Marker>
        );
      })}
    </MapContainer>
  );
}

export default MapComponent;
