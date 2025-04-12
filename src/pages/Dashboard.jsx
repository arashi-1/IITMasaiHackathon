import { WhatIfScenario } from "../components/WhatIfScenario";
import { FinanceChart } from "../components/FinanceChart";

export const Dashboard = () => (
  <div className="dashboard">
    <h2>Your Financial Dashboard</h2>
    <WhatIfScenario />
    <FinanceChart />
  </div>
);
