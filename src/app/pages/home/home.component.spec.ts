import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('debería mostrar el mensaje principal y los accesos rápidos', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('h1')?.textContent).toContain('Tu próximo destino');
    expect(compiled.textContent).toContain('Explorar vuelos');
    expect(compiled.textContent).toContain('Ver destinos');
  });

  it('debería mostrar tres destinos destacados', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('app-destination-card');

    expect(cards.length).toBe(3);
  });
});
