/**
 * Representa un destino turístico mostrado en el catálogo.
 */
export interface Destination {
  /** Identificador único del destino. */
  id: string;

  /** Ciudad o región del destino. */
  city: string;

  /** País donde se encuentra el destino. */
  country: string;

  /** Descripción breve para la tarjeta. */
  description: string;

  /** URL de la imagen principal. */
  image: string;

  /** Precio base desde el que se encuentran vuelos. */
  priceFrom: number;

  /** Mejor temporada para viajar. */
  bestSeason: string;

  /** Etiqueta corta que clasifica el destino. */
  tag: string;
}
