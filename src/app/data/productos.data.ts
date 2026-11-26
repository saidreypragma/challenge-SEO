import { Producto } from '../domain/producto.model';

export const PRODUCTOS: Producto[] = [
  {
    slug: 'camiseta-negra',
    nombre: 'Camiseta Básica Negra',
    descripcion:
      'Camiseta de algodón 100% peinado, corte regular y cuello redondo. ' +
      'Suave desde el primer uso, no se deforma con los lavados y combina con todo lo que tengas en el armario.',
    precio: 59900,
    moneda: 'COP',
    disponible: true
  }
];

export function getProductoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find(p => p.slug === slug);
}
