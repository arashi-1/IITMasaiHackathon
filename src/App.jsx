import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Navbar } from "./layouts/Navbar";
import InvestmentPage from "./pages/InvestmentPage";
import './index.css';


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/investment" element={<InvestmentPage />} />
        </Routes>
      </div>
    </Router>
  );
}
