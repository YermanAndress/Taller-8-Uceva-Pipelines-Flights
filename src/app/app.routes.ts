import { Routes } from '@angular/router';

/**
 * Rutas de la aplicación.
 *
 * @remarks
 * Se usan rutas convencionales (sin `#`). La estrategia de ubicación por
 * defecto de Angular es `PathLocationStrategy`, configurada por `provideRouter`.
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    title: 'Inicio | SkyRoute',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'vuelos',
    title: 'Vuelos | SkyRoute',
    loadComponent: () =>
      import('./pages/flights/flights.component').then((m) => m.FlightsComponent),
  },
  {
    path: 'destinos',
    title: 'Destinos | SkyRoute',
    loadComponent: () =>
      import('./pages/destinations/destinations.component').then((m) => m.DestinationsComponent),
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
