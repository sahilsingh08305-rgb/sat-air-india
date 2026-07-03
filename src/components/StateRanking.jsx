import { motion } from "framer-motion";

const states = [
  { state: "Delhi", aqi: 0 },
  { state: "Maharashtra", aqi: 0 },
  { state: "Punjab", aqi: 0 },
  { state: "Uttar Pradesh", aqi: 0 },
  { state: "Haryana", aqi: 0 },
];

function getMedal(index) {
  if (index === 0) return "🥇";
  if (index === 1) return "🥈";
  if (index === 2) return "🥉";
  return `#${index + 1}`;
}

function StateRanking() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="
        relative
        overflow-hidden

        bg-gradient-to-br
        from-[#0B1328]
        via-[#0F1B33]
        to-[#132446]

        border border-red-500/10

        rounded-3xl
        p-6

        shadow-2xl
        shadow-red-500/5
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -top-8
          -right-8
          w-32
          h-32
          rounded-full
          bg-red-500/10
          blur-3xl
        "
      />

      {/* Header */}
      <div className="relative mb-6">
        <p className="text-[11px] uppercase tracking-[4px] text-gray-500">
          Rankings
        </p>

        <h2 className="text-3xl font-bold text-red-300 mt-2">
          🏆 Most Polluted Regions
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          State-wise AQI ranking overview
        </p>
      </div>

      {/* Ranking List */}
      <div className="space-y-3">

        {states.map((state, index) => (
          <motion.div
            key={state.state}
            whileHover={{
              x: 6,
              scale: 1.02,
            }}
            transition={{ duration: 0.2 }}
            className="
              flex
              items-center
              justify-between

              p-4

              rounded-2xl
              bg-white/5

              border border-white/5

              cursor-pointer
            "
          >
            <div className="flex items-center gap-4">

              <span className="text-2xl min-w-[40px]">
                {getMedal(index)}
              </span>

              <div>
                <h3 className="font-semibold text-white">
                  {state.state}
                </h3>

                <p className="text-xs text-gray-500">
                  Monitoring active
                </p>
              </div>

            </div>

            <div className="text-right">

              <p className="text-2xl font-bold text-red-400">
                {state.aqi}
              </p>

              <p className="text-xs text-gray-500">
                AQI
              </p>

            </div>

          </motion.div>
        ))}

      </div>
    </motion.div>
  );
}

export default StateRanking;