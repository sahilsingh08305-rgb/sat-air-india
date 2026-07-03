import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import indiaData from "../maps/india.json";

function IndiaMapD3() {
  const svgRef = useRef();
  const zoomRef = useRef();

  const [selectedState, setSelectedState] = useState({
    name: "India",
    aqi: 0,
    hcho: 0,
    fires: 0,
  });

  useEffect(() => {
    const width = 1200;
    const height = 800;

    const svg = d3.select(svgRef.current);

    svg.selectAll("*").remove();

    svg.attr("viewBox", `0 0 ${width} ${height}`);

    const g = svg.append("g");

    const projection = d3
      .geoMercator()
      .fitExtent(
        [
          [140, 80],
          [width - 140, height - 80],
        ],
        indiaData
      );

    const path = d3.geoPath().projection(projection);

    const zoom = d3
      .zoom()
      .scaleExtent([0.8, 8])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    zoomRef.current = zoom;

    svg.call(zoom);

    svg.call(
      zoom.transform,
      d3.zoomIdentity.scale(0.9)
    );

    g.selectAll("path")
      .data(indiaData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#101A32")
      .attr("stroke", "#00D8FF")
      .attr("stroke-width", 1.1)
      .style(
        "filter",
        "drop-shadow(0 0 4px rgba(0,216,255,0.65))"
      )
      .style("cursor", "pointer")

      .on("mouseover", function (_, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("fill", "#1A2945")
          .attr("stroke-width", 2)
          .style(
            "filter",
            "drop-shadow(0 0 6px rgba(0,216,255,0.75))"
          );

        d3.select("#state-tooltip")
          .style("opacity", 1)
          .html(d.properties.name);
      })

      .on("mousemove", (event) => {
        d3.select("#state-tooltip")
          .style("left", `${event.pageX + 15}px`)
          .style("top", `${event.pageY - 20}px`);
      })

      .on("mouseout", function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr("fill", "#101A32")
          .attr("stroke-width", 1.1)
          .style(
            "filter",
            "drop-shadow(0 0 4px rgba(0,216,255,0.65))"
          );

        d3.select("#state-tooltip")
          .style("opacity", 0);
      })

      .on("click", (_, d) => {
        setSelectedState({
          name: d.properties.name,
          aqi: 0,
          hcho: 0,
          fires: 0,
        });
      });
  }, []);

  const zoomIn = () => {
    d3.select(svgRef.current)
      .transition()
      .call(zoomRef.current.scaleBy, 1.3);
  };

  const zoomOut = () => {
    d3.select(svgRef.current)
      .transition()
      .call(zoomRef.current.scaleBy, 0.8);
  };

  const resetZoom = () => {
    d3.select(svgRef.current)
      .transition()
      .duration(500)
      .call(
        zoomRef.current.transform,
        d3.zoomIdentity.scale(0.9)
      );
  };

 return (
  <>
    <div
      id="state-tooltip"
      className="
        fixed z-[9999]
        px-3 py-2
        rounded-xl
        bg-black/90
        text-cyan-300
        text-sm
        pointer-events-none
        opacity-0
        transition-opacity
      "
    />

    <div className="relative h-full">

      {/* MAP */}
      <div
        className="
          relative
          h-[800px]

          bg-gradient-to-br
          from-[#07111F]
          via-[#0B1730]
          to-[#112244]

          rounded-3xl
          overflow-hidden

          border border-cyan-900
        "
      >

        {/* ZOOM CONTROLS */}
        <div className="absolute top-6 left-6 z-50 flex flex-col gap-2">

          <button
            onClick={zoomIn}
            className="
              w-12 h-12
              rounded-2xl
              bg-[#131B2E]/90
              border border-cyan-500
              hover:bg-cyan-500
              hover:text-black
              transition
              text-2xl
            "
          >
            +
          </button>

          <button
            onClick={zoomOut}
            className="
              w-12 h-12
              rounded-2xl
              bg-[#131B2E]/90
              border border-cyan-500
              hover:bg-cyan-500
              hover:text-black
              transition
              text-2xl
            "
          >
            −
          </button>

          <button
            onClick={resetZoom}
            className="
              w-12 h-12
              rounded-2xl
              bg-[#131B2E]/90
              border border-cyan-500
              hover:bg-cyan-500
              hover:text-black
              transition
              text-lg
            "
          >
            ⌂
          </button>

        </div>

        <svg
          ref={svgRef}
          className="w-full h-[800px]"
        />

        {/* FLOATING STATE PANEL */}
        <div
          className="
            absolute
            top-6
            right-6
            z-40

            w-[220px]
            max-h-[520px]

            bg-black/35
            backdrop-blur-xl

            border border-cyan-500/30
            rounded-3xl

            p-4

            overflow-y-auto
          "
        >
          <p className="text-gray-400 text-[10px] uppercase tracking-[3px] mb-2">
            State Information
          </p>

          <h2
            className="
              text-xl
              font-bold
              text-cyan-300
              mb-4
              leading-tight
              break-words
            "
            style={{
              overflowWrap: "anywhere",
            }}
          >
            {selectedState.name}
          </h2>

          <div className="space-y-3">

            <div className="bg-white/5 rounded-2xl p-3">
              <p className="text-xs text-gray-400">
                🌫 AQI
              </p>

              <h3 className="text-2xl font-bold text-green-400">
                {selectedState.aqi}
              </h3>

              <p className="text-[10px] text-gray-500 mt-1">
                No data
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-3">
              <p className="text-xs text-gray-400">
                🧪 HCHO
              </p>

              <h3 className="text-2xl font-bold text-blue-400">
                {selectedState.hcho}
              </h3>

              <p className="text-[10px] text-gray-500 mt-1">
                No data
              </p>
            </div>

            <div className="bg-white/5 rounded-2xl p-3">
              <p className="text-xs text-gray-400">
                🔥 Fires
              </p>

              <h3 className="text-2xl font-bold text-red-400">
                {selectedState.fires}
              </h3>

              <p className="text-[10px] text-gray-500 mt-1">
                No data
              </p>
            </div>

          </div>

          <p className="text-[11px] text-gray-500 mt-4 leading-relaxed">
            Click any state to view details.
          </p>

        </div>

      </div>

    </div>
  </>
);
}

export default IndiaMapD3;