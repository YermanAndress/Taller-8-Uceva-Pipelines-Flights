import { Destination } from '../interfaces/destination.interface';

/**
 * Catálogo de destinos de ejemplo.
 */
export const DESTINATIONS: Destination[] = [
  {
    id: 'cartagena',
    city: 'Cartagena',
    country: 'Colombia',
    description: 'Murallas coloniales, calles llenas de color y atardeceres frente al mar Caribe.',
    image:
      'https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 415000,
    bestSeason: 'Todo el año',
    tag: 'Caribe',
  },
  {
    id: 'san-andres',
    city: 'San Andrés',
    country: 'Colombia',
    description: 'Un paraíso de aguas cristalinas, arrecifes de coral y playas de arena blanca.',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 512000,
    bestSeason: 'Abr – Jul',
    tag: 'Playa',
  },
  {
    id: 'ciudad-de-mexico',
    city: 'Ciudad de México',
    country: 'México',
    description: 'Historia, arquitectura, gastronomía y una vida cultural que no se detiene.',
    image:
      'https://images.unsplash.com/photo-1518659526054-190340b32735?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 2150000,
    bestSeason: 'Mar – May',
    tag: 'Cultura',
  },
  {
    id: 'miami',
    city: 'Miami',
    country: 'Estados Unidos',
    description: 'Playas, compras, deportes y una escena gastronómica con sabor latino.',
    image:
      'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 1890000,
    bestSeason: 'Nov – Abr',
    tag: 'Internacional',
  },
  {
    id: 'madrid',
    city: 'Madrid',
    country: 'España',
    description: 'Museos de clase mundial, tapas, plazas históricas y noches que se alargan.',
    image:
      'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 4780000,
    bestSeason: 'Abr – Jun',
    tag: 'Europa',
  },
  {
    id: 'rio-de-janeiro',
    city: 'Río de Janeiro',
    country: 'Brasil',
    description: 'Playas icónicas, montañas verdes y el ritmo inconfundible de la costa brasileña.',
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80',
    priceFrom: 2950000,
    bestSeason: 'Dic – Mar',
    tag: 'Aventura',
  },
];
