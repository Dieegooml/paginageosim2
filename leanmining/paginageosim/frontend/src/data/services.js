// Servicios de Lean Mining Consulting

export const services = [
  {
    id: 'mine-design',
    title: 'Diseño de Minas Subterráneas y Open Pit',
    shortDescription: 'Ingeniería de diseño para operaciones subterráneas y a cielo abierto.',
    description: 'Desarrollamos diseños mineros integrales que optimizan la geometría de extracción, la infraestructura de acceso y los sistemas de soporte. Nuestro enfoque considera las características geológicas y geomecánicas del yacimiento para maximizar la recuperación del recurso con los más altos estándares de seguridad.',
    icon: 'planning',
    image: '/images/services/planeacion-subterranea.jpg',
    features: [
      'Diseño de tajos abiertos y secuenciamiento de bancos',
      'Diseño de minas subterráneas y selección de métodos',
      'Infraestructura de accesos, rampas y galerías',
      'Sistemas de ventilación, drenaje y fortificación',
    ],
  },
  {
    id: 'cost-analysis',
    title: 'Análisis de Costos',
    shortDescription: 'Evaluación detallada de costos operativos y de capital.',
    description: 'Realizamos análisis exhaustivos de la estructura de costos mineros, identificando oportunidades de optimización y estableciendo benchmarks contra operaciones comparables. Nuestro enfoque permite tomar decisiones informadas sobre inversiones, métodos de explotación y estrategias operativas.',
    icon: 'cost',
    image: '/images/services/optimizacion-costos.jpg',
    features: [
      'Análisis de costos unitarios por proceso',
      'Benchmarking con operaciones similares',
      'Identificación de drivers de costo',
      'Estrategias de reducción y control de costos',
    ],
  },
  {
    id: 'kpi-implementation',
    title: 'Implementación de KPIs',
    shortDescription: 'Sistemas de indicadores para gestión operativa de alto rendimiento.',
    description: 'Diseñamos e implementamos sistemas de indicadores clave de desempeño adaptados a las necesidades específicas de cada operación. Establecemos métricas claras, sistemas de medición confiables y dashboards que permiten la toma de decisiones basada en datos para la mejora continua.',
    icon: 'method',
    image: '/images/services/metodos-explotacion.jpg',
    features: [
      'Definición de KPIs operativos y estratégicos',
      'Sistemas de medición y reporte automatizado',
      'Dashboards gerenciales y operativos',
      'Programas de mejora continua basados en datos',
    ],
  },
  {
    id: 'mine-planning',
    title: 'Planeación de Mina en General',
    shortDescription: 'Planificación integral de corto, mediano y largo plazo.',
    description: 'Elaboramos planes mineros que alinean los objetivos técnicos con las metas financieras del negocio. Desde la planificación diaria hasta el Life of Mine, desarrollamos programas que maximizan el valor del activo considerando restricciones operativas, de mercado y de capital.',
    icon: 'transition',
    image: '/images/services/transicion-minera.jpg',
    features: [
      'Planes de corto plazo (diario, semanal, mensual)',
      'Planificación de mediano plazo (trimestral, anual)',
      'Planes Life of Mine y secuenciamiento estratégico',
      'Optimización de leyes de corte y scheduling',
    ],
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Evaluación integral de la operación y sus oportunidades.',
  },
  {
    number: '02',
    title: 'Análisis',
    description: 'Estudio técnico-económico de alternativas viables.',
  },
  {
    number: '03',
    title: 'Diseño',
    description: 'Desarrollo de soluciones a medida del proyecto.',
  },
  {
    number: '04',
    title: 'Implementación',
    description: 'Acompañamiento técnico durante la ejecución.',
  },
];

export default services;
