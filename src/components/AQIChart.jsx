import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { fetchAQI } from "../services/api";

function AQIChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadAQI() {
      try {
        setLoading(true);

        const aqiData = await fetchAQI();

        const chartData = aqiData.map((item) => ({
          state: item.state,
          aqi: item.aqi,
        }));

        setData(chartData);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to load AQI data.");
      } finally {
        setLoading(false);
      }
    }

    loadAQI();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#131B2E] rounded-xl p-4 h-[350px] flex items-center justify-center">
        <span className="text-cyan-400">
          Loading AQI data...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#131B2E] rounded-xl p-4 h-[350px] flex items-center justify-center">
        <span className="text-red-400">
          {error}
        </span>
      </div>
    );
  }

  return (
    <div className="bg-[#131B2E] rounded-xl p-4 h-[350px]">
      <h2 className="text-xl font-semibold mb-4 text-cyan-400">
        AQI Trend by State
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <XAxis dataKey="state" />
          <YAxis />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="aqi"
            stroke="#00D4FF"
            fill="#00D4FF"
            fillOpacity={0.4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AQIChart;