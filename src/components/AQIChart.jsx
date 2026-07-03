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
  { state: "Delhi", aqi: 0 },
  { state: "MH", aqi: 0 },
  { state: "KA", aqi: 0 },
  { state: "TN", aqi: 0 },
  { state: "WB", aqi: 0 },
  { state: "UP", aqi: 0 },
  { state: "RJ", aqi: 0 },
  { state: "PB", aqi: 0 },
];

function AQIChart() {
  return (
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
      {/* Glow */}
      <div
        className="
          absolute
          -top-10
          -right-10
          w-40 h-40
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Header */}
      <div className="relative mb-6">
        <p className="text-[11px] uppercase tracking-[4px] text-gray-500">
          Analytics
        </p>

        <h2 className="text-3xl font-bold text-cyan-300 mt-2">
          🌫 AQI Trend
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          State-wise Air Quality Index overview
        </p>
      </div>

      {/* Chart */}
      <div className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="aqiGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#22D3EE"
                  stopOpacity={0.7}
                />

                <stop
                  offset="95%"
                  stopColor="#22D3EE"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#1F2937"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="state"
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#94A3B8",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              contentStyle={{
                background: "#0B1328",
                border: "1px solid #06B6D4",
                borderRadius: "16px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="aqi"
              stroke="#22D3EE"
              strokeWidth={3}
              fill="url(#aqiGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default AQIChart;