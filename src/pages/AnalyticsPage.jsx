import { motion } from "framer-motion";
import {
  BarChart3,
  TrendingUp,
  Activity,
  Database,
} from "lucide-react";

function AnalyticsPage() {
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
          from-[#0B1328]
          via-[#10203F]
          to-[#17325A]

          border border-blue-500/10
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

            bg-blue-500/10
            blur-3xl
          "
        />

        <div className="relative">

          <p className="text-[11px] uppercase tracking-[4px] text-gray-500">
            Environmental Intelligence
          </p>

          <h1 className="text-5xl font-black text-blue-300 mt-2">
            📈 Analytics Dashboard
          </h1>

          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
            Advanced analytics and trend monitoring for AQI,
            HCHO emissions, and biomass-burning activities
            across India using satellite-derived datasets.
          </p>

        </div>

      </motion.div>

      {/* METRICS */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-[#081120]/70 backdrop-blur-xl border border-blue-500/10 rounded-3xl p-6">
          <BarChart3
            size={32}
            className="text-blue-400 mb-4"
          />

          <p className="text-gray-400 text-sm">
            Analytics Models
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Awaiting integration
          </p>
        </div>

        <div className="bg-[#081120]/70 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-6">
          <TrendingUp
            size={32}
            className="text-cyan-400 mb-4"
          />

          <p className="text-gray-400 text-sm">
            Trend Indicators
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Live analysis pending
          </p>
        </div>

        <div className="bg-[#081120]/70 backdrop-blur-xl border border-green-500/10 rounded-3xl p-6">
          <Activity
            size={32}
            className="text-green-400 mb-4"
          />

          <p className="text-gray-400 text-sm">
            Active Pipelines
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Backend integration pending
          </p>
        </div>

        <div className="bg-[#081120]/70 backdrop-blur-xl border border-purple-500/10 rounded-3xl p-6">
          <Database
            size={32}
            className="text-purple-400 mb-4"
          />

          <p className="text-gray-400 text-sm">
            Data Sources
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            CPCB • FIRMS • Sentinel-5P
          </p>
        </div>

      </div>

      {/* MAIN ANALYTICS PANEL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
          bg-[#081120]/70
          backdrop-blur-xl

          border border-blue-500/10
          rounded-3xl

          p-8

          h-[550px]

          flex flex-col
          items-center
          justify-center
        "
      >
        <BarChart3
          size={90}
          className="text-blue-400 mb-6"
        />

        <h2 className="text-3xl font-bold text-white">
          Analytics Engine
        </h2>

        <p className="text-gray-400 mt-4 text-center max-w-2xl leading-relaxed">
          Predictive analytics, environmental trend detection,
          seasonal AQI variations, HCHO concentration analysis,
          and biomass-burning insights will appear here after
          backend integration.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-8 w-full max-w-4xl">

          <div className="bg-white/5 rounded-2xl p-5 text-center">
            <h3 className="text-cyan-300 font-semibold">
              AQI Trends
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Historical pollution analysis
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-5 text-center">
            <h3 className="text-purple-300 font-semibold">
              HCHO Insights
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Emission hotspot monitoring
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-5 text-center">
            <h3 className="text-red-300 font-semibold">
              Fire Analytics
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Biomass-burning intelligence
            </p>
          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default AnalyticsPage;