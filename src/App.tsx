import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Navigation';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider } from './context/LanguageContext';

const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const Solutions = React.lazy(() => import('./pages/Solutions').then(module => ({ default: module.Solutions })));
const Education = React.lazy(() => import('./pages/Education').then(module => ({ default: module.Education })));
const Impact = React.lazy(() => import('./pages/Impact').then(module => ({ default: module.Impact })));
const Contact = React.lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
              <Routes>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/solutions" element={<PageWrapper><Solutions /></PageWrapper>} />
                <Route path="/education" element={<PageWrapper><Education /></PageWrapper>} />
                <Route path="/impact" element={<PageWrapper><Impact /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                {/* Fallback to home for other paths */}
                <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
