import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Factory, Building2, TreePine, Zap, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WasteCalculator } from '../components/Calculator';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();

  const segments = [
    {
      title: t('home_seg_commercial'),
      icon: Building2,
      desc: t('home_seg_commercial_desc'),
      features: [t('home_seg_commercial_f1'), t('home_seg_commercial_f2'), t('home_seg_commercial_f3')]
    },
    {
      title: t('home_seg_industrial'),
      icon: Factory,
      desc: t('home_seg_industrial_desc'),
      features: [t('home_seg_industrial_f1'), t('home_seg_industrial_f2'), t('home_seg_industrial_f3')]
    },
    {
      title: t('home_seg_municipal'),
      icon: TreePine,
      desc: t('home_seg_municipal_desc'),
      features: [t('home_seg_municipal_f1'), t('home_seg_municipal_f2'), t('home_seg_municipal_f3')]
    }
  ];

  const whyItems = [
    { title: t('home_why_rapid_title'), desc: t('home_why_rapid_desc'), icon: Zap },
    { title: t('home_why_zero_title'), desc: t('home_why_zero_desc'), icon: Leaf },
    { title: t('home_why_smart_title'), desc: t('home_why_smart_desc'), icon: Building2 }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-highlight">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold mb-8">
                <TreePine className="w-4 h-4" />
                <span>{t('hero_subtitle')}</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif text-brand-primary leading-[0.9] mb-8">
                {t('hero_title')}
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                {t('hero_desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solutions" className="btn-primary text-lg px-8 py-4">
                  {t('hero_cta_primary')} <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                  {t('hero_cta_secondary')}
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-8 border-t border-brand-primary/10 pt-8">
                <div>
                  <div className="text-2xl font-bold text-brand-primary">24h</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{t('stat_processing')}</div>
                </div>
                <div className="w-px h-10 bg-brand-primary/10" />
                <div>
                  <div className="text-2xl font-bold text-brand-primary">90%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{t('stat_reduction')}</div>
                </div>
                <div className="w-px h-10 bg-brand-primary/10" />
                <div>
                  <div className="text-2xl font-bold text-brand-primary">0%</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{t('stat_odor')}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://picsum.photos/seed/compost/800/1000"
                  alt="Industrial Composter"
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-accent rounded-full -z-10 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-brand-secondary/20 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6">{t('home_segments_title')} <span className="italic">{t('home_segments_title_italic')}</span></h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('home_segments_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {segments.map((segment, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-[32px] bg-brand-highlight border border-brand-primary/5 hover:shadow-xl transition-all group"
              >
                <div className="bg-brand-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <segment.icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif text-brand-primary mb-4">{segment.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{segment.desc}</p>
                <ul className="space-y-3">
                  {segment.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm font-medium text-brand-primary">
                      <CheckCircle2 className="w-4 h-4" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Calculator */}
      <WasteCalculator />

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <RecycleIcon className="w-full h-full rotate-12" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                {t('home_why_title_1')} <span className="italic text-brand-accent">{t('home_why_title_italic')}</span> {t('home_why_title_2')}
              </h2>
              <div className="space-y-8">
                {whyItems.map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                      <item.icon className="text-brand-accent w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-brand-accent/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[40px] overflow-hidden border-4 border-white/20">
                <img
                  src="https://picsum.photos/seed/tech/800/800"
                  alt="Technology"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-brand-accent text-brand-primary p-10 rounded-3xl shadow-2xl max-w-xs">
                <div className="text-5xl font-serif mb-2">90%</div>
                <div className="text-sm font-bold uppercase tracking-widest">{t('home_why_stat')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-highlight">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-16 rounded-[48px] shadow-xl border border-brand-primary/5">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-8">{t('home_cta_title_1')} <br /><span className="italic">{t('home_cta_title_italic')}</span></h2>
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto">
              {t('home_cta_desc')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="btn-primary text-xl px-10 py-5">
                {t('home_cta_quote')}
              </Link>
              <Link to="/solutions" className="btn-secondary text-xl px-10 py-5">
                {t('home_cta_products')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const RecycleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 11l5-5 5 5" />
    <path d="M12 6v12" />
  </svg>
);
