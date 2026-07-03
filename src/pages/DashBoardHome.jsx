import IndiaMapD3 from "../components/IndiaMapD3";
import { useState, useEffect } from "react";

import MetricCard from "../components/MetricCard";
import IndiaMap from "../components/IndiaMap";
import AQIChart from "../components/AQIChart";
import StateRanking from "../components/StateRanking";
import LayerControl from "../components/LayerControl";

import {
  fetchAQI,
  fetchHCHO,
  fetchFires,
} from "../services/api";

function DashboardHome() {
  const [showAQI, setShowAQI] = useState(true);
  const [showHCHO, setShowHCHO] = useState(true);
  const [showFire, setShowFire] = useState(true);

  const [stats, setStats] = useState({
    averageAQI: 0,
    hchoHotspots: 0,
    fireEvents: 0,
    statesMonitored: 0,
  });

 /* useEffect(() => {
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
      } catch (err) {
        console.error(err);
      }
    }

    loadStats();
  }, []);*/

  return (
    <div className="space-y-8">

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <MetricCard
          title="Average AQI"
          value={stats.averageAQI}
          icon="🌫️"
          color="bg-cyan-500/10"
          subtitle="National average today"
        />

        <MetricCard
          title="HCHO Hotspots"
          value={stats.hchoHotspots}
          icon="🧪"
          color="bg-purple-500/10"
          subtitle="Sentinel-5P detections"
        />

        <MetricCard
          title="Fire Events"
          value={stats.fireEvents}
          icon="🔥"
          color="bg-red-500/10"
          subtitle="NASA FIRMS active fires"
        />

        <MetricCard
          title="States Monitored"
          value={stats.statesMonitored}
          icon="🗺️"
          color="bg-green-500/10"
          subtitle="Real-time coverage"
        />

      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Left Section */}
        <div className="xl:col-span-2 space-y-6">

          {/* Map Card */}
          <div className="bg-[#0D1726] rounded-3xl p-6 border border-cyan-500/10">

            <div className="mb-5">
              <h2 className="text-2xl font-bold text-white">
                🛰 India Environmental Map
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                Real-time AQI, HCHO and Fire Intelligence Layers
              </p>
            </div>

            {/* Layer Controls */}
            <div className="mb-5">
              <LayerControl
                showAQI={showAQI}
                setShowAQI={setShowAQI}
                showHCHO={showHCHO}
                setShowHCHO={setShowHCHO}
                showFire={showFire}
                setShowFire={setShowFire}
              />
            </div>

            {/* Map */}
            <div className="h-[550px] rounded-2xl overflow-hidden border border-cyan-500/10">
              <IndiaMapD3
                showAQI={showAQI}
                showHCHO={showHCHO}
                showFire={showFire}
              />
            </div>

          </div>

          {/* AQI Chart */}
          <AQIChart />

        </div>

        {/* Right Section */}
        <div className="space-y-6">

          <StateRanking />

          {/* AQI Legend */}
         {/* AQI LEGEND */}
<div
  className="
    relative
    overflow-hidden

    bg-gradient-to-br
    from-[#0B1328]
    via-[#0F1B33]
    to-[#132446]

    border border-cyan-500/10

    rounded-3xl
    p-6

    shadow-2xl
    shadow-cyan-500/5
  "
>

  {/* Background Glow */}
  <div
    className="
      absolute
      -top-10
      -right-10
      w-36 h-36
      rounded-full
      bg-cyan-500/10
      blur-3xl
    "
  />

  <div className="relative">

    <p className="text-[11px] uppercase tracking-[4px] text-gray-500">
      Environmental Scale
    </p>

    <h3 className="text-3xl font-bold text-cyan-300 mt-2 mb-6">
      🌍 AQI Categories
    </h3>

    <div className="space-y-4">

      {[
        ["Good", "0–50", "bg-green-500"],
        ["Moderate", "51–100", "bg-yellow-400"],
        ["Poor", "101–200", "bg-orange-500"],
        ["Severe", "200+", "bg-red-500"],
      ].map(([label, range, color]) => (
        <div
          key={label}
          className="
            flex
            items-center
            justify-between

            p-3

            rounded-2xl
            bg-white/5
          "
        >
          <div className="flex items-center gap-3">

            <div
              className={`w-4 h-4 rounded-full ${color}`}
            />

            <span className="font-medium text-white">
              {label}
            </span>

          </div>

          <span className="text-gray-400 text-sm">
            {range}
          </span>

        </div>
      ))}

    </div>

    <hr className="border-gray-700 my-6" />

    <div className="space-y-3">

      <div
        className="
          flex items-center gap-3
          p-3 rounded-2xl bg-white/5
        "
      >
        <span className="text-2xl">🧪</span>

        <div>
          <p className="text-white font-medium">
            HCHO Hotspots
          </p>

          <p className="text-xs text-gray-500">
            Sentinel-5P monitoring
          </p>
        </div>

      </div>

      <div
        className="
          flex items-center gap-3
          p-3 rounded-2xl bg-white/5
        "
      >
        <span className="text-2xl">🔥</span>

        <div>
          <p className="text-white font-medium">
            Active Fire Events
          </p>

          <p className="text-xs text-gray-500">
            NASA FIRMS detections
          </p>
        </div>

      </div>

    </div>

  </div>

</div>

        </div>

      </div>

    </div>
  );
}

export default DashboardHome;