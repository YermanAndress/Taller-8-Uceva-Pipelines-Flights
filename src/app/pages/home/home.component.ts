import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DESTINATIONS } from '../../core/data/destinations.data';
import { FLIGHTS } from '../../core/data/flights.data';
import { formatCop } from '../../core/utils/currency';
import { DestinationCardComponent } from '../../shared/components/destination-card/destination-card.component';

/**
 * Página de bienvenida con un resumen del catálogo de vuelos y destinos.
 */
@Component({
  selector: 'app-home',
  imports: [RouterLink, DestinationCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  protected readonly featuredFlight = FLIGHTS[0];
  protected readonly featuredDestinations = DESTINATIONS.slice(0, 3);
  protected readonly formatPrice = formatCop;

  protected readonly stats = [
    { value: FLIGHTS.length.toString(), label: 'Vuelos disponibles', icon: 'airplane' },
    { value: DESTINATIONS.length.toString(), label: 'Destinos', icon: 'geo-alt' },
    { value: '98%', label: 'Puntualidad', icon: 'clock-history' },
  ];
}
