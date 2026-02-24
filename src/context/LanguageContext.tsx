import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'fr' | 'ro' | 'he' | 'de' | 'es' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    nav_home: 'Home',
    nav_solutions: 'Solutions',
    nav_education: 'Education',
    nav_impact: 'Impact',
    nav_contact: 'Contact',
    nav_quote: 'Get a Quote',
    hero_title: 'Turn Waste into Wealth.',
    hero_subtitle: 'The Future of Waste Management',
    hero_desc: 'RecycleBin.ro provides advanced on-site composting solutions for businesses, industries, and municipalities. Reduce costs, eliminate odors, and heal the planet.',
    hero_cta_primary: 'Explore Solutions',
    hero_cta_secondary: 'Request a Demo',
    stat_processing: 'Processing Time',
    stat_reduction: 'Volume Reduction',
    stat_odor: 'Odor Emission',
    calc_title: 'Calculate Your Environmental Impact',
    calc_desc: 'See how much waste you can divert from landfills and the resources you can create.',
    calc_label_waste: 'Monthly Organic Waste (kg)',
    calc_label_type: 'Type of Waste',
    calc_res_compost: 'Compost Produced / mo',
    calc_res_co2: 'CO2 Diverted / mo',
    calc_res_savings: 'Est. Disposal Savings',
  },
  fr: {
    nav_home: 'Accueil',
    nav_solutions: 'Solutions',
    nav_education: 'Éducation',
    nav_impact: 'Impact',
    nav_contact: 'Contact',
    nav_quote: 'Obtenir un devis',
    hero_title: 'Transformez les déchets en richesse.',
    hero_subtitle: 'L\'avenir de la gestion des déchets',
    hero_desc: 'RecycleBin.ro propose des solutions de compostage sur site avancées pour les entreprises, les industries et les municipalités. Réduisez les coûts, éliminez les odeurs et sauvez la planète.',
    hero_cta_primary: 'Explorer les solutions',
    hero_cta_secondary: 'Demander une démo',
    stat_processing: 'Temps de traitement',
    stat_reduction: 'Réduction de volume',
    stat_odor: 'Émission d\'odeurs',
    calc_title: 'Calculez votre impact environnemental',
    calc_desc: 'Découvrez la quantité de déchets que vous pouvez détourner des décharges.',
    calc_label_waste: 'Déchets organiques mensuels (kg)',
    calc_label_type: 'Type de déchets',
    calc_res_compost: 'Compost produit / mois',
    calc_res_co2: 'CO2 évité / mois',
    calc_res_savings: 'Économies d\'élimination est.',
  },
  ro: {
    nav_home: 'Acasă',
    nav_solutions: 'Soluții',
    nav_education: 'Educație',
    nav_impact: 'Impact',
    nav_contact: 'Contact',
    nav_quote: 'Cere Ofertă',
    hero_title: 'Transformă deșeurile în bogăție.',
    hero_subtitle: 'Viitorul managementului deșeurilor',
    hero_desc: 'RecycleBin.ro oferă soluții avansate de compostare la fața locului pentru afaceri, industrii și municipalități. Redu costurile, elimină mirosurile și vindecă planeta.',
    hero_cta_primary: 'Explorează Soluțiile',
    hero_cta_secondary: 'Cere un Demo',
    stat_processing: 'Timp de procesare',
    stat_reduction: 'Reducere volum',
    stat_odor: 'Emisii mirosuri',
    calc_title: 'Calculează impactul tău asupra mediului',
    calc_desc: 'Vezi cât de mult deșeu poți devia de la groapa de gunoi și resursele pe care le poți crea.',
    calc_label_waste: 'Deșeuri organice lunare (kg)',
    calc_label_type: 'Tipul de deșeu',
    calc_res_compost: 'Compost produs / lună',
    calc_res_co2: 'CO2 economisit / lună',
    calc_res_savings: 'Economii est. eliminare',
  },
  he: {
    nav_home: 'בית',
    nav_solutions: 'פתרונות',
    nav_education: 'חינוך',
    nav_impact: 'השפעה',
    nav_contact: 'צור קשר',
    nav_quote: 'קבל הצעת מחיר',
    hero_title: 'הפוך פסולת לעושר.',
    hero_subtitle: 'עתיד ניהול הפסולת',
    hero_desc: 'RecycleBin.ro מספקת פתרונות קומפוסטציה מתקדמים באתר עבור עסקים, תעשיות ורשויות מקומיות. הפחת עלויות, בטל ריחות ורפא את כדור הארץ.',
    hero_cta_primary: 'חקור פתרונות',
    hero_cta_secondary: 'בקש דמו',
    stat_processing: 'זמן עיבוד',
    stat_reduction: 'הפחתת נפח',
    stat_odor: 'פליטת ריח',
    calc_title: 'חשב את ההשפעה הסביבתית שלך',
    calc_desc: 'ראה כמה פסולת אתה יכול להסיט ממטמנות ואת המשאבים שאתה יכול ליצור.',
    calc_label_waste: 'פסולת אורגנית חודשית (ק"ג)',
    calc_label_type: 'סוג הפסולת',
    calc_res_compost: 'קומפוסט שנוצר / חודש',
    calc_res_co2: 'CO2 שנחסך / חודש',
    calc_res_savings: 'חיסכון משוער בפינוי',
  },
  de: {
    nav_home: 'Startseite',
    nav_solutions: 'Lösungen',
    nav_education: 'Bildung',
    nav_impact: 'Auswirkung',
    nav_contact: 'Kontakt',
    nav_quote: 'Angebot anfordern',
    hero_title: 'Abfall in Wohlstand verwandeln.',
    hero_subtitle: 'Die Zukunft der Abfallwirtschaft',
    hero_desc: 'RecycleBin.ro bietet fortschrittliche Vor-Ort-Kompostierungslösungen für Unternehmen, Industrien und Kommunen. Kosten senken, Gerüche beseitigen und den Planeten heilen.',
    hero_cta_primary: 'Lösungen erkunden',
    hero_cta_secondary: 'Demo anfordern',
    stat_processing: 'Verarbeitungszeit',
    stat_reduction: 'Volumenreduzierung',
    stat_odor: 'Geruchsemission',
    calc_title: 'Berechnen Sie Ihre Umweltauswirkung',
    calc_desc: 'Sehen Sie, wie viel Abfall Sie von Deponien fernhalten können.',
    calc_label_waste: 'Monatlicher Bioabfall (kg)',
    calc_label_type: 'Abfallart',
    calc_res_compost: 'Produzierter Kompost / Monat',
    calc_res_co2: 'Eingespartes CO2 / Monat',
    calc_res_savings: 'Geschätzte Entsorgungskosten',
  },
  es: {
    nav_home: 'Inicio',
    nav_solutions: 'Soluciones',
    nav_education: 'Educación',
    nav_impact: 'Impacto',
    nav_contact: 'Contacto',
    nav_quote: 'Obtener presupuesto',
    hero_title: 'Convierte los residuos en riqueza.',
    hero_subtitle: 'El futuro de la gestión de residuos',
    hero_desc: 'RecycleBin.ro ofrece soluciones avanzadas de compostaje in situ para empresas, industrias y municipios. Reduce costes, elimina olores y sana el planeta.',
    hero_cta_primary: 'Explorar soluciones',
    hero_cta_secondary: 'Solicitar demo',
    stat_processing: 'Tiempo de procesamiento',
    stat_reduction: 'Reducción de volumen',
    stat_odor: 'Emisión de olores',
    calc_title: 'Calcula tu impacto ambiental',
    calc_desc: 'Mira cuántos residuos puedes desviar de los vertederos.',
    calc_label_waste: 'Residuos orgánicos mensuales (kg)',
    calc_label_type: 'Tipo de residuo',
    calc_res_compost: 'Compost producido / mes',
    calc_res_co2: 'CO2 ahorrado / mes',
    calc_res_savings: 'Ahorro est. en eliminación',
  },
  it: {
    nav_home: 'Home',
    nav_solutions: 'Soluzioni',
    nav_education: 'Formazione',
    nav_impact: 'Impatto',
    nav_contact: 'Contatti',
    nav_quote: 'Richiedi preventivo',
    hero_title: 'Trasforma i rifiuti in ricchezza.',
    hero_subtitle: 'Il futuro della gestione dei rifiuti',
    hero_desc: 'RecycleBin.ro fornisce soluzioni avanzate di compostaggio in loco per aziende, industrie e comuni. Riduci i costi, elimina gli odori e guarisci il pianeta.',
    hero_cta_primary: 'Esplora le soluzioni',
    hero_cta_secondary: 'Richiedi una demo',
    stat_processing: 'Tempo di elaborazione',
    stat_reduction: 'Riduzione del volume',
    stat_odor: 'Emissione di odori',
    calc_title: 'Calcola il tuo impatto ambientale',
    calc_desc: 'Scopri quanti rifiuti puoi sottrarre alle discariche.',
    calc_label_waste: 'Rifiuti organici mensili (kg)',
    calc_label_type: 'Tipo di rifiuto',
    calc_res_compost: 'Compost prodotto / mese',
    calc_res_co2: 'CO2 risparmiata / mese',
    calc_res_savings: 'Risparmio stimato sullo smaltimento',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'he' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
