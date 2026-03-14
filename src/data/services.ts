export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    title: "Marketing Digital para Clínicas",
    description:
      "Estrategias digitales diseñadas específicamente para el sector salud. Aumentamos tu visibilidad online y atraemos pacientes cualificados.",
    icon: "📊",
    features: [
      "Campañas en Google Ads y Meta Ads",
      "Estrategia de contenido médico",
      "Gestión de redes sociales",
      "Análisis y reportes mensuales",
    ],
  },
  {
    title: "Diseño Web Médico",
    description:
      "Sitios web profesionales, rápidos y optimizados para convertir visitantes en pacientes. Diseño centrado en la confianza y la credibilidad.",
    icon: "🌐",
    features: [
      "Diseño responsive y moderno",
      "Optimizado para velocidad",
      "Integración con agendamiento online",
      "Certificado SSL y seguridad",
    ],
  },
  {
    title: "SEO para Profesionales de Salud",
    description:
      "Posicionamos tu consultorio o clínica en los primeros resultados de Google para que los pacientes te encuentren cuando más lo necesitan.",
    icon: "🔍",
    features: [
      "Auditoría SEO completa",
      "Optimización on-page y técnica",
      "SEO local y Google Business",
      "Estrategia de keywords médicas",
    ],
  },
];

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    title: "Especialistas en Salud",
    description:
      "Entendemos las regulaciones, el lenguaje y las necesidades únicas del sector médico.",
    icon: "🏥",
  },
  {
    title: "Resultados Medibles",
    description:
      "Cada acción que tomamos está respaldada por datos. Reportes claros y transparentes.",
    icon: "📈",
  },
  {
    title: "Más Pacientes",
    description:
      "Nuestras estrategias están diseñadas para convertir visitantes en citas agendadas.",
    icon: "👥",
  },
  {
    title: "Soporte Dedicado",
    description:
      "Un equipo comprometido con el crecimiento de tu práctica médica.",
    icon: "🤝",
  },
];

export const siteConfig = {
  name: "WebMedic",
  description:
    "Agencia de marketing digital especializada en el sector salud. Ayudamos a médicos, clínicas y hospitales a crecer su presencia digital.",
  url: "https://webmedic.com",
  email: "contacto@webmedic.com",
  phone: "+57 300 123 4567",
};
