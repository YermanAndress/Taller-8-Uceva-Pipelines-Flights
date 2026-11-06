import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('debería mostrar la marca y las tres opciones de navegación', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const links = Array.from(compiled.querySelectorAll('a')).map((link) =>
      link.textContent?.replace(/\s+/g, ' ').trim(),
    );

    expect(compiled.textContent).toContain('SkyRoute');
    expect(links).toEqual(['SkyRoute', 'Inicio', 'Vuelos', 'Destinos']);
  });

  it('debería enlazar las rutas convencionales de la aplicación', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const hrefs = Array.from(compiled.querySelectorAll('a')).map((link) =>
      link.getAttribute('href'),
    );

    expect(hrefs).toEqual(['/inicio', '/inicio', '/vuelos', '/destinos']);
  });
});
