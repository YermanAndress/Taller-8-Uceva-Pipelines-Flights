import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { routes } from './app.routes';

describe('rutas de la aplicación', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });
  });

  it('debería usar PathLocationStrategy, sin el carácter #', () => {
    const locationStrategy = TestBed.inject(LocationStrategy);

    expect(locationStrategy).toBeInstanceOf(PathLocationStrategy);
  });

  it('debería redirigir la ruta raíz a inicio', () => {
    const router = TestBed.inject(Router);
    const rootRoute = router.config.find((route) => route.path === '');

    expect(rootRoute?.redirectTo).toBe('inicio');
    expect(rootRoute?.pathMatch).toBe('full');
  });

  it('debería definir las tres vistas principales', () => {
    const router = TestBed.inject(Router);
    const paths = router.config.map((route) => route.path);

    expect(paths).toContain('inicio');
    expect(paths).toContain('vuelos');
    expect(paths).toContain('destinos');
  });
});
