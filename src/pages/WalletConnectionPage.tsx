import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext, AppContextType } from '../App';
import '../styles/WalletPages.css';
import { CheckCircle, Loader } from 'lucide-react';

interface WalletToConnect {
  id: string;
  name: string;
  status: 'pending' | 'connected' | 'connecting';
}

function WalletConnectionPage() {
  const navigate = useNavigate();
  const context = useContext(AppContext) as AppContextType;
  const [wallets, setWallets] = useState<WalletToConnect[]>(
    context.selectedWallets.map((id) => ({
      id,
      name: {
        coinbase: 'Coinbase',
        metamask: 'MetaMask',
        robinhood: 'Robinhood',
        schwab: 'Charles Schwab',
        bank: 'Traditional Bank',
      }[id] || id,
      status: 'pending',
    }))
  );

  const connectWallet = (id: string) => {
    setWallets((prev) =>
      prev.map((w) => (w.id === id ? { ...w, status: 'connecting' } : w))
    );

    // Simulate connection delay
    setTimeout(() => {
      setWallets((prev) =>
        prev.map((w) => (w.id === id ? { ...w, status: 'connected' } : w))
      );
    }, 2000);
  };

  const handleContinue = () => {
    const connectedWalletsList = wallets.filter((w) => w.status === 'connected');
    if (connectedWalletsList.length === 0) {
      alert('Please connect at least one wallet');
      return;
    }

    context.setConnectedWallets(
      connectedWalletsList.map((w) => ({
        id: w.id,
        type: 'wallet',
        label: w.name,
        balance: Math.random() * 100000,
      }))
    );

    navigate('/dashboard');
  };

  const allConnected = wallets.every((w) => w.status === 'connected');

  return (
    <div className="wallet-container">
      <div className="wallet-header">
        <h1>Connect Your Wallets</h1>
        <p>Securely authenticate with each account using TurboTax-style login</p>
      </div>

      <div className="connection-list">
        {wallets.map((wallet) => (
          <div key={wallet.id} className="connection-item">
            <div className="connection-info">
              <h3>{wallet.name}</h3>
              <p>
                {wallet.status === 'pending' && 'Ready to connect'}
                {wallet.status === 'connecting' && 'Connecting...'}
                {wallet.status === 'connected' && 'Successfully connected'}
              </p>
            </div>

            <div className="connection-status">
              {wallet.status === 'pending' && (
                <button
                  onClick={() => connectWallet(wallet.id)}
                  className="btn-connect"
                >
                  Connect
                </button>
              )}
              {wallet.status === 'connecting' && (
                <Loader className="status-icon loading" size={24} />
              )}
              {wallet.status === 'connected' && (
                <CheckCircle className="status-icon connected" size={24} />
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="wallet-actions">
        <button onClick={() => navigate('/wallets')} className="btn-secondary">
          Back
        </button>
        <button
          onClick={handleContinue}
          className={`btn-primary ${!allConnected ? 'disabled' : ''}`}
          disabled={!allConnected}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default WalletConnectionPage;
