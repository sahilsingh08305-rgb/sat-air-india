import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Map,
  FlaskConical,
  Flame,
  BarChart3,
  FileText,
  Satellite,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/" },
  { name: "AQI Map", icon: Map, path: "/aqi-map" },
  { name: "HCHO Hotspots", icon: FlaskConical, path: "/hcho" },
  { name: "Fire Events", icon: Flame, path: "/fires" },
  { name: "Analytics", icon: BarChart3, path: "/analytics" },
  { name: "Reports", icon: FileText, path: "/reports" },
];

function Sidebar() {
  return (
    <aside
      className="
        w-72
        min-h-screen

        bg-black/20
        backdrop-blur-2xl

        border-r border-cyan-500/10

        flex flex-col justify-between

        px-6 py-8
      "
    >
      <div>

        {/* LOGO */}
        <div className="flex items-center gap-4 mb-12">

          <div
            className="
              p-4
              rounded-3xl

              bg-gradient-to-br
              from-cyan-500/20
              to-blue-500/20

              border border-cyan-500/20
            "
          >
            <Satellite
              className="text-cyan-400"
              size={30}
            />
          </div>

          <div>

            <h1
              className="
                text-2xl
                font-black

                bg-gradient-to-r
                from-cyan-300
                to-blue-400

                bg-clip-text
                text-transparent
              "
            >
              SAT-AIR INDIA
            </h1>

            <p
              className="
                text-[11px]
                text-gray-500
                uppercase
                tracking-[2px]
              "
            >
              Environmental Intelligence
            </p>

          </div>

        </div>

        {/* NAVIGATION */}
        <nav className="space-y-3">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
              >
                {({ isActive }) => (
                  <motion.div
                    whileHover={{
                      x: 6,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className={`
                      flex items-center gap-4

                      px-5 py-4

                      rounded-3xl

                      transition-all duration-300

                      ${
                        isActive
                          ? `
                            bg-cyan-500/15
                            text-cyan-300

                            border border-cyan-500/30

                            shadow-lg
                            shadow-cyan-500/10
                          `
                          : `
                            text-gray-400
                            hover:bg-white/5
                            hover:text-white
                          `
                      }
                    `}
                  >
                    <Icon size={20} />

                    <span className="font-medium">
                      {item.name}
                    </span>

                  </motion.div>
                )}
              </NavLink>
            );
          })}

        </nav>

      </div>

      {/* STATUS CARD */}
      <div
        className="
          relative
          overflow-hidden

          bg-gradient-to-br
          from-[#0B1328]
          to-[#132446]

          rounded-3xl

          p-5

          border border-cyan-500/10
        "
      >

        <div
          className="
            absolute
            -top-10
            -right-10

            w-28 h-28

            rounded-full

            bg-cyan-500/10
            blur-3xl
          "
        />

        <div className="relative">

          <div className="flex items-center gap-2 mb-3">

            <span
              className="
                w-3 h-3
                rounded-full

                bg-green-500
                animate-pulse
              "
            />

            <span className="text-green-400 font-semibold">
              System Active
            </span>

          </div>

          <p className="text-sm text-gray-400">
            UI redesign mode enabled.
            Backend integration will be restored
            after final polish.
          </p>

          <div className="mt-4 pt-4 border-t border-white/10">

            <p className="text-xs text-gray-500">
              ISRO Hackathon 2026
            </p>

            <p className="text-cyan-300 text-sm font-semibold mt-1">
              Version 1.1 UI
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;