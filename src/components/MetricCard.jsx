import { motion } from "framer-motion";

function MetricCard({
  title,
  value,
  icon,
  color,
  subtitle,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="
        relative
        overflow-hidden

        bg-gradient-to-br
        from-[#0B1328]
        via-[#0F1B33]
        to-[#132446]

        border border-cyan-500/20

        rounded-[28px]
        p-6

        shadow-2xl
        shadow-cyan-500/10

        backdrop-blur-2xl
      "
    >
      {/* Glow Effect */}
      <div
        className="
          absolute
          -top-10
          -right-10
          w-28
          h-28
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* Top Row */}
      <div className="relative flex items-center justify-between mb-5">

        <div
          className={`
            w-16 h-16
            rounded-2xl
            flex items-center justify-center
            text-3xl
            ${color}
          `}
        >
          {icon}
        </div>

        <div
          className="
            px-3 py-1
            rounded-full

            bg-green-500/10
            border border-green-500/20

            text-green-400
            text-xs
            font-semibold
            tracking-wide
          "
        >
          ● LIVE
        </div>

      </div>

      {/* Title */}
      <h3
        className="
          text-gray-400
          text-xs
          uppercase
          tracking-[3px]
        "
      >
        {title}
      </h3>

      {/* Value */}
      <h1
        className="
          text-5xl
          font-black
          text-white
          mt-3
        "
      >
        {value}
      </h1>

      {/* Subtitle */}
      <p
        className="
          text-gray-500
          text-sm
          mt-4
          leading-relaxed
        "
      >
        {subtitle}
      </p>

    </motion.div>
  );
}

export default MetricCard;