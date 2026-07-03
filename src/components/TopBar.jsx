import {
  Search,
  Bell,
  CalendarDays,
  Satellite,
} from "lucide-react";
import { motion } from "framer-motion";

function TopBar() {
  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header
      className="
        sticky top-0 z-40

        h-24

        bg-black/20
        backdrop-blur-2xl

        border-b border-cyan-500/10

        px-8
        flex items-center justify-between
      "
    >
      {/* LEFT */}
      <div>
        <p
          className="
            text-[11px]
            uppercase
            tracking-[4px]
            text-cyan-400/80
          "
        >
          Environmental Intelligence Platform
        </p>

        <h1
          className="
            text-3xl
            font-black

            bg-gradient-to-r
            from-cyan-300
            via-blue-400
            to-cyan-500

            bg-clip-text
            text-transparent
          "
        >
          SAT-AIR INDIA Dashboard
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          Real-time AQI, HCHO & Fire Monitoring System
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">

        {/* LIVE STATUS */}
        <div
          className="
            hidden xl:flex
            items-center gap-2

            px-4 py-2

            rounded-2xl

            bg-green-500/10
            border border-green-500/20
          "
        >
          <Satellite size={16} className="text-green-400" />

          <span className="text-green-400 text-sm font-semibold">
            LIVE
          </span>
        </div>

        {/* SEARCH */}
        <div className="relative">

          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search state..."
            className="
              w-64

              bg-[#0B1328]/70
              backdrop-blur-xl

              text-white

              pl-11 pr-4 py-3

              rounded-2xl

              border border-cyan-500/10

              outline-none

              focus:border-cyan-400
              focus:shadow-lg
              focus:shadow-cyan-500/10

              transition-all
            "
          />

        </div>

        {/* DATE */}
        <div
          className="
            hidden lg:flex
            items-center gap-2

            text-gray-300
          "
        >
          <CalendarDays size={18} />

          <span className="text-sm">
            {currentDate}
          </span>

        </div>

        {/* NOTIFICATION */}
        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 5,
          }}
          className="
            bg-[#0B1328]/70
            backdrop-blur-xl

            p-3

            rounded-2xl

            cursor-pointer

            border border-cyan-500/10
          "
        >
          <Bell
            className="text-cyan-400"
            size={20}
          />
        </motion.div>

        {/* USER */}
        <div className="flex items-center gap-3">

          <div
            className="
              w-12 h-12

              rounded-2xl

              bg-gradient-to-r
              from-cyan-500
              to-blue-600

              flex items-center justify-center

              font-bold
              text-white

              shadow-lg
              shadow-cyan-500/20
            "
          >
            S
          </div>

          <div className="hidden xl:block">

            <h3 className="text-white font-semibold">
              Sahil
            </h3>

            <p className="text-xs text-gray-400">
              Frontend • ISRO Hackathon
            </p>

          </div>

        </div>

      </div>
    </header>
  );
}

export default TopBar;