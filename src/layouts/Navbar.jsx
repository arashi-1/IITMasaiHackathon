import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav>
    <h1>
      <span>💸</span>
      Financial Time Machine
    </h1>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  </nav>
);
