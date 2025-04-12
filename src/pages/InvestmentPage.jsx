import { useState } from "react";

// Function to calculate estimated returns for SIP
const calculateSIPReturns = (sipAmount, returnRate, timePeriod) => {
  return sipAmount * Math.pow(1 + returnRate / 100, timePeriod);
};

const InvestmentPage = () => {
  // State to manage SIP inputs
  const [sipAmount, setSipAmount] = useState(13100);
  const [returnRate, setReturnRate] = useState(6);
  const [timePeriod, setTimePeriod] = useState(7);

  // Calculate SIP returns
  const estimatedReturns = calculateSIPReturns(sipAmount, returnRate, timePeriod);

  return (
    <div className="investment-page">
      <h2 className="page-title">Investment Options</h2>

      <div className="investment-options">
        {/* SIP Section */}
        <div className="investment-option">
          <h3 className="option-title">SIP (Systematic Investment Plan)</h3>
          <p className="option-description">
            SIP allows you to invest a fixed amount regularly in mutual funds, enabling long-term wealth creation.
          </p>
          <div className="slider-container">
            <label>Monthly Investment: ₹{sipAmount}</label>
            <input
              type="range"
              min="10000"
              max="50000"
              value={sipAmount}
              onChange={(e) => setSipAmount(+e.target.value)}
            />
          </div>

          <label>Expected Return Rate (p.a): {returnRate}%</label>
          <input
            type="range"
            min="1"
            max="15"
            value={returnRate}
            onChange={(e) => setReturnRate(+e.target.value)}
          />

          <label>Time Period: {timePeriod} years</label>
          <input
            type="range"
            min="1"
            max="30"
            value={timePeriod}
            onChange={(e) => setTimePeriod(+e.target.value)}
          />

          <div className="circular-progress">
            <h4>Invested Amount vs Estimated Returns</h4>
            <div className="circle-chart">
              <svg viewBox="0 0 36 36" className="circular-chart" style={{ transform: 'rotate(-90deg)' }}>
                <path
                  className="circle-path invested"
                  strokeDasharray={`${(sipAmount / 50000) * 100}, 100`}
                  d="M18 2.0845a15.915 15.915 0 1 1 0 31.83 15.915 15.915 0 1 1 0-31.83"
                />
                <path
                  className="circle-path returns"
                  strokeDasharray={`${(estimatedReturns / 100000) * 100}, 100`}
                  d="M18 2.0845a15.915 15.915 0 1 1 0 31.83 15.915 15.915 0 1 1 0-31.83"
                />
              </svg>
            </div>
            <div className="returns-info">
              <div className="invested-amount">
                <span>Invested Amount</span>
                <span>₹{sipAmount}</span>
              </div>
              <div className="estimated-returns">
                <span>Estimated Returns</span>
                <span>₹{estimatedReturns.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* FD Section */}
        <div className="investment-option">
          <h3 className="option-title">FD (Fixed Deposit)</h3>
          <p className="option-description">
            Fixed deposits are safe, low-risk investments with guaranteed returns. Ideal for conservative investors.
          </p>
          <div className="fd-info">
            <p><strong>Interest Rate:</strong> 5% p.a (example rate)</p>
            <p><strong>Tenure:</strong> 1-10 years</p>
          </div>
        </div>

        {/* RD Section */}
        <div className="investment-option">
          <h3 className="option-title">RD (Recurring Deposit)</h3>
          <p className="option-description">
            RD is a type of term deposit where you can invest a fixed amount monthly for a predefined tenure, with fixed returns.
          </p>
          <div className="rd-info">
            <p><strong>Interest Rate:</strong> 5.5% p.a (example rate)</p>
            <p><strong>Tenure:</strong> 6 months to 10 years</p>
          </div>
        </div>

        {/* Finance Saving Section */}
        <div className="investment-option">
          <h3 className="option-title">Finance Saving</h3>
          <p className="option-description">
            A high-interest savings account that offers better returns compared to a standard savings account.
          </p>
          <div className="savings-info">
            <p><strong>Interest Rate:</strong> 4% p.a (example rate)</p>
            <p><strong>Liquidity:</strong> High</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPage;
