import { motion } from "framer-motion";

const states = [
  { name: "Delhi", aqi: 245 },
  { name: "Haryana", aqi: 210 },
  { name: "Punjab", aqi: 190 },
  { name: "Uttar Pradesh", aqi: 175 },
  { name: "Rajasthan", aqi: 160 },
];

function StateRanking() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#131B2E] rounded-xl p-6 h-full"
    >
      <h2 className="text-xl font-semibold text-red-400 mb-5">
        Top Polluted States
      </h2>

      {states.map((state, index) => (
        <motion.div
          key={index}
          whileHover={{
            x: 5,
            backgroundColor: "rgba(255,255,255,0.05)",
          }}
          transition={{ duration: 0.2 }}
          className="flex justify-between items-center py-3 px-3 border-b border-gray-700 rounded-lg cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <span className="text-gray-400 font-semibold">
              #{index + 1}
            </span>

            <span>{state.name}</span>
          </div>

          <span className="font-bold text-red-400">
            {state.aqi}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default StateRanking;