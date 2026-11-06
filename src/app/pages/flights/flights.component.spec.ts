import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { FlightsComponent } from './flights.component';

describe('FlightsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightsComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('debería mostrar el listado completo de vuelos', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');

    expect(rows.length).toBe(8);
  });

  it('debería filtrar por ciudad de destino', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#flight-search') as HTMLInputElement;
    input.value = 'Cartagena';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');

    expect(rows.length).toBe(1);
    expect(rows[0].textContent).toContain('Cartagena');
  });

  it('debería filtrar por estado agotado', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    fixture.detectChanges();

    const buttons = Array.from(
      fixture.nativeElement.querySelectorAll('.status-filter'),
    ) as HTMLButtonElement[];
    const agotadoButton = buttons.find((button) => button.textContent?.trim() === 'Agotado');

    agotadoButton?.click();
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');

    expect(rows.length).toBe(1);
    expect(rows[0].textContent).toContain('IB6584');
  });

  it('debería mostrar un estado vacío y permitir limpiar los filtros', () => {
    const fixture = TestBed.createComponent(FlightsComponent);
    fixture.detectChanges();

    const input = fixture.nativeElement.querySelector('#flight-search') as HTMLInputElement;
    input.value = 'Ciudad inexistente';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const emptyState = fixture.nativeElement.querySelector('.empty-state') as HTMLElement;
    expect(emptyState.textContent).toContain('No encontramos vuelos');

    const clearButton = emptyState.querySelector('button') as HTMLButtonElement;
    clearButton.click();
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(8);
  });
});
