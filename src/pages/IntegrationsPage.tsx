import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Filter, ArrowRight } from 'lucide-react';
import '../styles/Integrations.css';

interface Integration {
  id: string;
  name: string;
  category: 'Exchange' | 'Wallet' | 'DeFi';
  icon: string;
}

function IntegrationsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const integrations: Integration[] = [
    { id: '1', name: 'Coinbase', category: 'Exchange', icon: '₿' },
    { id: '2', name: 'Binance', category: 'Exchange', icon: '📊' },
    { id: '3', name: 'Kraken', category: 'Exchange', icon: '🐙' },
    { id: '4', name: 'MetaMask', category: 'Wallet', icon: '🦊' },
    { id: '5', name: 'Ledger', category: 'Wallet', icon: '🔐' },
    { id: '6', name: 'Trezor', category: 'Wallet', icon: '🔑' },
    { id: '7', name: 'Uniswap', category: 'DeFi', icon: '🔄' },
    { id: '8', name: 'Aave', category: 'DeFi', icon: '💰' },
    { id: '9', name: 'OpenSea', category: 'DeFi', icon: '🎨' },
    { id: '10', name: 'FTX', category: 'Exchange', icon: '⭐' },
    { id: '11', name: 'Gemini', category: 'Exchange', icon: '💎' },
    { id: '12', name: 'Huobi', category: 'Exchange', icon: '🌐' },
    { id: '13', name: 'OKEx', category: 'Exchange', icon: '📈' },
    { id: '14', name: 'Robinhood', category: 'Exchange', icon: '🏦' },
    { id: '15', name: 'Charles Schwab', category: 'Exchange', icon: '🏛️' },
    { id: '16', name: 'TD Ameritrade', category: 'Exchange', icon: '📊' },
    { id: '17', name: 'Exodus', category: 'Wallet', icon: '🚀' },
    { id: '18', name: 'Trust Wallet', category: 'Wallet', icon: '💼' },
    { id: '19', name: 'Curve Finance', category: 'DeFi', icon: '📉' },
    { id: '20', name: 'Compound', category: 'DeFi', icon: '🧮' },
    { id: '21', name: 'Yearn Finance', category: 'DeFi', icon: '🌾' },
    { id: '22', name: 'Lido', category: 'DeFi', icon: '⚡' },
    { id: '23', name: 'Polygon', category: 'DeFi', icon: '🔷' },
    { id: '24', name: 'Arbitrum', category: 'DeFi', icon: '✨' },
  ];

  // Filter integrations
  const filteredIntegrations = useMemo(() => {
    return integrations.filter((integration) => {
      const matchesSearch = integration.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || integration.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categories = ['All', 'Exchange', 'Wallet', 'DeFi'];

  return (
    <div className="integrations-page">
      {/* Header */}
      <div className="integrations-header">
        <div className="header-content">
          <h1>Import from Any Crypto Platform</h1>
          <p>Connect 100+ exchanges, wallets, and DeFi protocols</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="search-section">
        <div className="search-container">
          {/* Search Bar */}
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search platforms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filters */}
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  selectedCategory === category ? 'active' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className="results-info">
            <p>
              Found <strong>{filteredIntegrations.length}</strong> matching result
              {filteredIntegrations.length !== 1 ? 's' : ''}
            </p>
          </div>
        )}
      </div>

      {/* Integrations Grid */}
      <div className="integrations-container">
        {filteredIntegrations.length > 0 ? (
          <div className="integrations-grid">
            {filteredIntegrations.map((integration) => (
              <div key={integration.id} className="integration-item">
                <div className="integration-card">
                  <div className="integration-icon">{integration.icon}</div>
                  <h3>{integration.name}</h3>
                  <span className="integration-category">
                    {integration.category}
                  </span>
                  <div className="integration-arrow">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <div className="no-results-icon">🔍</div>
            <h3>No matching platforms found</h3>
            <p>Unfortunately, we couldn't find any matching results for "{searchTerm}"</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="btn-reset"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="integrations-cta">
        <div className="cta-content">
          <h2>Ready to Connect Your Portfolio?</h2>
          <p>Start aggregating all your holdings today</p>
          <button onClick={() => navigate('/signup')} className="btn-primary-large">
            Get Started Free <ArrowRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default IntegrationsPage;
