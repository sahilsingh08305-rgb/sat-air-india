import { motion } from "framer-motion";

function StatCard({ title, value, icon, color }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.2 }}
      className="
        bg-gradient-to-br
        from-[#10192F]
        to-[#0B1328]

        border border-cyan-900

        rounded-3xl
        p-6

        shadow-xl
      "
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-400 text-sm">
            {title}
          </p>

          <h2
            className={`text-4xl font-bold mt-2 ${color}`}
          >
            {value}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>
    </motion.div>
  );
}

export default StatCard;