import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavItem {
  label: string;
  url: string;
  icon: string;
}

/**
 * Barra de navegación principal de la aplicación.
 */
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  protected readonly items: NavItem[] = [
    { label: 'Inicio', url: '/inicio', icon: 'house-door-fill' },
    { label: 'Vuelos', url: '/vuelos', icon: 'airplane-fill' },
    { label: 'Destinos', url: '/destinos', icon: 'geo-alt-fill' },
  ];
}
