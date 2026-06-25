import { motion } from "framer-motion";

function StatCard({ title, value, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 0px 20px rgba(0, 212, 255, 0.25)",
      }}
      transition={{ duration: 0.4 }}
      className="bg-[#131B2E] rounded-xl p-6 cursor-pointer"
    >
      <h3 className="text-gray-400">{title}</h3>

      <p className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </p>
    </motion.div>
  );
}

export default StatCard;