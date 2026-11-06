import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DestinationsComponent } from './destinations.component';

describe('DestinationsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationsComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('debería mostrar el catálogo completo de destinos', () => {
    const fixture = TestBed.createComponent(DestinationsComponent);
    fixture.detectChanges();

    const cards = fixture.nativeElement.querySelectorAll('app-destination-card');
    const compiled = fixture.nativeElement as HTMLElement;

    expect(cards.length).toBe(6);
    expect(compiled.textContent).toContain('6 destinos');
  });
});
