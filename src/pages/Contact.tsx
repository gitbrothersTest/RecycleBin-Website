import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: [
        `Company: ${formData.get('company') || 'N/A'}`,
        `Solution Interest: ${formData.get('solution') || 'N/A'}`,
        '',
        formData.get('message') || '',
      ].join('\n'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-highlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-primary mb-8 leading-tight">
              {t('contact_title_1')} <br /><span className="italic">{t('contact_title_italic')}</span> {t('contact_title_2')}
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              {t('contact_desc')}
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="bg-brand-primary/10 p-4 rounded-2xl">
                  <Mail className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary">{t('contact_email_label')}</h4>
                  <p className="text-slate-500">contact@recyclebin.ro</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-brand-primary/10 p-4 rounded-2xl">
                  <Phone className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary">{t('contact_phone_label')}</h4>
                  <p className="text-slate-500">+40 722 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="bg-brand-primary/10 p-4 rounded-2xl">
                  <MapPin className="text-brand-primary w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary">{t('contact_visit_label')}</h4>
                  <p className="text-slate-500">Strada Sustenabilitatii 12, Bucuresti, Romania</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-brand-primary/5 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-brand-secondary/20 p-2 rounded-lg">
                  <MessageSquare className="text-brand-secondary w-5 h-5" />
                </div>
                <h4 className="font-bold text-brand-primary">{t('contact_consult_title')}</h4>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                {t('contact_consult_desc')}
              </p>
              <button className="text-brand-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                {t('contact_consult_cta')} <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-[48px] shadow-2xl border border-brand-primary/5 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="bg-brand-primary w-20 h-20 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 className="text-white w-10 h-10" />
                </div>
                <h2 className="text-3xl font-serif text-brand-primary mb-4">{t('contact_success_title')}</h2>
                <p className="text-slate-500 mb-8">
                  {t('contact_success_desc')}
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary">
                  {t('contact_success_another')}
                </button>
              </motion.div>
            ) : (
              <div className="bg-white p-10 md:p-16 rounded-[48px] shadow-2xl border border-brand-primary/5">
                <h3 className="text-3xl font-serif text-brand-primary mb-8">{t('contact_form_title')}</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t('contact_label_name')}</label>
                      <input required name="name" type="text" className="w-full bg-brand-highlight border border-brand-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder={t('contact_placeholder_name')} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t('contact_label_company')}</label>
                      <input required name="company" type="text" className="w-full bg-brand-highlight border border-brand-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder={t('contact_placeholder_company')} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t('contact_label_email')}</label>
                    <input required name="email" type="email" className="w-full bg-brand-highlight border border-brand-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder={t('contact_placeholder_email')} />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t('contact_label_solution')}</label>
                    <select name="solution" className="w-full bg-brand-highlight border border-brand-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20">
                      <option>{t('contact_option_rb50')}</option>
                      <option>{t('contact_option_rb250')}</option>
                      <option>{t('contact_option_rb1000')}</option>
                      <option>{t('contact_option_custom')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t('contact_label_message')}</label>
                    <textarea name="message" rows={4} className="w-full bg-brand-highlight border border-brand-primary/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary/20" placeholder={t('contact_placeholder_message')} />
                  </div>
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                      {error}
                    </div>
                  )}
                  <button type="submit" disabled={sending} className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed">
                    {sending ? t('contact_sending') : t('contact_submit')} <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
