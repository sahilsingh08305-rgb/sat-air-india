import { motion } from "framer-motion";

function LayerButton({
  active,
  onClick,
  icon,
  label,
  activeClass,
}) {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-2.5
        rounded-2xl
        flex items-center gap-2

        border
        transition-all duration-300

        ${
          active
            ? `${activeClass} shadow-lg scale-105`
            : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
        }
      `}
    >
      <span className="text-lg">{icon}</span>
      <span className="font-medium tracking-wide">
        {label}
      </span>
    </button>
  );
}

function LayerControl({
  showAQI,
  setShowAQI,
  showHCHO,
  setShowHCHO,
  showFire,
  setShowFire,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="
        flex
        flex-wrap
        items-center
        gap-4

        bg-gradient-to-r
        from-[#0B1328]
        to-[#101B35]

        border border-cyan-500/10

        rounded-3xl
        p-4

        shadow-xl
        shadow-cyan-500/5
      "
    >
      <div className="mr-2">
        <p className="text-[11px] uppercase tracking-[3px] text-gray-500">
          Active Layers
        </p>

        <h3 className="text-cyan-300 font-semibold">
          🛰 Environmental Data
        </h3>
      </div>

      <LayerButton
        active={showAQI}
        onClick={() => setShowAQI(!showAQI)}
        icon="🌫"
        label="AQI"
        activeClass="
          bg-cyan-500/15
          border-cyan-400/40
          text-cyan-300
          shadow-cyan-500/20
        "
      />

      <LayerButton
        active={showHCHO}
        onClick={() => setShowHCHO(!showHCHO)}
        icon="🧪"
        label="HCHO"
        activeClass="
          bg-purple-500/15
          border-purple-400/40
          text-purple-300
          shadow-purple-500/20
        "
      />

      <LayerButton
        active={showFire}
        onClick={() => setShowFire(!showFire)}
        icon="🔥"
        label="Fires"
        activeClass="
          bg-red-500/15
          border-red-400/40
          text-red-300
          shadow-red-500/20
        "
      />
    </motion.div>
  );
}

export default LayerControl;