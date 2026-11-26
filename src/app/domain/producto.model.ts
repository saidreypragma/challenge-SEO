export interface Producto {
  slug: string;
  nombre: string;
  descripcion: string;
  precio: number;
  moneda: string;
  disponible: boolean;
  imagen?: string;
}
