import { Component } from '@angular/core';
import { DESTINATIONS } from '../../core/data/destinations.data';
import { DestinationCardComponent } from '../../shared/components/destination-card/destination-card.component';

/**
 * Página con el catálogo completo de destinos turísticos.
 */
@Component({
  selector: 'app-destinations',
  imports: [DestinationCardComponent],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss',
})
export class DestinationsComponent {
  protected readonly destinations = DESTINATIONS;
}
