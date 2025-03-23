import { Routes, Route, Navigate } from "react-router-dom";
import PricingPage from "@/pages/pricing";

import { Nav } from "@/components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/sq/*" element={<Navigate to="/" />} /> {/* Added root redirect */}
      </Routes>
    </div>
  );
}

export default App;