import { Routes, Route } from "react-router-dom";
import PricingPage from "@/pages/pricing";

import { Nav } from "@/components/nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </div>
  );
}

export default App;