import { motion } from "framer-motion";
import {
  FileText,
  Bell,
  Download,
  ShieldAlert,
} from "lucide-react";

function ReportsPage() {
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
          from-[#10241B]
          via-[#183528]
          to-[#204838]

          border border-green-500/10
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

            bg-green-500/10
            blur-3xl
          "
        />

        <div className="relative">

          <p className="text-[11px] uppercase tracking-[4px] text-gray-500">
            Intelligence & Reporting
          </p>

          <h1 className="text-5xl font-black text-green-300 mt-2">
            📄 Reports & Alerts
          </h1>

          <p className="text-gray-400 mt-4 max-w-3xl leading-relaxed">
            Generate environmental reports, monitor alerts,
            and download satellite-derived insights for AQI,
            HCHO emissions, and fire activities across India.
          </p>

        </div>

      </motion.div>

      {/* METRIC CARDS */}
      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-[#081120]/70 backdrop-blur-xl border border-green-500/10 rounded-3xl p-6">
          <FileText
            size={32}
            className="text-green-400 mb-4"
          />

          <p className="text-gray-400 text-sm">
            Reports Generated
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Awaiting backend
          </p>
        </div>

        <div className="bg-[#081120]/70 backdrop-blur-xl border border-red-500/10 rounded-3xl p-6">
          <Bell
            size={32}
            className="text-red-400 mb-4"
          />

          <p className="text-gray-400 text-sm">
            Active Alerts
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            Real-time monitoring
          </p>
        </div>

        <div className="bg-[#081120]/70 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-6">
          <Download
            size={32}
            className="text-cyan-400 mb-4"
          />

          <p className="text-gray-400 text-sm">
            Data Exports
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            PDF • CSV • GeoJSON
          </p>
        </div>

        <div className="bg-[#081120]/70 backdrop-blur-xl border border-yellow-500/10 rounded-3xl p-6">
          <ShieldAlert
            size={32}
            className="text-yellow-400 mb-4"
          />

          <p className="text-gray-400 text-sm">
            Critical Warnings
          </p>

          <h2 className="text-4xl font-bold text-white mt-2">
            0
          </h2>

          <p className="text-xs text-gray-500 mt-2">
            System operational
          </p>
        </div>

      </div>

      {/* MAIN REPORT CENTER */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="
          bg-[#081120]/70
          backdrop-blur-xl

          border border-green-500/10
          rounded-3xl

          p-8

          h-[550px]

          flex flex-col
          items-center
          justify-center
        "
      >
        <FileText
          size={90}
          className="text-green-400 mb-6"
        />

        <h2 className="text-3xl font-bold text-white">
          Environmental Report Center
        </h2>

        <p className="text-gray-400 mt-4 text-center max-w-2xl leading-relaxed">
          Automated report generation, downloadable datasets,
          early-warning notifications, and environmental
          intelligence summaries will be enabled after
          backend integration.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-8 w-full max-w-4xl">

          <div className="bg-white/5 rounded-2xl p-5 text-center">
            <h3 className="text-green-300 font-semibold">
              Daily Reports
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              National environmental summaries
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-5 text-center">
            <h3 className="text-cyan-300 font-semibold">
              Data Downloads
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              CSV, PDF and GeoJSON exports
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-5 text-center">
            <h3 className="text-red-300 font-semibold">
              Alert System
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Critical AQI and fire notifications
            </p>
          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default ReportsPage;