import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

import { fetchAQI } from "../services/api";

function getAQIColor(aqi) {
  if (aqi <= 50) return "green";
  if (aqi <= 100) return "yellow";
  if (aqi <= 200) return "orange";
  if (aqi <= 300) return "red";
  return "purple";
}

function IndiaMap() {
  const [stations, setStations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchAQI();

        const validData = data.filter(
          (item) =>
            Number.isFinite(Number(item.lat)) &&
            Number.isFinite(Number(item.lng))
        );

        setStations(validData);
      } catch (err) {
        console.error("AQI Load Error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center text-cyan-400">
        Loading Map...
      </div>
    );
  }

  return (
    <MapContainer
      center={[22.5937, 78.9629]}
      zoom={5}
      className="h-full w-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stations.map((station, index) => (
        <CircleMarker
          key={index}
          center={[Number(station.lat), Number(station.lng)]}
          radius={5}
          pathOptions={{
            color: getAQIColor(station.aqi),
            fillColor: getAQIColor(station.aqi),
            fillOpacity: 0.8,
          }}
        >
          <Popup>
            <strong>{station.state}</strong>
            <br />
            AQI: {station.aqi}
            <br />
            Category: {station.category}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

export default IndiaMap;