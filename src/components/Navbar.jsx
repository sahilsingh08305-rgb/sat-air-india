import { motion } from "framer-motion";

function Navbar() {
  const now = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        sticky top-0 z-50

        bg-black/30
        backdrop-blur-xl

        border-b border-cyan-500/10

        px-8 py-5
      "
    >
      <div className="flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-5">

          <div
            className="
              w-16 h-16
              rounded-3xl

              flex items-center justify-center

              bg-gradient-to-br
              from-cyan-500/20
              to-blue-500/20

              border border-cyan-500/20

              text-3xl
            "
          >
            🛰️
          </div>

          <div>

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
              SAT-AIR INDIA
            </h1>

            <p
              className="
                text-sm
                text-gray-400
                tracking-[3px]
                uppercase
              "
            >
              Bharatiya Antariksh Hackathon 2026
            </p>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Status */}
          <div
            className="
              px-4 py-2

              rounded-2xl

              bg-green-500/10
              border border-green-500/20

              text-green-400
              text-sm
              font-semibold
            "
          >
            ● LIVE
          </div>

          {/* Time */}
          <div className="text-right">

            <p
              className="
                text-xs
                uppercase
                tracking-[3px]
                text-gray-500
              "
            >
              Last Updated
            </p>

            <p className="text-cyan-300 font-semibold mt-1">
              {now} IST
            </p>

          </div>

        </div>

      </div>
    </motion.nav>
  );
}

export default Navbar;