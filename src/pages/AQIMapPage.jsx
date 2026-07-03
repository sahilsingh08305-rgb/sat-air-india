import { motion } from "framer-motion";
import IndiaMapD3 from "../components/IndiaMapD3";

function AQIMapPage() {
  return (
    <div className="space-y-8">

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative
          overflow-hidden

          bg-gradient-to-br
          from-[#0B1328]
          via-[#0F1B33]
          to-[#132446]

          border border-cyan-500/10
          rounded-3xl

          p-8
        "
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative">
          <p className="text-[11px] uppercase tracking-[4px] text-gray-500">
            Satellite Intelligence
          </p>

          <h1 className="text-5xl font-black text-cyan-300 mt-2">
            🗺 AQI Monitoring Map
          </h1>

          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
            Interactive visualization of India's air quality conditions
            using satellite-derived observations and environmental analytics.
          </p>
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
          bg-[#081120]/70
          backdrop-blur-xl

          border border-cyan-500/10
          rounded-3xl

          p-6
        "
      >
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white">
            🇮🇳 National AQI Overview
          </h2>

          <p className="text-gray-400 mt-2">
            Click any state to inspect environmental indicators.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden">
          <IndiaMapD3 />
        </div>
      </motion.div>

    </div>
  );
}

export default AQIMapPage;