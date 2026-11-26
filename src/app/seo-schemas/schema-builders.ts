import { environment } from '../../environments/environment';
import { Producto } from '../domain/producto.model';

const CONTEXT = 'https://schema.org';

export interface MigaDePan {
  nombre: string;
  ruta: string;
}

export function buildOrganization(): object {
  return {
    '@context': CONTEXT,
    '@type': 'Organization',
    name: 'Tienda de camisetas',
    url: environment.siteUrl,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contacto@example.com',
      telephone: '+57 300 000 0000'
    }
  };
}

export function buildBreadcrumbs(migas: MigaDePan[]): object {
  return {
    '@context': CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: migas.map((miga, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: miga.nombre,
      item: environment.siteUrl + miga.ruta
    }))
  };
}

export function buildProduct(producto: Producto): object {
  return {
    '@context': CONTEXT,
    '@type': 'Product',
    name: producto.nombre,
    description: producto.descripcion,
    ...(producto.imagen ? { image: producto.imagen } : {}),
    offers: {
      '@type': 'Offer',
      url: `${environment.siteUrl}/productos/${producto.slug}`,
      price: producto.precio,
      priceCurrency: producto.moneda,
      availability: producto.disponible
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock'
    }
  };
}
