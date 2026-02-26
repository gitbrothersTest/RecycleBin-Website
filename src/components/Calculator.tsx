import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Scale, Leaf, TrendingDown, DollarSign } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

export const WasteCalculator = () => {
  const { t } = useLanguage();
  const [wasteAmount, setWasteAmount] = useState<number>(500);
  const [wasteType, setWasteType] = useState<'food' | 'mixed' | 'green'>('food');

  const results = useMemo(() => {
    const compostRatio = wasteType === 'food' ? 0.25 : wasteType === 'mixed' ? 0.2 : 0.3;
    const co2Factor = 0.8;
    const costPerKg = 0.15;

    return {
      compostProduced: Math.round(wasteAmount * compostRatio),
      co2Saved: Math.round(wasteAmount * co2Factor),
      moneySaved: Math.round(wasteAmount * costPerKg),
    };
  }, [wasteAmount, wasteType]);

  const wasteTypes: { key: 'food' | 'mixed' | 'green'; label: string }[] = [
    { key: 'food', label: t('calc_waste_food') },
    { key: 'mixed', label: t('calc_waste_mixed') },
    { key: 'green', label: t('calc_waste_green') },
  ];

  const chartData = [
    { name: t('calc_chart_compost'), value: results.compostProduced, color: '#1a4d2e' },
    { name: t('calc_chart_reduction'), value: wasteAmount - results.compostProduced, color: '#4f6f52' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-brand-primary">
              {t('calc_title')}
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              {t('calc_desc')}
            </p>

            <div className="space-y-8 glass-card p-8 rounded-3xl border-brand-primary/10">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                  {t('calc_label_waste')}
                </label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="100"
                  value={wasteAmount}
                  onChange={(e) => setWasteAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-brand-accent rounded-lg appearance-none cursor-pointer accent-brand-primary"
                />
                <div className="flex justify-between mt-2 font-mono text-sm text-brand-primary font-bold">
                  <span>100 kg</span>
                  <span className="text-xl">{wasteAmount.toLocaleString()} kg</span>
                  <span>5,000 kg</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                  {t('calc_label_type')}
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {wasteTypes.map((wt) => (
                    <button
                      key={wt.key}
                      onClick={() => setWasteType(wt.key)}
                      className={`py-3 rounded-xl text-sm font-bold transition-all ${wasteType === wt.key
                          ? 'bg-brand-primary text-white shadow-lg'
                          : 'bg-brand-highlight text-brand-primary hover:bg-brand-accent'
                        }`}
                    >
                      {wt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              key={results.compostProduced}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-brand-highlight p-8 rounded-3xl border border-brand-primary/5"
            >
              <div className="bg-brand-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <Leaf className="text-brand-primary" />
              </div>
              <div className="text-4xl font-serif text-brand-primary mb-2">{results.compostProduced} kg</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t('calc_res_compost')}</div>
            </motion.div>

            <motion.div
              key={results.co2Saved}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-brand-primary p-8 rounded-3xl text-white"
            >
              <div className="bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <TrendingDown className="text-white" />
              </div>
              <div className="text-4xl font-serif mb-2">{results.co2Saved} kg</div>
              <div className="text-sm font-bold text-brand-accent uppercase tracking-widest">{t('calc_res_co2')}</div>
            </motion.div>

            <motion.div
              key={results.moneySaved}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-brand-accent p-8 rounded-3xl border border-brand-primary/5"
            >
              <div className="bg-brand-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="text-brand-primary" />
              </div>
              <div className="text-4xl font-serif text-brand-primary mb-2">€{results.moneySaved}</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t('calc_res_savings')}</div>
            </motion.div>

            <div className="h-full min-h-[200px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
