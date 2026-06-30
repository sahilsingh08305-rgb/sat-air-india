import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import IndiaMap from "../components/IndiaMap";
import AQIChart from "../components/AQIChart";
import HCHOChart from "../components/HCHOChart";
import StateRanking from "../components/StateRanking";
import LayerControl from "../components/LayerControl";

import {
  fetchAQI,
  fetchHCHO,
  fetchFires,
} from "../services/api";

function Dashboard() {
  const [showAQI, setShowAQI] = useState(true);
  const [showHCHO, setShowHCHO] = useState(true);
  const [showFire, setShowFire] = useState(true);

  const [stats, setStats] = useState({
    averageAQI: 0,
    hchoHotspots: 0,
    fireEvents: 0,
    statesMonitored: 0,
  });

  useEffect(() => {
    async function loadStats() {
      try {
        const aqiData = await fetchAQI();
        const hchoData = await fetchHCHO();
        const fireData = await fetchFires();

        const avgAQI = Math.round(
          aqiData.reduce((sum, item) => sum + item.aqi, 0) /
            aqiData.length
        );

        setStats({
          averageAQI: avgAQI,
          hchoHotspots: hchoData.length,
          fireEvents: fireData.length,
          statesMonitored: aqiData.length,
        });
      } catch (error) {
        console.error("Failed to load dashboard stats:", error);
      }
    }

    loadStats();
  }, []);

  return (
    <div className="min-h-screen bg-[#0B1020] text-white">
      <Navbar />

      {/* Heading */}
      <div className="px-8 py-8">
        <h2 className="text-4xl font-bold">
          Surface AQI & HCHO Monitoring Dashboard
        </h2>

        <p className="text-gray-400 mt-2">
          Satellite-based Air Quality, HCHO Hotspot Detection
          and Biomass Burning Analysis Across India
        </p>
      </div>

      {/* Dynamic Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8">
        <StatCard
          title="Average AQI"
          value={stats.averageAQI}
          color="text-cyan-400"
        />

        <StatCard
          title="HCHO Hotspots"
          value={stats.hchoHotspots}
          color="text-green-400"
        />

        <StatCard
          title="Fire Events"
          value={stats.fireEvents}
          color="text-red-400"
        />

        <StatCard
          title="States Monitored"
          value={stats.statesMonitored}
          color="text-yellow-400"
        />
      </div>

      {/* Map + State Ranking */}
      <div className="px-8 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Map */}
        <div className="lg:col-span-2">
          <div className="relative bg-[#131B2E] rounded-xl h-[550px] overflow-hidden">
            <LayerControl
              showAQI={showAQI}
              setShowAQI={setShowAQI}
              showHCHO={showHCHO}
              setShowHCHO={setShowHCHO}
              showFire={showFire}
              setShowFire={setShowFire}
            />
           <IndiaMap
  showAQI={showAQI}
  showHCHO={showHCHO}
  showFire={showFire}
/>
          </div>

          {/* Legend */}
          <div className="bg-[#131B2E] rounded-xl p-4 flex flex-wrap gap-6 mt-4">
            <span>🟢 Good (0–50)</span>
            <span>🟡 Moderate (51–100)</span>
            <span>🟠 Poor (101–200)</span>
            <span>🔴 Severe (200+)</span>
            <span>🔵 HCHO Hotspot</span>
            <span>🔥 Fire Event</span>
          </div>
        </div>

        {/* Right Panel */}
        <div>
          <StateRanking />
        </div>
      </div>

      {/* Charts */}
      <div className="px-8 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AQIChart />
        <HCHOChart />
      </div>
    </div>
  );
}

export default Dashboard;