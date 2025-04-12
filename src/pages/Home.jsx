import { Link } from "react-router-dom";

export const Home = () => (
  <div className="home">
    <div className="background-overlay"></div>
    <div className="content">
      <h2>Welcome to the Financial Time Machine</h2>
      <p>Visualize your financial future with smart predictions and insights.</p>
      <Link to="/investment">Get Started</Link>
    </div>
  </div>
);
