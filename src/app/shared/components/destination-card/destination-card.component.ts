import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Destination } from '../../../core/interfaces/destination.interface';
import { formatCop } from '../../../core/utils/currency';

/**
 * Tarjeta reutilizable para mostrar un destino turístico.
 */
@Component({
  selector: 'app-destination-card',
  imports: [RouterLink],
  templateUrl: './destination-card.component.html',
  styleUrl: './destination-card.component.scss',
})
export class DestinationCardComponent {
  @Input({ required: true }) destination!: Destination;

  protected readonly formatPrice = formatCop;
}
