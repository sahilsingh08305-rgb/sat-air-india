function LayerControl({
  showAQI,
  setShowAQI,
  showHCHO,
  setShowHCHO,
  showFire,
  setShowFire,
}) {
  return (
    <div className="absolute top-4 right-4 z-[1000] bg-[#131B2E] p-4 rounded-xl shadow-lg border border-gray-700">
      <h3 className="font-semibold mb-3 text-cyan-400">
        Layers
      </h3>

      <div className="flex flex-col gap-3 text-sm">

        <label className="cursor-pointer flex items-center">
          <input
            type="checkbox"
            checked={showAQI}
            onChange={() => setShowAQI(!showAQI)}
          />
          <span className="ml-2">AQI Layer</span>
        </label>

        <label className="cursor-pointer flex items-center">
          <input
            type="checkbox"
            checked={showHCHO}
            onChange={() => setShowHCHO(!showHCHO)}
          />
          <span className="ml-2">HCHO Layer</span>
        </label>

        <label className="cursor-pointer flex items-center">
          <input
            type="checkbox"
            checked={showFire}
            onChange={() => setShowFire(!showFire)}
          />
          <span className="ml-2">Fire Layer</span>
        </label>

      </div>
    </div>
  );
}

export default LayerControl;