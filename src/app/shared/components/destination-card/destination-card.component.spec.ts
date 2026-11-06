import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Destination } from '../../../core/interfaces/destination.interface';
import { DestinationCardComponent } from './destination-card.component';

describe('DestinationCardComponent', () => {
  const destination: Destination = {
    id: 'cartagena',
    city: 'Cartagena',
    country: 'Colombia',
    description: 'Murallas coloniales y playas del Caribe.',
    image: 'https://example.com/cartagena.jpg',
    priceFrom: 415000,
    bestSeason: 'Todo el año',
    tag: 'Caribe',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('debería renderizar la información del destino', () => {
    const fixture = TestBed.createComponent(DestinationCardComponent);
    fixture.componentRef.setInput('destination', destination);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('Cartagena');
    expect(compiled.textContent).toContain('Colombia');
    expect(compiled.textContent).toContain('Caribe');
    expect(compiled.textContent).toContain('415.000');
  });

  it('debería enlazar a vuelos con el destino como filtro', () => {
    const fixture = TestBed.createComponent(DestinationCardComponent);
    fixture.componentRef.setInput('destination', destination);
    fixture.detectChanges();

    const link = fixture.nativeElement.querySelector('a') as HTMLAnchorElement;

    expect(link.getAttribute('href')).toBe('/vuelos?destino=Cartagena');
  });
});
