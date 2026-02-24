import React from 'react';
import { motion } from 'motion/react';
import { Check, Info, ArrowRight, Settings, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const Solutions = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 'rb-50',
      name: 'RB-50 Compact',
      category: t('home_seg_commercial'),
      capacity: '50kg / day',
      image: 'https://picsum.photos/seed/rb50/600/400',
      description: t('sol_rb50_desc'),
      features: [t('sol_rb50_f1'), t('sol_rb50_f2'), t('sol_rb50_f3')],
      specs: { dimensions: '120 x 80 x 110 cm', power: '2.5 kW', cycle: '24 hours' }
    },
    {
      id: 'rb-250',
      name: 'RB-250 Professional',
      category: `${t('home_seg_commercial')} / ${t('home_seg_industrial')}`,
      capacity: '250kg / day',
      image: 'https://picsum.photos/seed/rb250/600/400',
      description: t('sol_rb250_desc'),
      features: [t('sol_rb250_f1'), t('sol_rb250_f2'), t('sol_rb250_f3')],
      specs: { dimensions: '220 x 120 x 180 cm', power: '7.5 kW', cycle: '24 hours' }
    },
    {
      id: 'rb-1000',
      name: 'RB-1000 Industrial',
      category: `${t('home_seg_industrial')} / ${t('home_seg_municipal')}`,
      capacity: '1000kg / day',
      image: 'https://picsum.photos/seed/rb1000/600/400',
      description: t('sol_rb1000_desc'),
      features: [t('sol_rb1000_f1'), t('sol_rb1000_f2'), t('sol_rb1000_f3')],
      specs: { dimensions: '450 x 220 x 250 cm', power: '22 kW', cycle: 'Continuous' }
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-highlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif text-brand-primary mb-6">{t('sol_page_title')} <span className="italic">{t('sol_page_title_italic')}</span></h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('sol_page_desc')}
          </p>
        </div>

        <div className="space-y-32">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-brand-primary/5 rounded-[40px] blur-2xl group-hover:bg-brand-primary/10 transition-colors" />
                  <div className="relative rounded-[32px] overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[400px] object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-6 left-6 bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                      {product.category}
                    </div>
                  </div>
                </div>
              </div>

              <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="text-brand-secondary font-bold uppercase tracking-widest text-sm mb-4">{t('sol_capacity')}: {product.capacity}</div>
                <h2 className="text-4xl md:text-5xl font-serif text-brand-primary mb-6">{product.name}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  {product.features.map(feature => (
                    <div key={feature} className="flex items-start gap-3">
                      <div className="mt-1 bg-brand-primary/10 p-1 rounded-full">
                        <Check className="w-4 h-4 text-brand-primary" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white p-8 rounded-3xl border border-brand-primary/5 mb-10">
                  <h4 className="font-bold text-sm uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <Settings className="w-4 h-4" /> {t('sol_specs_title')}
                  </h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs text-slate-500 mb-1">{t('sol_specs_dimensions')}</div>
                      <div className="text-sm font-bold text-brand-primary">{product.specs.dimensions}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">{t('sol_specs_power')}</div>
                      <div className="text-sm font-bold text-brand-primary">{product.specs.power}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-1">{t('sol_specs_cycle')}</div>
                      <div className="text-sm font-bold text-brand-primary">{product.specs.cycle}</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link to="/contact" className="btn-primary">
                    {t('sol_get_pricing')} <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="btn-secondary">
                    {t('sol_download_specs')}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trust Points */}
      <section className="mt-32 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-highlight rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-brand-primary w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif text-brand-primary mb-3">{t('sol_trust_quality_title')}</h4>
              <p className="text-sm text-slate-500">{t('sol_trust_quality_desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-highlight rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="text-brand-primary w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif text-brand-primary mb-3">{t('sol_trust_support_title')}</h4>
              <p className="text-sm text-slate-500">{t('sol_trust_support_desc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-highlight rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Info className="text-brand-primary w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif text-brand-primary mb-3">{t('sol_trust_training_title')}</h4>
              <p className="text-sm text-slate-500">{t('sol_trust_training_desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
