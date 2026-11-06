/**
 * Estado comercial de un vuelo dentro del catálogo.
 */
export type FlightStatus = 'Disponible' | 'Últimos cupos' | 'Agotado';

/**
 * Representa un vuelo listo para mostrarse en la interfaz.
 *
 * @remarks
 * Los datos son de ejemplo y viven en el frontend para que el pipeline
 * de integración continua no dependa de servicios externos.
 */
export interface Flight {
  /** Identificador único del vuelo. */
  id: string;

  /** Código comercial del vuelo, por ejemplo `AV9521`. */
  code: string;

  /** Aerolínea que opera el vuelo. */
  airline: string;

  /** Ciudad de origen. */
  origin: string;

  /** Código IATA del aeropuerto de origen. */
  originCode: string;

  /** Ciudad de destino. */
  destination: string;

  /** Código IATA del aeropuerto de destino. */
  destinationCode: string;

  /** Fecha de salida en formato legible. */
  departureDate: string;

  /** Hora de salida en formato de 24 horas. */
  departureTime: string;

  /** Duración estimada del trayecto. */
  duration: string;

  /** Precio base en pesos colombianos. */
  price: number;

  /** Disponibilidad actual del vuelo. */
  status: FlightStatus;
}
