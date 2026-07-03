import { motion } from "framer-motion";
import {
  Flame,
  AlertTriangle,
  MapPinned,
} from "lucide-react";

function FirePage() {
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
          from-[#2A0B0B]
          via-[#3A1010]
          to-[#4A1812]

          border border-red-500/10
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

            bg-red-500/10
            blur-3xl
          "
        />

        <div className="relative">

          <p className="text-[11px] uppercase tracking-[4px] text-gray-500">
            NASA FIRMS Intelligence
          </p>

          <h1 className="text-5xl font-black text-red-300 mt-2">
            🔥 Fire Events Monitoring
          </h1>

          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
            Real-time biomass burning and wildfire detection
            across India using satellite observations and
            environmental analytics.
          </p>

        </div>
      </motion.div>

      {/* METRIC CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        <div
          className="
            bg-[#0B1328]/70
            backdrop-blur-xl

            border border-red-500/10
            rounded-3xl

            p-6
          "
        >
          <Flame
            className="text-red-400 mb-4"
            size={32}
          />

          <p className="text-gray-400 text-sm">
            Active Fire Events
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

            border border-orange-500/10
            rounded-3xl

            p-6
          "
        >
          <AlertTriangle
            className="text-orange-400 mb-4"
            size={32}
          />

          <p className="text-gray-400 text-sm">
            High-Risk Regions
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Monitoring active
          </p>
        </div>

        <div
          className="
            bg-[#0B1328]/70
            backdrop-blur-xl

            border border-yellow-500/10
            rounded-3xl

            p-6
          "
        >
          <MapPinned
            className="text-yellow-400 mb-4"
            size={32}
          />

          <p className="text-gray-400 text-sm">
            States Affected
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Nationwide coverage
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

          border border-red-500/10
          rounded-3xl

          p-8

          h-[500px]

          flex flex-col
          items-center
          justify-center
        "
      >
        <Flame
          size={80}
          className="text-red-400 mb-6"
        />

        <h2 className="text-3xl font-bold text-white">
          Fire Detection Layer
        </h2>

        <p className="text-gray-400 mt-4 text-center max-w-2xl">
          Interactive fire-event visualization and biomass
          burning analysis will be connected after backend
          integration. UI structure is finalized for V1.1.
        </p>

      </motion.div>

    </div>
  );
}

export default FirePage;