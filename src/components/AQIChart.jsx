import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "Mon", aqi: 120 },
  { day: "Tue", aqi: 135 },
  { day: "Wed", aqi: 110 },
  { day: "Thu", aqi: 160 },
  { day: "Fri", aqi: 145 },
  { day: "Sat", aqi: 180 },
  { day: "Sun", aqi: 150 },
];

function AQIChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{
        boxShadow: "0px 0px 20px rgba(0, 212, 255, 0.25)",
      }}
      className="bg-[#131B2E] rounded-xl p-4 h-[350px]"
    >
      <h2 className="text-xl font-semibold mb-4 text-cyan-400">
        AQI Trend
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#2A3448"
          />

          <XAxis
            dataKey="day"
            stroke="#9CA3AF"
          />

          <YAxis
            stroke="#9CA3AF"
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "#131B2E",
              border: "1px solid #00D4FF",
              borderRadius: "10px",
              color: "#fff",
            }}
          />

          <Area
            type="monotone"
            dataKey="aqi"
            stroke="#00D4FF"
            fill="#00D4FF"
            fillOpacity={0.25}
            strokeWidth={3}
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default AQIChart;