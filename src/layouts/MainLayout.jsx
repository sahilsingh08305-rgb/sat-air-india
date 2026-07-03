import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="relative min-h-screen bg-[#050B16] text-white overflow-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* Cyan Glow */}
        <div
          className="
            absolute
            top-20
            left-20
            w-96
            h-96
            rounded-full
            bg-cyan-500/10
            blur-[160px]
          "
        />

        {/* Blue Glow */}
        <div
          className="
            absolute
            bottom-20
            right-20
            w-[500px]
            h-[500px]
            rounded-full
            bg-blue-500/10
            blur-[180px]
          "
        />

        {/* Purple Glow */}
        <div
          className="
            absolute
            top-1/2
            left-1/2
            w-[350px]
            h-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-purple-500/5
            blur-[140px]
          "
        />

        {/* Grid Overlay */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

      </div>

      <div className="flex min-h-screen">

        <Sidebar />

        <div className="flex-1 flex flex-col">

          <TopBar />

          <main
            className="
              p-8
              overflow-y-auto
              flex-1
              relative
            "
          >
            <Outlet />
          </main>

        </div>

      </div>

    </div>
  );
}

export default MainLayout;