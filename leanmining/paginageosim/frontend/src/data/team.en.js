export const teamEnById = {
  'luis-zevallos': {
    role: 'Director',
    position: 'Director of Mining Operations and Planning',
    location: 'Arequipa, Peru',
    shortBio:
      'Geological Engineer with an MBA and more than 25 years of experience leading mining operations in Peru, Mexico, and Bolivia.',
    bio:
      'Professional with broad experience in mining project leadership and operations management, specialized in strategic planning, process optimization, and multidisciplinary team management. Expert in financial analysis and operating cost control. He has led operations at companies such as Grupo Mexico, Minera Frisco, First Majestic, Hochschild Mining, and Fortuna Silver.',
    specialties: [
      'Mining Operations Management',
      'Strategic Planning',
      'Cost Control',
      'Project Management',
      'Resources and Reserves',
      'Mine Engineering',
    ],
    education:
      'MBA - Tecnologico de Monterrey, Mexico | Master in Mining Engineering - Universidad de Antofagasta, Chile | Geological Engineer - Universidad Nacional San Agustin de Arequipa',
    certifications: [
      'Diploma in Mine Planning and Design - CAMIPER',
      'MineSight, Datamine, Deswik',
      'Business Management and Finance',
    ],
    highlights: [
      'Regional Planning Manager at Grupo Mexico',
      'Mine Director at Minera Frisco (San Felipe Unit)',
      'Operating cost reductions up to 10% through innovative processes',
      '18% productivity increase through planning strategies',
      'Operations leadership in Peru, Mexico, and Bolivia',
    ],
  },
  'wilber-manrique': {
    role: 'Senior Consultant',
    position: 'Hydrogeology Specialist',
    location: 'Arequipa, Peru',
    shortBio:
      'Geological Engineer specialized in Hydrogeology with more than 20 years of experience in hydrogeological modeling for mining and environmental projects.',
    bio:
      'Geological Engineer specialized in Hydrogeology with broad experience in conceptual and numerical modeling for mining, environmental, and hydro-energy sectors. Expert in pit dewatering planning, groundwater balance, and integrated watershed management. He has led projects in Peru, Colombia, Ecuador, Honduras, El Salvador, Paraguay, and Brazil.',
    specialties: [
      'Hydrogeology',
      'Numerical Modeling',
      'Groundwater Management',
      'Water Balance',
      '3D Geological Modeling',
      'Watershed Management',
    ],
    education:
      'Geological Engineer - Universidad Nacional San Agustin de Arequipa | Hydrogeology Specialization - Universidad Nacional de Asuncion, Paraguay',
    certifications: [
      'Diploma in Smart Water Management - Columbia University',
      'Diploma in Watershed Management',
      'Visual ModFlow Flex, FeFlow, LeapFrog',
      'Python for data analysis',
    ],
    highlights: [
      'Experience at Gold Fields, Xstrata Tintaya, and Milpo',
      'Hydrogeological projects in 7 countries across Latin America',
      'Numerical modeling specialist with ModFlow and FeFlow',
      'Consultant for IDB/JICA on water management projects',
      'Expert in mine dewatering planning and water management',
    ],
  },
  'antonio-gonzalez': {
    role: 'Senior Consultant',
    position: 'Planning and Technical Services Specialist',
    location: 'Arequipa, Peru',
    shortBio:
      'Mining and Metallurgical Engineer with more than 12 years of experience in planning, operations, and technical services in open-pit and underground mines.',
    bio:
      'Mining and Metallurgical Engineer specialized in strategic planning, technical services, and mining operations management. Expert in geomechanics, surveying, and operational control. He has led multidisciplinary teams at First Majestic, Grupo Mexico, Cemex, Trafigura, and Grupo Frisco, achieving major efficiency improvements and cost reductions.',
    specialties: [
      'Mine Planning',
      'Technical Services',
      'Geomechanics',
      'Operational Control',
      'Mine Design',
      'Cost Management',
    ],
    education:
      'Mining and Metallurgical Engineer - Universidad Autonoma del Estado de Hidalgo | Mining Management Specialization - CAMIPER',
    certifications: [
      'Vulcan, Datamine, NPVS Scheduler',
      'SEDENA management (permits and blasting)',
      'KPI and budget control',
    ],
    highlights: [
      'Technical Services Superintendent at First Majestic',
      'Engineering and Planning Superintendent at Grupo Frisco',
      'Production increase from 20,000 to 40,000 t at Cemex Aggregates',
      'Monthly savings of $80,000 MXN through drilling optimization',
      'Experience in open-pit and underground operations in Mexico',
    ],
  },
  'luis-talaverano': {
    role: 'Senior Consultant',
    position: 'Metallurgy and Process Specialist',
    location: 'Arequipa, Peru',
    shortBio:
      'Metallurgical Engineer with more than 15 years of experience in mineral processing plants for gold, copper, and polymetallic ores.',
    bio:
      'Metallurgical Engineer with broad experience in mineral processing plant operations. Specialist in leaching (CIL, CIP, Heap Leaching), flotation, and hydrometallurgy. He has led optimization and continuous improvement projects in world-class operations in Peru, Colombia, Mexico, Argentina, Nicaragua, and Brazil.',
    specialties: [
      'Leaching (CIL, CIP, Heap Leaching)',
      'Flotation',
      'Hydrometallurgy',
      'Process Optimization',
      'Operations Management',
      'Continuous Improvement',
    ],
    education: 'Metallurgical Engineer - Universidad Nacional de Ingenieria (UNI)',
    certifications: [
      'Lean Six Sigma',
      'Project Management',
      'Mining Safety',
    ],
    highlights: [
      'Experience at Newmont, Glencore, Nexa Resources, and Rio Tinto',
      'Processing plant management in Peru, Colombia, Mexico, and Argentina',
      'Optimization projects in Nicaragua and Brazil',
      'Specialist in leaching and flotation circuit optimization',
      'Leadership of multidisciplinary teams in world-class operations',
      'Implementation of continuous improvement and cost reduction programs',
    ],
  },
};

export const applyEnglishTeamProfile = (member, isEnglish) => {
  if (!isEnglish) return member;
  const englishData = teamEnById[member.id];
  if (!englishData) return member;
  return { ...member, ...englishData };
};
