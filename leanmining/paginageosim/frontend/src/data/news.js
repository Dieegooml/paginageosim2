// Noticias y eventos de Lean Mining
export const news = [
  {
    id: 1,
    title: 'Lean Mining expande operaciones en el mercado peruano',
    excerpt:
      'Nuestra consultora inicia actividades en Perú, llevando metodología Lean a nuevos proyectos mineros de la región.',
    date: '2025-01-15',
    category: 'Expansión',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    featured: true,
    link: '#',
  },
  {
    id: 2,
    title: 'Participación en PERUMIN 36 - Convención Minera',
    excerpt:
      'Estaremos presentes en la convención minera más importante de Latinoamérica presentando nuestras soluciones.',
    date: '2025-02-20',
    category: 'Evento',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    featured: false,
    link: '#',
  },
  {
    id: 3,
    title: 'Caso de éxito: Optimización en mina subterránea de Chihuahua',
    excerpt:
      'Logramos reducir costos operativos en un 23% mediante la implementación de metodología Lean Mining.',
    date: '2025-01-08',
    category: 'Caso de éxito',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    featured: false,
    link: '#',
  },
  {
    id: 4,
    title: 'Nuevo servicio: Transición de minería a cielo abierto a subterránea',
    excerpt:
      'Ampliamos nuestra oferta con consultoría especializada en transiciones mineras complejas.',
    date: '2024-12-20',
    category: 'Servicios',
    image: 'https://images.unsplash.com/photo-1578319439584-104c94d37305?w=800&q=80',
    featured: false,
    link: '#',
  },
  {
    id: 5,
    title: 'Alianza estratégica con proveedores de tecnología minera',
    excerpt:
      'Firmamos acuerdo de colaboración para integrar soluciones digitales en nuestros proyectos.',
    date: '2024-12-10',
    category: 'Alianzas',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&q=80',
    featured: false,
    link: '#',
  },
];

// Función helper para formatear fechas
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
};

export default news;
