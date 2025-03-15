import { Routes, Route } from "react-router-dom";
import PricingPage from "@/pages/pricing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </div>
  );
}

export default App;