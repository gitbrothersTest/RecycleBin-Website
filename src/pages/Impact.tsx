import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, Globe, Droplets, Wind, ArrowUpRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

const data = [
  { month: 'Jan', diverted: 400, saved: 240 },
  { month: 'Feb', diverted: 300, saved: 139 },
  { month: 'Mar', diverted: 200, saved: 980 },
  { month: 'Apr', diverted: 278, saved: 390 },
  { month: 'May', diverted: 189, saved: 480 },
  { month: 'Jun', diverted: 239, saved: 380 },
];

export const Impact = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('impact_stat_diverted'), value: '1,240 Tons', icon: Globe, trend: '+12%' },
    { label: t('impact_stat_co2'), value: '992 Tons', icon: Wind, trend: '+15%' },
    { label: t('impact_stat_water'), value: '450k Liters', icon: Droplets, trend: '+8%' },
    { label: t('impact_stat_compost'), value: '310 Tons', icon: BarChart3, trend: '+10%' }
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-highlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-serif text-brand-primary mb-6">{t('impact_title')} <span className="italic">{t('impact_title_italic')}</span></h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('impact_desc')}
          </p>
        </div>

        {/* Global Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] border border-brand-primary/5 shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="bg-brand-primary/10 p-3 rounded-xl">
                  <stat.icon className="text-brand-primary w-6 h-6" />
                </div>
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-full">
                  <ArrowUpRight className="w-3 h-3" /> {stat.trend}
                </div>
              </div>
              <div className="text-3xl font-serif text-brand-primary mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white p-10 rounded-[48px] border border-brand-primary/5 shadow-sm">
            <h3 className="text-2xl font-serif text-brand-primary mb-8">{t('impact_chart_diversion')}</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} cursor={{ fill: '#f8fafc' }} />
                  <Bar dataKey="diverted" fill="#1a4d2e" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[48px] border border-brand-primary/5 shadow-sm">
            <h3 className="text-2xl font-serif text-brand-primary mb-8">{t('impact_chart_savings')}</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                  <Line type="monotone" dataKey="saved" stroke="#4f6f52" strokeWidth={3} dot={{ fill: '#4f6f52', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Case Study Teaser */}
        <div className="bg-brand-primary text-white p-12 md:p-20 rounded-[64px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">{t('impact_case_title')} <span className="italic text-brand-accent">{t('impact_case_name')}</span></h2>
            <p className="text-xl text-brand-accent/80 mb-10 leading-relaxed">
              {t('impact_case_quote')}
            </p>
            <div className="flex items-center gap-4">
              <img src="https://picsum.photos/seed/avatar/100/100" className="w-12 h-12 rounded-full border-2 border-brand-accent" alt="Avatar" referrerPolicy="no-referrer" />
              <div>
                <div className="font-bold">Elena Popescu</div>
                <div className="text-sm text-brand-accent/60">{t('impact_case_role')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
