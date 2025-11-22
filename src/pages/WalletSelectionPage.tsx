import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext, AppContextType } from '../App';
import '../styles/WalletPages.css';
import { Bitcoin, Landmark, TrendingUp, DollarSign } from 'lucide-react';

interface WalletOption {
  id: string;
  name: string;
  type: string;
  icon: React.ReactNode;
  description: string;
}

function WalletSelectionPage() {
  const navigate = useNavigate();
  const context = useContext(AppContext) as AppContextType;
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const walletOptions: WalletOption[] = [
    {
      id: 'coinbase',
      name: 'Coinbase',
      type: 'crypto',
      icon: <Bitcoin size={32} />,
      description: 'Connect your Coinbase crypto holdings',
    },
    {
      id: 'metamask',
      name: 'MetaMask',
      type: 'crypto',
      icon: <Bitcoin size={32} />,
      description: 'Connect your MetaMask wallet',
    },
    {
      id: 'robinhood',
      name: 'Robinhood',
      type: 'brokerage',
      icon: <TrendingUp size={32} />,
      description: 'Connect your Robinhood trading account',
    },
    {
      id: 'schwab',
      name: 'Charles Schwab',
      type: 'banking',
      icon: <Landmark size={32} />,
      description: 'Connect your Charles Schwab accounts',
    },
    {
      id: 'bank',
      name: 'Traditional Bank',
      type: 'banking',
      icon: <DollarSign size={32} />,
      description: 'Connect your bank accounts',
    },
  ];

  const handleSelectWallet = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (selectedIds.length === 0) {
      alert('Please select at least one wallet');
      return;
    }

    context.setSelectedWallets(selectedIds);
    navigate('/connect');
  };

  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <h1>Select Your Wallets</h1>
        <p>Choose the accounts you want to import data from</p>
      </div>

      <div className="wallets-grid">
        {walletOptions.map((wallet) => (
          <div
            key={wallet.id}
            className={`wallet-card ${selectedIds.includes(wallet.id) ? 'selected' : ''}`}
            onClick={() => handleSelectWallet(wallet.id)}
          >
            <div className="wallet-icon">{wallet.icon}</div>
            <h3>{wallet.name}</h3>
            <p>{wallet.description}</p>
            <div className="wallet-checkbox">
              <input
                type="checkbox"
                checked={selectedIds.includes(wallet.id)}
                onChange={() => {}}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="wallet-actions">
        <button onClick={() => navigate('/onboarding')} className="btn-secondary">
          Back
        </button>
        <button onClick={handleContinue} className="btn-primary">
          Continue
        </button>
      </div>
    </div>
  );
}

export default WalletSelectionPage;
