import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchAQI } from "../services/api";

function StateRanking() {
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadStates() {
      try {
        setLoading(true);

        const data = await fetchAQI();

        const sortedData = [...data].sort(
          (a, b) => b.aqi - a.aqi
        );

        setStates(sortedData);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Failed to load rankings.");
      } finally {
        setLoading(false);
      }
    }

    loadStates();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#131B2E] rounded-xl p-6 h-full flex items-center justify-center">
        <span className="text-cyan-400">
          Loading rankings...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#131B2E] rounded-xl p-6 h-full flex items-center justify-center">
        <span className="text-red-400">
          {error}
        </span>
      </div>
    );
  }

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

            <span>{state.state}</span>
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