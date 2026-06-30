import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { fetchHCHO } from "../services/api";

function HCHOChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadHCHO() {
      try {
        setLoading(true);

        const hchoData = await fetchHCHO();

        const chartData = hchoData.map((item, index) => ({
          city: item.city || `Point ${index + 1}`,
          hcho: item.hcho_value,
        }));

        setData(chartData);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to load HCHO data.");
      } finally {
        setLoading(false);
      }
    }

    loadHCHO();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#131B2E] rounded-xl p-4 h-[350px] flex items-center justify-center">
        <span className="text-green-400">
          Loading HCHO data...
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
      <h2 className="text-xl font-semibold mb-4 text-green-400">
        HCHO Levels Across India
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <XAxis
            dataKey="city"
            hide={data.length > 15}
          />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="hcho"
            stroke="#00FFB3"
            fill="#00FFB3"
            fillOpacity={0.4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default HCHOChart;