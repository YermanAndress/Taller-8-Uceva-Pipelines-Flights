import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FLIGHTS } from '../../core/data/flights.data';
import { FlightStatus } from '../../core/interfaces/flight.interface';
import { formatCop } from '../../core/utils/currency';

type StatusFilter = 'Todos' | FlightStatus;

/**
 * Página con el listado de vuelos y filtros por texto y estado.
 */
@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.scss',
})
export class FlightsComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly flights = FLIGHTS;
  protected readonly search = signal('');
  protected readonly statusFilter = signal<StatusFilter>('Todos');
  protected readonly statuses: StatusFilter[] = ['Todos', 'Disponible', 'Últimos cupos', 'Agotado'];
  protected readonly formatPrice = formatCop;

  protected readonly filteredFlights = computed(() => {
    const term = this.search().trim().toLowerCase();
    const status = this.statusFilter();

    return this.flights.filter((flight) => {
      const matchesTerm =
        !term ||
        [
          flight.code,
          flight.airline,
          flight.origin,
          flight.destination,
          flight.originCode,
          flight.destinationCode,
        ].some((value) => value.toLowerCase().includes(term));

      return matchesTerm && (status === 'Todos' || flight.status === status);
    });
  });

  constructor() {
    const destination = this.route.snapshot.queryParamMap.get('destino');

    if (destination) {
      this.search.set(destination);
    }
  }

  protected updateSearch(event: Event): void {
    this.search.set((event.target as HTMLInputElement).value);
  }

  protected setStatus(status: StatusFilter): void {
    this.statusFilter.set(status);
  }

  protected clearFilters(): void {
    this.search.set('');
    this.statusFilter.set('Todos');
  }
}
