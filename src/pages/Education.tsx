import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Lightbulb, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Education = () => {
  const { t } = useLanguage();

  const steps = [
    { step: '01', title: t('edu_step1_title'), desc: t('edu_step1_desc') },
    { step: '02', title: t('edu_step2_title'), desc: t('edu_step2_desc') },
    { step: '03', title: t('edu_step3_title'), desc: t('edu_step3_desc') },
    { step: '04', title: t('edu_step4_title'), desc: t('edu_step4_desc') },
  ];

  const benefits = [
    t('edu_benefit1'), t('edu_benefit2'), t('edu_benefit3'), t('edu_benefit4'), t('edu_benefit5'),
  ];

  const faqs = [
    { q: t('edu_faq1_q'), a: t('edu_faq1_a') },
    { q: t('edu_faq2_q'), a: t('edu_faq2_a') },
    { q: t('edu_faq3_q'), a: t('edu_faq3_a') },
    { q: t('edu_faq4_q'), a: t('edu_faq4_a') },
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-highlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold mb-8">
              <BookOpen className="w-4 h-4" />
              <span>{t('edu_badge')}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-primary leading-tight mb-8">
              {t('edu_hero_title_1')} <br /><span className="italic">{t('edu_hero_title_italic')}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              {t('edu_hero_desc')}
            </p>
          </motion.div>
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/nature/800/600" alt="Composting Process" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>

        {/* How it works */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-primary mb-4">{t('edu_process_title')}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t('edu_process_desc')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative p-8 bg-white rounded-3xl border border-brand-primary/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-5xl font-serif text-brand-primary/10 mb-6">{item.step}</div>
                <h4 className="text-xl font-bold text-brand-primary mb-3">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-brand-primary text-white p-12 md:p-24 rounded-[64px] mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-12">{t('edu_why_title_1')} <br /><span className="italic text-brand-accent">{t('edu_why_title_italic')}</span></h2>
              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="bg-brand-accent/20 p-1 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                    </div>
                    <span className="text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 p-8 rounded-3xl flex flex-col justify-between">
                <Lightbulb className="text-brand-accent w-10 h-10 mb-8" />
                <div>
                  <div className="text-3xl font-serif mb-2">{t('edu_didyouknow')}</div>
                  <p className="text-sm text-brand-accent/70">{t('edu_didyouknow_desc')}</p>
                </div>
              </div>
              <div className="bg-white/10 p-8 rounded-3xl flex flex-col justify-between">
                <HelpCircle className="text-brand-accent w-10 h-10 mb-8" />
                <div>
                  <div className="text-3xl font-serif mb-2">{t('edu_roi')}</div>
                  <p className="text-sm text-brand-accent/70">{t('edu_roi_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif text-brand-primary text-center mb-16">{t('edu_faq_title')}</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-brand-primary/5">
                <h4 className="text-lg font-bold text-brand-primary mb-4">{faq.q}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
