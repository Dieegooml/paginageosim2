// Equipo de Lean Mining Consulting
// NOTA: Estructura preparada para recibir CVs y fotos del cliente
// Campos null serán reemplazados con datos reales cuando el cliente los proporcione

export const team = [
  {
    id: 'luis-talaverano',
    name: 'Luis Felipe Talaverano Cárdenas',
    role: 'Consultor Senior',
    position: 'Especialista en Metalurgia y Procesos',
    location: 'Lima, Perú',
    yearsExperience: 15,

    // Biografías
    shortBio: 'Ingeniero Metalúrgico con más de 15 años de experiencia en plantas de procesamiento de minerales de oro, cobre y polimetálicos.',
    bio: 'Ingeniero Metalúrgico con amplia experiencia en operaciones de plantas de procesamiento de minerales. Especialista en lixiviación (CIL, CIP, Heap Leaching), flotación e hidrometalurgia. Ha liderado proyectos de optimización y mejora continua en operaciones de clase mundial en Perú, Nicaragua y Brasil.',

    // Para filtrado y tags
    specialties: [
      'Lixiviación (CIL, CIP, Heap Leaching)',
      'Flotación',
      'Hidrometalurgia',
      'Optimización de Procesos',
      'Gestión de Operaciones',
      'Mejora Continua',
    ],

    // Detalles para modal
    education: 'Ingeniero Metalúrgico - Universidad Nacional de Ingeniería (UNI)',
    certifications: [
      'Lean Six Sigma',
      'Gestión de Proyectos',
      'Seguridad Minera',
    ],
    highlights: [
      'Experiencia en Newmont, Glencore, Nexa Resources y Rio Tinto',
      'Gestión de plantas de procesamiento en Perú, Nicaragua y Brasil',
      'Especialista en optimización de circuitos de lixiviación y flotación',
      'Liderazgo de equipos multidisciplinarios en operaciones de clase mundial',
      'Implementación de programas de mejora continua y reducción de costos',
    ],

    // Contacto y redes
    linkedin: 'https://www.linkedin.com/in/luis-talaverano/',
    email: 'luis.talaverano@lean-miningg.com',
    image: '/images/team/luis-talaverano.jpg',
  },
  {
    id: 'wilber-manrique',
    name: 'Wilber Martín Manrique Valdivia',
    role: 'Consultor Senior',
    position: 'Especialista en Hidrogeología',
    location: 'Lima, Perú',
    yearsExperience: 20,

    // Biografías
    shortBio: 'Ingeniero Geólogo especialista en Hidrogeología con más de 20 años de experiencia en modelamiento hidrogeológico para proyectos mineros y ambientales.',
    bio: 'Ingeniero Geólogo con especialidad en Hidrogeología y amplia experiencia en modelamiento conceptual y numérico para el sector minero, ambiental e hidroenergético. Experto en planificación de desaguado de tajos, balances hídricos subterráneos y gestión integrada de cuencas. Ha liderado proyectos en Perú, Colombia, Ecuador, Honduras, El Salvador, Paraguay y Brasil.',

    // Para filtrado y tags
    specialties: [
      'Hidrogeología',
      'Modelamiento Numérico',
      'Gestión de Aguas Subterráneas',
      'Balance Hídrico',
      'Modelamiento Geológico 3D',
      'Gestión de Cuencas Hidrográficas',
    ],

    // Detalles para modal
    education: 'Ingeniero Geológico - Universidad Nacional San Agustín de Arequipa | Especialización en Hidrogeología - Universidad Nacional de Asunción, Paraguay',
    certifications: [
      'Diplomado en Gestión Inteligente de Agua - Universidad de Columbia',
      'Diplomado en Gestión de Cuencas Hidrográficas',
      'Visual ModFlow Flex, FeFlow, LeapFrog',
      'Python para análisis de datos',
    ],
    highlights: [
      'Experiencia en Gold Fields, Xstrata Tintaya y Milpo',
      'Proyectos hidrogeológicos en 7 países de Latinoamérica',
      'Especialista en modelamiento numérico con ModFlow y FeFlow',
      'Consultor para BID/JICA en proyectos de gestión hídrica',
      'Experto en planificación de desaguado y manejo de aguas en minería',
    ],

    // Contacto y redes
    linkedin: 'https://www.linkedin.com/in/wilber-martinmanrique-valdivia-342a5168',
    email: 'wilber.manrique@lean-miningg.com',
    image: '/images/team/wilber-manrique.jpg',
  },
  {
    id: 'luis-zevallos',
    name: 'Luis Enrique Zevallos Paredes',
    role: 'Director',
    position: 'Director de Operaciones y Planeamiento Minero',
    location: 'Chihuahua, México',
    yearsExperience: 25,

    // Biografías
    shortBio: 'Ingeniero Geólogo con MBA y más de 25 años de experiencia en dirección y gerencia de operaciones mineras en Perú, México y Bolivia.',
    bio: 'Profesional con amplia experiencia en dirección y gerencia de proyectos mineros, especializado en planeamiento estratégico, optimización de procesos y gestión de equipos multidisciplinarios. Experto en análisis financiero y control de costos operativos. Ha liderado operaciones en empresas como Grupo México, Minera Frisco, First Majestic, Hochschild Mining y Fortuna Silver.',

    // Para filtrado y tags
    specialties: [
      'Dirección de Operaciones Mineras',
      'Planeamiento Estratégico',
      'Control de Costos',
      'Gestión de Proyectos',
      'Recursos y Reservas',
      'Ingeniería de Minas',
    ],

    // Detalles para modal
    education: 'MBA - Tecnológico de Monterrey, México | Maestría en Ingeniería de Minas - Universidad de Antofagasta, Chile | Ingeniero Geólogo - Universidad Nacional San Agustín de Arequipa',
    certifications: [
      'Diplomado en Planeamiento y Diseño de Minas - CAMIPER',
      'MineSight, Datamine, Deswik',
      'Gestión Empresarial y Finanzas',
    ],
    highlights: [
      'Gerente Regional de Planeación en Grupo México',
      'Director de Mina en Minera Frisco (Unidad San Felipe)',
      'Reducción de costos operativos hasta 10% mediante procesos innovadores',
      'Incremento de productividad minera en 18% con estrategias de planeación',
      'Liderazgo de operaciones en Perú, México y Bolivia',
    ],

    // Contacto y redes
    linkedin: 'https://www.linkedin.com/in/luisenrique-zevallos-paredes/',
    email: 'luis.zevallos@lean-miningg.com',
    image: '/images/team/luis-zevallos.jpg',
  },
  {
    id: 'antonio-gonzalez',
    name: 'Antonio González Reyes',
    role: 'Consultor Senior',
    position: 'Especialista en Planeamiento y Servicios Técnicos',
    location: 'Hidalgo, México',
    yearsExperience: 12,

    // Biografías
    shortBio: 'Ingeniero Minero-Metalúrgico con más de 12 años de experiencia en planeación, operaciones y servicios técnicos en minas a cielo abierto y subterráneas.',
    bio: 'Ingeniero Minero-Metalúrgico especializado en planeación estratégica, servicios técnicos y administración de operaciones mineras. Experto en geomecánica, topografía y control operativo. Ha liderado equipos multidisciplinarios en empresas como First Majestic, Grupo México, Cemex, Trafigura y Grupo Frisco, logrando mejoras significativas en eficiencia y reducción de costos.',

    // Para filtrado y tags
    specialties: [
      'Planeación Minera',
      'Servicios Técnicos',
      'Geomecánica',
      'Control Operativo',
      'Diseño de Minas',
      'Gestión de Costos',
    ],

    // Detalles para modal
    education: 'Ingeniero Minero-Metalúrgico - Universidad Autónoma del Estado de Hidalgo | Especialidad en Gestión Minera - CAMIPER',
    certifications: [
      'Vulcan, Datamine, NPVS Scheduler',
      'Gestión SEDENA (permisos y voladuras)',
      'Control de KPIs y presupuestos',
    ],
    highlights: [
      'Superintendente de Servicios Técnicos en First Majestic',
      'Superintendente de Ingeniería y Planeación en Grupo Frisco',
      'Incremento de producción de 20,000 a 40,000 t en Cemex Agregados',
      'Ahorro mensual de $80,000 MXN mediante optimización de barrenación',
      'Experiencia en operaciones de cielo abierto y subterráneas en México',
    ],

    // Contacto y redes
    linkedin: null,
    email: 'antonio.gonzales@lean-miningg.com',
    image: '/images/team/antonio-gonzalez.jpg',
  },
];

// Información de la sección
export const teamIntro = {
  title: 'Nuestro Equipo',
  subtitle:
    'Profesionales con amplia experiencia en el sector minero, comprometidos con la excelencia y la mejora continua de cada proyecto.',
};

// Extraer todas las especialidades únicas para los filtros
export const getAllSpecialties = () => {
  const allSpecialties = team.flatMap((member) => member.specialties);
  return [...new Set(allSpecialties)].sort();
};

// Filtrar equipo por búsqueda y especialidades
export const filterTeam = (searchTerm = '', activeSpecialties = []) => {
  return team.filter((member) => {
    // Búsqueda por nombre, rol, position o especialidades
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      (member.name && member.name.toLowerCase().includes(searchLower)) ||
      member.role.toLowerCase().includes(searchLower) ||
      member.position.toLowerCase().includes(searchLower) ||
      member.specialties.some((s) => s.toLowerCase().includes(searchLower));

    // Filtro por especialidades seleccionadas
    const matchesSpecialties =
      activeSpecialties.length === 0 ||
      activeSpecialties.some((specialty) =>
        member.specialties.includes(specialty)
      );

    return matchesSearch && matchesSpecialties;
  });
};

// Helper para verificar si un miembro tiene datos completos
export const isMemberComplete = (member) => {
  return member.name && member.bio && member.image;
};

export default team;
