import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext, AppContextType } from '../App';
import '../styles/Onboarding.css';

function OnboardingPage() {
  const navigate = useNavigate();
  const context = useContext(AppContext) as AppContextType;
  const user = context.user;

  const handleContinue = () => {
    navigate('/wallets');
  };

  return (
    <div className="onboarding-container">
      <div className="onboarding-content">
        <div className="onboarding-header">
          <h1>Welcome, {user?.name}!</h1>
          <p>Let's set up your unified portfolio</p>
        </div>

        <div className="onboarding-steps">
          <div className="step">
            <div className="step-icon">1</div>
            <h3>Select Your Wallets</h3>
            <p>Choose from Coinbase, MetaMask, Robinhood, Charles Schwab, and more</p>
          </div>

          <div className="step">
            <div className="step-icon">2</div>
            <h3>Connect Accounts</h3>
            <p>Securely link your wallet APIs using TurboTax-style authentication</p>
          </div>

          <div className="step">
            <div className="step-icon">3</div>
            <h3>View Your Dashboard</h3>
            <p>Get real-time compliance reports and track all your holdings in USD</p>
          </div>
        </div>

        <div className="onboarding-features">
          <h2>Why Altrion?</h2>
          <ul>
            <li>Unified dashboard for crypto, banking, and equity holdings</li>
            <li>Real-time compliance reports for tax and loan eligibility</li>
            <li>Secure account syncing with industry-leading encryption</li>
            <li>Normalized data in USD across all asset classes</li>
          </ul>
        </div>

        <button onClick={handleContinue} className="btn-primary-large">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default OnboardingPage;
