import { motion } from "framer-motion";
import { FlaskConical, Activity, AlertTriangle } from "lucide-react";

function HCHOPage() {
  return (
    <div className="space-y-8">

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          relative
          overflow-hidden

          bg-gradient-to-br
          from-[#140B28]
          via-[#1B1036]
          to-[#2B1C4A]

          border border-purple-500/10
          rounded-3xl

          p-8
        "
      >
        <div
          className="
            absolute
            -top-10
            -right-10

            w-48 h-48

            rounded-full

            bg-purple-500/10
            blur-3xl
          "
        />

        <div className="relative">

          <p className="text-[11px] uppercase tracking-[4px] text-gray-500">
            Sentinel-5P Monitoring
          </p>

          <h1 className="text-5xl font-black text-purple-300 mt-2">
            🧪 HCHO Hotspots
          </h1>

          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
            Formaldehyde concentration analysis across India using
            Sentinel-5P satellite observations for industrial,
            biomass-burning and urban emission assessment.
          </p>

        </div>

      </motion.div>

      {/* METRICS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div
          className="
            bg-[#0B1328]/70
            backdrop-blur-xl

            border border-purple-500/10
            rounded-3xl

            p-6
          "
        >
          <Activity
            className="text-purple-400 mb-4"
            size={32}
          />

          <p className="text-gray-400 text-sm">
            Active Hotspots
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Backend integration pending
          </p>
        </div>

        <div
          className="
            bg-[#0B1328]/70
            backdrop-blur-xl

            border border-purple-500/10
            rounded-3xl

            p-6
          "
        >
          <FlaskConical
            className="text-cyan-400 mb-4"
            size={32}
          />

          <p className="text-gray-400 text-sm">
            Average HCHO Level
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            mol/m²
          </p>
        </div>

        <div
          className="
            bg-[#0B1328]/70
            backdrop-blur-xl

            border border-purple-500/10
            rounded-3xl

            p-6
          "
        >
          <AlertTriangle
            className="text-yellow-400 mb-4"
            size={32}
          />

          <p className="text-gray-400 text-sm">
            High-Risk Zones
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Monitoring active
          </p>
        </div>

      </div>

      {/* MAIN PANEL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
          bg-[#081120]/70
          backdrop-blur-xl

          border border-purple-500/10
          rounded-3xl

          p-8

          h-[500px]

          flex flex-col
          items-center
          justify-center
        "
      >
        <FlaskConical
          size={80}
          className="text-purple-400 mb-6"
        />

        <h2 className="text-3xl font-bold text-white">
          HCHO Visualization Layer
        </h2>

        <p className="text-gray-400 mt-4 text-center max-w-2xl">
          Interactive hotspot visualization will be connected
          after backend integration. The page structure and
          design are now finalized for V1.1.
        </p>

      </motion.div>

    </div>
  );
}

export default HCHOPage;