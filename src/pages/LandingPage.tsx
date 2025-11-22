import { useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Zap, Eye } from 'lucide-react';
import '../styles/Landing.css';

function LandingPage() {
  const navigate = useNavigate();

  const trustIndicators = [
    { text: 'Trusted by 500K+ investors', icon: '✓' },
    { text: 'Bank-level security', icon: '🔒' },
    { text: '24/7 customer support', icon: '💬' },
  ];

  const features = [
    {
      icon: <Zap size={28} />,
      title: 'All-in-One Portfolio',
      description: 'Crypto, stocks, banking, and more in a single unified dashboard'
    },
    {
      icon: <Shield size={28} />,
      title: 'Secure API Integration',
      description: 'Enterprise-grade encryption with TurboTax-style authentication'
    },
    {
      icon: <Eye size={28} />,
      title: 'Real-Time Monitoring',
      description: 'Live portfolio updates and instant compliance reports'
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Tax & Loan Ready',
      description: 'Generate compliant reports for tax filing and loan applications'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Connect Accounts',
      description: 'Link all your wallets and exchange accounts securely'
    },
    {
      number: '2',
      title: 'Automatic Sync',
      description: 'Your portfolio updates in real-time across all platforms'
    },
    {
      number: '3',
      title: 'Get Reports',
      description: 'Generate tax and compliance reports instantly'
    }
  ];

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">₳</span>
            <span className="logo-text">Altrion</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#features">Features</a></li>
            <li><a href="#integrations">Integrations</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
          </ul>
          <div className="nav-buttons">
            <button onClick={() => navigate('/login')} className="btn-nav-secondary">
              Log In
            </button>
            <button onClick={() => navigate('/signup')} className="btn-nav-primary">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-wrapper">
          <div className="hero-content">
            <h1 className="hero-title">
              The #1 Unified Portfolio Tracker
            </h1>
            <p className="hero-subtitle">
              Aggregate all your crypto, banking, and equity holdings. Get real-time compliance reports for taxes and loans.
            </p>

            <div className="trust-badges">
              {trustIndicators.map((indicator, idx) => (
                <div key={idx} className="trust-badge">
                  <span className="trust-icon">{indicator.icon}</span>
                  <span>{indicator.text}</span>
                </div>
              ))}
            </div>

            <div className="hero-buttons">
              <button onClick={() => navigate('/signup')} className="btn-primary-large">
                Get Started Free <ArrowRight size={18} />
              </button>
              <button className="btn-secondary-large">
                See Example Report
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-preview">
              <div className="preview-header">
                <div className="preview-dot"></div>
                <div className="preview-dot"></div>
                <div className="preview-dot"></div>
              </div>
              <div className="preview-content">
                <div className="preview-card total">
                  <span className="preview-label">Total Assets</span>
                  <span className="preview-value">$250,432</span>
                </div>
                <div className="preview-row">
                  <div className="preview-card">
                    <span className="preview-label">Crypto</span>
                    <span className="preview-value-sm">$145K</span>
                  </div>
                  <div className="preview-card">
                    <span className="preview-label">Stocks</span>
                    <span className="preview-value-sm">$85K</span>
                  </div>
                  <div className="preview-card">
                    <span className="preview-label">Banking</span>
                    <span className="preview-value-sm">$20.4K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="section-container">
          <div className="section-header">
            <h2>Why Choose Altrion?</h2>
            <p>Everything you need to manage your complete financial portfolio</p>
          </div>

          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon-box">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" id="how-it-works">
        <div className="section-container">
          <div className="section-header">
            <h2>Simple 3-Step Process</h2>
            <p>Get started in minutes, not hours</p>
          </div>

          <div className="steps-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Preview */}
      <section className="integrations-preview" id="integrations">
        <div className="section-container">
          <div className="section-header">
            <h2>100+ Integrations</h2>
            <p>Connect all your favorite platforms</p>
          </div>

          <div className="integrations-showcase">
            <div className="integration-grid-preview">
              {['Coinbase', 'MetaMask', 'Kraken', 'Binance', 'FTX', 'Robinhood',
                'Charles Schwab', 'TD Ameritrade', 'Gemini', 'Huobi'].map((platform, idx) => (
                <div key={idx} className="integration-card-preview">
                  <span>{platform}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-row">
            <button onClick={() => navigate('/integrations')} className="btn-primary-large">
              View All Integrations
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="section-container">
          <div className="cta-content">
            <h2>Start Managing Your Portfolio Today</h2>
            <p>Join thousands of investors using Altrion to stay compliant and informed</p>
            <button onClick={() => navigate('/signup')} className="btn-primary-large">
              Sign Up Free <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Altrion</h4>
              <p>The unified portfolio tracker for modern investors</p>
            </div>
            <div className="footer-col">
              <h5>Product</h5>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#integrations">Integrations</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Legal</h5>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#security">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Altrion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
