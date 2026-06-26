import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import {
  fetchAQI,
  fetchHCHO,
  fetchFires,
} from "../services/api";

function getAQIColor(aqi) {
  if (aqi <= 50) return "green";
  if (aqi <= 100) return "yellow";
  if (aqi <= 200) return "orange";
  return "red";
}

function IndiaMap({
  showAQI,
  showHCHO,
  showFire,
}) {
  const [stations, setStations] = useState([]);
  const [hchoHotspots, setHchoHotspots] = useState([]);
  const [fireEvents, setFireEvents] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);

        const aqiData = await fetchAQI();
        const hchoData = await fetchHCHO();
        const fireData = await fetchFires();

        setStations(aqiData);
        setHchoHotspots(hchoData);
        setFireEvents(fireData);

        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to load satellite data.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center text-cyan-400 text-xl">
        Loading satellite data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center text-red-400 text-xl">
        {error}
      </div>
    );
  }

  return (
    <MapContainer
      center={[22.5937, 78.9629]}
      zoom={5}
      scrollWheelZoom={true}
      className="h-full w-full rounded-xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* AQI Stations */}
      {showAQI &&
        stations.map((station, index) => (
          <CircleMarker
            key={index}
            center={[station.lat, station.lng]}
            radius={5}
            pathOptions={{
              color: getAQIColor(station.aqi),
              fillColor: getAQIColor(station.aqi),
              fillOpacity: 0.8,
            }}
          >
            <Popup>
              <strong>{station.city}</strong>
              <br />
              AQI: {station.aqi}
              <br />
              Category: {station.category}
            </Popup>
          </CircleMarker>
        ))}

      {/* HCHO Hotspots */}
      {showHCHO &&
        hchoHotspots.map((spot, index) => (
          <CircleMarker
            key={`hcho-${index}`}
            center={[spot.lat, spot.lng]}
            radius={3}
            pathOptions={{
              color: "#00D4FF",
              fillColor: "#00D4FF",
              fillOpacity: 0.7,
            }}
          >
            <Popup>
              🔵 HCHO Hotspot
              <br />
              {spot.city}
              <br />
              HCHO: {spot.hcho_value}
              <br />
              Severity: {spot.severity}
            </Popup>
          </CircleMarker>
        ))}

      {/* Fire Events */}
      {showFire &&
        fireEvents.map((fire, index) => (
          <CircleMarker
            key={`fire-${index}`}
            center={[fire.lat, fire.lng]}
            radius={4}
            pathOptions={{
              color: "#FF3B30",
              fillColor: "#FF3B30",
              fillOpacity: 0.8,
            }}
          >
            <Popup>
              🔥 Fire Event
              <br />
              {fire.name}
              <br />
              Intensity: {fire.intensity}
            </Popup>
          </CircleMarker>
        ))}
    </MapContainer>
  );
}

export default IndiaMap;