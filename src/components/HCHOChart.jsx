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
  { day: "Mon", hcho: 0.8 },
  { day: "Tue", hcho: 1.1 },
  { day: "Wed", hcho: 0.9 },
  { day: "Thu", hcho: 1.4 },
  { day: "Fri", hcho: 1.2 },
  { day: "Sat", hcho: 1.8 },
  { day: "Sun", hcho: 1.3 },
];

function HCHOChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{
        boxShadow: "0px 0px 20px rgba(0, 255, 179, 0.25)",
      }}
      className="bg-[#131B2E] rounded-xl p-4 h-[350px]"
    >
      <h2 className="text-xl font-semibold mb-4 text-green-400">
        HCHO Trend
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
              border: "1px solid #00FFB3",
              borderRadius: "10px",
              color: "#fff",
            }}
          />

          <Area
            type="monotone"
            dataKey="hcho"
            stroke="#00FFB3"
            fill="#00FFB3"
            fillOpacity={0.25}
            strokeWidth={3}
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default HCHOChart;