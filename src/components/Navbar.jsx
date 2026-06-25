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
      className="bg-[#131B2E] px-8 py-4 shadow-lg border-b border-gray-800"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">
            🛰️ SAT-AIR INDIA
          </h1>

          <p className="text-sm text-gray-400">
            Bharatiya Antariksh Hackathon 2026
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-gray-400">
            Last Updated
          </p>

          <p className="text-cyan-300 font-medium">
            {now} IST
          </p>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;