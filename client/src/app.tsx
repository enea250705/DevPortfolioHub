import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Nav } from "@/components/nav";

const PricingPage = lazy(() => import("@/pages/pricing"));
const HomePage = lazy(() => import("@/pages/home"));

function LoadingFallback() {
  return <div className="p-4">Loading...</div>;
}

function App() {
  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;