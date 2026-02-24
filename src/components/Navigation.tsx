import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Recycle, Menu, X, Leaf, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage, Language } from '../context/LanguageContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isLangOpen, setIsLangOpen] = React.useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav_home'), path: '/' },
    { name: t('nav_solutions'), path: '/solutions' },
    { name: t('nav_education'), path: '/education' },
    { name: t('nav_impact'), path: '/impact' },
    { name: t('nav_contact'), path: '/contact' },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ro', label: 'Română' },
    { code: 'he', label: 'עברית' },
    { code: 'de', label: 'Deutsch' },
    { code: 'es', label: 'Español' },
    { code: 'it', label: 'Italiano' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-highlight/80 backdrop-blur-lg border-b border-brand-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-primary p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <Recycle className="text-white w-6 h-6" />
            </div>
            <span className="font-serif text-2xl font-bold text-brand-primary tracking-tight">
              RecycleBin<span className="text-brand-secondary">.ro</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${location.pathname === link.path ? 'text-brand-primary' : 'text-slate-600'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                {languages.find(l => l.code === language)?.label}
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-brand-primary/10 overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-brand-highlight transition-colors ${language === lang.code ? 'text-brand-primary font-bold bg-brand-highlight' : 'text-slate-600'
                          }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className="btn-primary py-2 px-5 text-sm">
              {t('nav_quote')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsLangOpen(!isLangOpen)} className="p-2 text-brand-primary">
              <Globe className="w-5 h-5" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-brand-primary">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-primary/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-brand-primary hover:bg-brand-highlight rounded-lg">
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center btn-primary mt-4">
                {t('nav_quote')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Language Menu */}
      <AnimatePresence>
        {isLangOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-brand-primary/10 overflow-hidden"
          >
            <div className="px-4 py-4 grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                  className={`px-4 py-3 text-sm rounded-lg text-left transition-colors ${language === lang.code ? 'bg-brand-primary text-white' : 'bg-brand-highlight text-slate-600'
                    }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-primary text-brand-highlight pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Recycle className="text-brand-accent w-8 h-8" />
              <span className="font-serif text-2xl font-bold tracking-tight">
                RecycleBin<span className="text-brand-secondary">.ro</span>
              </span>
            </div>
            <p className="text-brand-accent/70 text-sm leading-relaxed mb-6">
              {t('footer_desc')}
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                <Leaf className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6">{t('footer_solutions')}</h4>
            <ul className="space-y-4 text-sm text-brand-accent/70">
              <li><Link to="/solutions" className="hover:text-white transition-colors">{t('footer_sol_commercial')}</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">{t('footer_sol_industrial')}</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">{t('footer_sol_municipal')}</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">{t('footer_sol_custom')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6">{t('footer_company')}</h4>
            <ul className="space-y-4 text-sm text-brand-accent/70">
              <li><Link to="/about" className="hover:text-white transition-colors">{t('footer_about')}</Link></li>
              <li><Link to="/education" className="hover:text-white transition-colors">{t('footer_education')}</Link></li>
              <li><Link to="/impact" className="hover:text-white transition-colors">{t('footer_impact')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('footer_contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-sm uppercase tracking-widest mb-6">{t('footer_newsletter')}</h4>
            <p className="text-sm text-brand-accent/70 mb-4">{t('footer_newsletter_desc')}</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={t('footer_newsletter_placeholder')}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-brand-accent"
              />
              <button className="bg-brand-accent text-brand-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-white transition-colors">
                {t('footer_newsletter_btn')}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-accent/50">
          <p>{t('footer_copyright')}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">{t('footer_privacy')}</a>
            <a href="#" className="hover:text-white">{t('footer_terms')}</a>
            <a href="#" className="hover:text-white">{t('footer_cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
