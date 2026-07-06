import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import Analyze from './pages/Analyze';
import Register from './pages/Register';
import Login from './pages/Login';
import UserDetails from './pages/UserDetails';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import PageLoader from './components/PageLoader';
import HowItWorksPage from './components/HowItWorks';
import AboutPage from './components/AboutPage';
import FeaturesPage from './components/FaeturesPage';
import TermsOfServicePage from './components/TermsofService';
import ViewExamplesPage from './components/ViewExamples';
import PrivacyPolicyPage from './components/PrivacyPolicy';
import ContactUsPage from './components/ContactUs';
import GitHubCallback from './pages/GitHubCallback';
import HelpCenterPage from './components/HelpCenter';
import { Toaster } from 'react-hot-toast';

function AppRoutes() {
  return (
    <div className="fade-in">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/examples" element={<ViewExamplesPage />} />
        <Route path="/features-page" element={<FeaturesPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        
        <Route path="/analyze" element={<Analyze />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-details" element={<UserDetails />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/auth/github/callback" element={<GitHubCallback />} />
      </Routes>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      {loading ? <PageLoader /> : <AppRoutes />}
    </>
  );
}

export default App;
