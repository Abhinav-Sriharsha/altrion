import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import IntegrationsPage from './pages/IntegrationsPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import OnboardingPage from './pages/OnboardingPage';
import WalletSelectionPage from './pages/WalletSelectionPage';
import WalletConnectionPage from './pages/WalletConnectionPage';
import Dashboard from './pages/Dashboard';
import './App.css';

interface User {
  id: string;
  email: string;
  name: string;
}

interface ConnectedWallet {
  id: string;
  type: string;
  label: string;
  balance: number;
}

export interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  connectedWallets: ConnectedWallet[];
  setConnectedWallets: (wallets: ConnectedWallet[]) => void;
  selectedWallets: string[];
  setSelectedWallets: (wallets: string[]) => void;
}

export const AppContext = React.createContext<AppContextType | null>(null);

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [connectedWallets, setConnectedWallets] = useState<ConnectedWallet[]>([]);
  const [selectedWallets, setSelectedWallets] = useState<string[]>([]);

  const contextValue: AppContextType = {
    user,
    setUser,
    connectedWallets,
    setConnectedWallets,
    selectedWallets,
    setSelectedWallets,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/onboarding" element={user ? <OnboardingPage /> : <Navigate to="/login" />} />
          <Route path="/wallets" element={user ? <WalletSelectionPage /> : <Navigate to="/login" />} />
          <Route path="/connect" element={user ? <WalletConnectionPage /> : <Navigate to="/login" />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
