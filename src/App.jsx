import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import DashboardHome from "./pages/DashboardHome";
import AQIMapPage from "./pages/AQIMapPage";
import HCHOPage from "./pages/HCHOPage";
import FirePage from "./pages/FirePage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ReportsPage from "./pages/ReportsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>

          <Route index element={<DashboardHome />} />

          <Route
            path="aqi-map"
            element={<AQIMapPage />}
          />

          <Route
            path="hcho"
            element={<HCHOPage />}
          />

          <Route
            path="fires"
            element={<FirePage />}
          />

          <Route
            path="analytics"
            element={<AnalyticsPage />}
          />

          <Route
            path="reports"
            element={<ReportsPage />}
          />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;