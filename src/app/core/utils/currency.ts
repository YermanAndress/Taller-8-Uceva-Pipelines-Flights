const copFormatter = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
});

/**
 * Formatea un valor numérico como pesos colombianos.
 *
 * @param value Valor en pesos colombianos.
 * @returns Texto con separadores de miles y símbolo de moneda.
 */
export function formatCop(value: number): string {
  return copFormatter.format(value);
}
