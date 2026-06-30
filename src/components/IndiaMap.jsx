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
  if (aqi <= 300) return "red";
  return "purple";
}

function IndiaMap({
  showAQI = true,
  showHCHO = true,
  showFire = true,
}) {
  const [stations, setStations] = useState([]);
  const [hchoHotspots, setHchoHotspots] = useState([]);
  const [fireEvents, setFireEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [aqiData, hchoData, fireData] =
          await Promise.all([
            fetchAQI(),
            fetchHCHO(),
            fetchFires(),
          ]);

        setStations(
          (aqiData || []).filter(
            (item) =>
              Number.isFinite(Number(item.lat)) &&
              Number.isFinite(Number(item.lng))
          )
        );

        setHchoHotspots(
          (hchoData || [])
            .filter(
              (item) =>
                Number.isFinite(Number(item.lat)) &&
                Number.isFinite(Number(item.lng))
            )
            .slice(0, 50)
        );

        setFireEvents(
          (fireData || [])
            .filter(
              (item) =>
                Number.isFinite(Number(item.lat)) &&
                Number.isFinite(Number(item.lng))
            )
            .slice(0, 100)
        );
      } catch (err) {
        console.error("Map data error:", err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center text-cyan-400">
        Loading satellite data...
      </div>
    );
  }

  return (
    <MapContainer
      center={[22.5937, 78.9629]}
      zoom={5}
      className="h-full w-full"
      scrollWheelZoom
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* AQI Layer */}
      {showAQI &&
        stations.map((station, index) => (
          <CircleMarker
            key={`aqi-${index}`}
            center={[
              Number(station.lat),
              Number(station.lng),
            ]}
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

     {/* HCHO Layer */}
{showHCHO &&
  hchoHotspots
    .filter(
      (spot) =>
        Number.isFinite(Number(spot.lat)) &&
        Number.isFinite(Number(spot.lng))
    )
    .slice(0, 20)
    .map((spot, index) => (
      <CircleMarker
        key={`hcho-${index}`}
        center={[
          Number(spot.lat),
          Number(spot.lng),
        ]}
        radius={8}   // 3 se 8 kar diya
        pathOptions={{
          color: "#00D4FF",
          fillColor: "#00D4FF",
          fillOpacity: 0.9,
          weight: 2,
        }}
      >
        <Popup>
          <strong>🔵 HCHO Hotspot</strong>
          <br />
          HCHO: {spot.hcho_value}
          <br />
          Severity: {spot.severity}
          <br />
          Lat: {spot.lat}
          <br />
          Lng: {spot.lng}
        </Popup>
      </CircleMarker>
    ))}

      {/* Fire Layer */}
      {showFire &&
        fireEvents.map((fire, index) => (
          <CircleMarker
            key={`fire-${index}`}
            center={[
              Number(fire.lat),
              Number(fire.lng),
            ]}
            radius={3}
            pathOptions={{
              color: "#FF3B30",
              fillColor: "#FF3B30",
              fillOpacity: 0.8,
            }}
          >
            <Popup>
              🔥 Fire Detection
              <br />
              Brightness: {fire.brightness}
              <br />
              Confidence: {fire.confidence}%
              <br />
              FRP: {fire.frp}
              <br />
              Satellite: {fire.satellite}
            </Popup>
          </CircleMarker>
        ))}
    </MapContainer>
  );
}

export default IndiaMap;