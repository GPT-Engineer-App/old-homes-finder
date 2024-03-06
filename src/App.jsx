import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import RenovationCostsCalculator from "./pages/RenovationCostsCalculator.jsx";
import SolarPanelsCalculator from "./pages/SolarPanelsCalculator.jsx";
import HeatPumpCalculator from "./pages/HeatPumpCalculator.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/renovation-costs" element={<RenovationCostsCalculator />} />
        <Route path="/solar-panels" element={<SolarPanelsCalculator />} />
        <Route path="/heat-pump" element={<HeatPumpCalculator />} />
      </Routes>
    </Router>
  );
}

export default App;
