import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

const stations = [
  { city: "Delhi", lat: 28.6139, lng: 77.2090, aqi: 245 },
  { city: "Mumbai", lat: 19.0760, lng: 72.8777, aqi: 95 },
  { city: "Bengaluru", lat: 12.9716, lng: 77.5946, aqi: 65 },
  { city: "Chennai", lat: 13.0827, lng: 80.2707, aqi: 120 },
  { city: "Kolkata", lat: 22.5726, lng: 88.3639, aqi: 180 },
];

const hchoHotspots = [
  { name: "Delhi NCR", lat: 28.7, lng: 77.1 },
  { name: "Punjab", lat: 31.1, lng: 75.3 },
  { name: "Haryana", lat: 29.0, lng: 76.0 },
  { name: "Mumbai Region", lat: 19.2, lng: 72.9 },
];

const fireEvents = [
  { name: "Punjab Fire", lat: 30.9, lng: 75.8 },
  { name: "Haryana Fire", lat: 29.5, lng: 76.2 },
  { name: "Assam Fire", lat: 26.2, lng: 91.7 },
  { name: "Madhya Pradesh Fire", lat: 23.5, lng: 78.5 },
];

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
              {spot.name}
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
            </Popup>
          </CircleMarker>
        ))}
    </MapContainer>
  );
}

export default IndiaMap;