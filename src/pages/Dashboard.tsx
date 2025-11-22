import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext, AppContextType } from '../App';
import '../styles/Dashboard.css';
import { LogOut, Plus, TrendingUp, DollarSign } from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate();
  const context = useContext(AppContext) as AppContextType;
  const user = context.user;
  const wallets = context.connectedWallets;

  const totalBalance = wallets.reduce((sum, w) => sum + w.balance, 0);
  const cryptoBalance = wallets
    .filter((w) => w.type === 'crypto')
    .reduce((sum, w) => sum + w.balance, 0);
  const bankingBalance = wallets
    .filter((w) => w.type === 'banking')
    .reduce((sum, w) => sum + w.balance, 0);

  const handleLogout = () => {
    context.setUser(null);
    context.setConnectedWallets([]);
    navigate('/login');
  };

  const handleAddWallet = () => {
    navigate('/wallets');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Portfolio Dashboard</h1>
          <p>Welcome back, {user?.name}</p>
        </div>
        <button onClick={handleLogout} className="btn-logout">
          <LogOut size={20} />
          Log Out
        </button>
      </header>

      <div className="dashboard-grid">
        {/* Total Balance Card */}
        <div className="balance-card total">
          <div className="card-header">
            <h3>Total Portfolio Value</h3>
            <DollarSign size={24} />
          </div>
          <div className="card-value">
            ${totalBalance.toFixed(2)}
          </div>
          <p className="card-subtitle">All holdings in USD</p>
        </div>

        {/* Crypto Balance Card */}
        <div className="balance-card">
          <div className="card-header">
            <h3>Crypto Holdings</h3>
            <TrendingUp size={24} />
          </div>
          <div className="card-value">
            ${cryptoBalance.toFixed(2)}
          </div>
          <p className="card-subtitle">{wallets.filter((w) => w.type === 'crypto').length} wallets</p>
        </div>

        {/* Banking Balance Card */}
        <div className="balance-card">
          <div className="card-header">
            <h3>Banking Holdings</h3>
            <DollarSign size={24} />
          </div>
          <div className="card-value">
            ${bankingBalance.toFixed(2)}
          </div>
          <p className="card-subtitle">{wallets.filter((w) => w.type === 'banking').length} accounts</p>
        </div>
      </div>

      {/* Connected Wallets Section */}
      <div className="dashboard-section">
        <div className="section-header">
          <h2>Connected Wallets</h2>
          <button onClick={handleAddWallet} className="btn-add">
            <Plus size={20} />
            Add Wallet
          </button>
        </div>

        {wallets.length > 0 ? (
          <div className="wallets-list">
            {wallets.map((wallet) => (
              <div key={wallet.id} className="wallet-item">
                <div className="wallet-info">
                  <h4>{wallet.label}</h4>
                  <p className="wallet-type">
                    {wallet.type.charAt(0).toUpperCase() + wallet.type.slice(1)}
                  </p>
                </div>
                <div className="wallet-balance">
                  <span className="balance-value">
                    ${wallet.balance.toFixed(2)}
                  </span>
                  <span className="balance-percentage">
                    {((wallet.balance / totalBalance) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No wallets connected yet</p>
            <button onClick={handleAddWallet} className="btn-primary">
              Connect a Wallet
            </button>
          </div>
        )}
      </div>

      {/* Compliance Report Section */}
      <div className="dashboard-section">
        <h2>Compliance Report</h2>
        <div className="compliance-grid">
          <div className="compliance-card">
            <h4>Tax Eligibility</h4>
            <p className="status-badge eligible">Ready</p>
            <p className="card-description">All holdings documented and normalized</p>
          </div>
          <div className="compliance-card">
            <h4>Loan Eligibility</h4>
            <p className="status-badge eligible">Eligible</p>
            <p className="card-description">Total assets qualify for loan products</p>
          </div>
          <div className="compliance-card">
            <h4>Data Sync Status</h4>
            <p className="status-badge synced">Synced</p>
            <p className="card-description">Last updated just now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
