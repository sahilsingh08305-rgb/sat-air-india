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
  if (aqi <= 50) return "#22c55e";      // Green
  if (aqi <= 100) return "#eab308";     // Yellow
  if (aqi <= 200) return "#f97316";     // Orange
  return "#ef4444";                     // Red
}

const indiaBounds = [
  [6.5, 68.0],   // South-West India
  [37.5, 97.5],  // North-East India
];

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
        setError("Failed to load environmental data.");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center text-cyan-400 text-lg">
        Loading satellite data...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-full flex items-center justify-center text-red-400 text-lg">
        {error}
      </div>
    );
  }

  return (
    <MapContainer
      center={[22.5937, 78.9629]}
      zoom={5}
      
     
      scrollWheelZoom={true}
      className="h-full w-full rounded-2xl"
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* AQI Layer */}
      {showAQI &&
        stations
          .filter(
            (station) =>
              Number.isFinite(Number(station.lat)) &&
              Number.isFinite(Number(station.lng))
          )
          .map((station, index) => (
            <CircleMarker
              key={`aqi-${index}`}
              center={[
                Number(station.lat),
                Number(station.lng),
              ]}
              radius={6}
              pathOptions={{
                color: getAQIColor(station.aqi),
                fillColor: getAQIColor(station.aqi),
                fillOpacity: 0.85,
                weight: 2,
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

      {/* HCHO Layer */}
      {showHCHO &&
        hchoHotspots
          .filter(
            (spot) =>
              Number.isFinite(Number(spot.lat)) &&
              Number.isFinite(Number(spot.lng))
          )
          .map((spot, index) => (
            <CircleMarker
              key={`hcho-${index}`}
              center={[
                Number(spot.lat),
                Number(spot.lng),
              ]}
              radius={7}
              pathOptions={{
                color: "#a855f7",
                fillColor: "#a855f7",
                fillOpacity: 0.8,
                weight: 2,
              }}
            >
              <Popup>
                <strong>🧪 HCHO Hotspot</strong>
                <br />
                HCHO: {Number(spot.hcho_value).toFixed(2)}
                <br />
                Severity: {spot.severity}
              </Popup>
            </CircleMarker>
          ))}

      {/* Fire Layer */}
      {showFire &&
        fireEvents
          .filter(
            (fire) =>
              Number.isFinite(Number(fire.lat)) &&
              Number.isFinite(Number(fire.lng))
          )
          .map((fire, index) => (
            <CircleMarker
              key={`fire-${index}`}
              center={[
                Number(fire.lat),
                Number(fire.lng),
              ]}
              radius={5}
              pathOptions={{
                color: "#ef4444",
                fillColor: "#ef4444",
                fillOpacity: 0.9,
                weight: 2,
              }}
            >
              <Popup>
                <strong>🔥 Fire Event</strong>
                <br />
                Brightness: {fire.brightness}
                <br />
                Confidence: {fire.confidence}%
                <br />
                Satellite: {fire.satellite}
              </Popup>
            </CircleMarker>
          ))}
    </MapContainer>
  );
}

export default IndiaMap;