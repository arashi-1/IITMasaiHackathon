import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", savings: 10000 },
  { month: "Feb", savings: 12000 },
  { month: "Mar", savings: 15000 },
  { month: "Apr", savings: 17000 },
];

export const FinanceChart = () => {
  return (
    <div className="chart-container">
      <h3>Savings Projection</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="savings" stroke="#4F46E5" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
