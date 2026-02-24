import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Lightbulb, CheckCircle2, HelpCircle, ArrowRight } from 'lucide-react';

export const Education = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-highlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold mb-8">
              <BookOpen className="w-4 h-4" />
              <span>Knowledge Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-primary leading-tight mb-8">
              Understanding the <br/><span className="italic">Science of Composting</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Composting is nature's way of recycling. Our technology accelerates this biological process, 
              transforming organic waste into nutrient-rich soil in a fraction of the time.
            </p>
          </motion.div>
          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/nature/800/600" 
                alt="Composting Process" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* How it works */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-primary mb-4">The 24-Hour Transformation</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Our accelerated aerobic composting process follows four critical stages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Collection', desc: 'Organic waste is loaded into the chamber.' },
              { step: '02', title: 'Activation', desc: 'Microbes are introduced to begin decomposition.' },
              { step: '03', title: 'Processing', desc: 'Controlled heat and aeration accelerate the breakdown.' },
              { step: '04', title: 'Harvest', desc: 'Rich, stable compost is ready for use.' }
            ].map((item, idx) => (
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
              <h2 className="text-4xl md:text-5xl font-serif mb-12">Why On-Site <br/><span className="italic text-brand-accent">Composting Matters</span></h2>
              <div className="space-y-6">
                {[
                  'Reduces methane emissions from landfills',
                  'Eliminates transportation costs and carbon footprint',
                  'Creates a valuable resource for local landscaping',
                  'Improves organizational sustainability ratings',
                  'Ensures compliance with evolving waste regulations'
                ].map((benefit, idx) => (
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
                  <div className="text-3xl font-serif mb-2">Did you know?</div>
                  <p className="text-sm text-brand-accent/70">Organic waste in landfills is a major source of methane, a greenhouse gas 25x more potent than CO2.</p>
                </div>
              </div>
              <div className="bg-white/10 p-8 rounded-3xl flex flex-col justify-between">
                <HelpCircle className="text-brand-accent w-10 h-10 mb-8" />
                <div>
                  <div className="text-3xl font-serif mb-2">The ROI</div>
                  <p className="text-sm text-brand-accent/70">Most businesses see a full return on investment within 18-24 months through reduced disposal fees.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-serif text-brand-primary text-center mb-16">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Does it smell?', a: 'No. Our units use advanced bio-filters and activated carbon systems to neutralize all odors during processing.' },
              { q: 'What can be composted?', a: 'Almost all organic matter including food scraps, meat, dairy, small bones, and green waste.' },
              { q: 'How much space is needed?', a: 'Our compact units take up less space than a standard dumpster, while industrial units are designed for efficient footprints.' },
              { q: 'Is it easy to operate?', a: 'Yes. The systems are fully automated. Your staff simply loads the waste and the machine handles the rest.' }
            ].map((faq, idx) => (
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
