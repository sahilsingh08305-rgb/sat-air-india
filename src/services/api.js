const BASE_URL = "https://sat-air-india-1.onrender.com";
export async function fetchAQI() {
  const res = await fetch(`${BASE_URL}/api/aqi`);
  return res.json();
}

export async function fetchHCHO() {
  const res = await fetch(`${BASE_URL}/api/hcho`);
  return res.json();
}

export async function fetchFires() {
  const res = await fetch(`${BASE_URL}/api/fires`);
  return res.json();
}