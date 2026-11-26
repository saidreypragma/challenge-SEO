import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentation/pages/home/home.component';
import { ProductosComponent } from './presentation/pages/productos/productos.component';
import { ProductoDetalleComponent } from './presentation/pages/producto-detalle/producto-detalle.component';
import { ContactoComponent } from './presentation/pages/contacto/contacto.component';
import { CarritoComponent } from './presentation/pages/carrito/carrito.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { seo: {
      title: 'Camisetas personalizadas | Tienda de camisetas',
      description: 'Camisetas cómodas, con diseños que no ves en todos lados. Elige la tuya y deja de usar esa camiseta gris de hace cinco años.',
      keywords: 'camisetas, camisetas estampadas, camisetas originales, camisetas personalizadas'
    } }
  },
  {
    path: 'productos',
    component: ProductosComponent,
    data: { seo: {
      title: 'Catálogo de camisetas | Tienda de camisetas',
      description: 'Lisas, estampadas, atrevidas o para pasar desapercibido. Mira el catálogo completo y elige la que te dé más ganas de salir de casa.',
      keywords: 'catálogo camisetas, comprar camisetas, camisetas hombre y mujer'
    } }
  },
  {
    path: 'productos/:id',
    component: ProductoDetalleComponent,
    data: { seo: {
      title: 'Camiseta | Tienda de camisetas',
      description: 'Detalles, tallas, colores y precio de esta camiseta. Mírala con calma, que aquí no hay prisa ni cuenta regresiva falsa.'
    } }
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    data: { seo: {
      title: 'Contacto | Tienda de camisetas',
      description: '¿Dudas con la talla, con un pedido o quieres una camiseta personalizada? Escríbenos y te respondemos, nosotros mismos, no un robot.'
    } }
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    data: { seo: {
      title: 'Tu carrito | Tienda de camisetas',
      description: 'Revisa tus camisetas, ajusta cantidades y paga cuando estés listo. Sin letra pequeña ni cargos sorpresa.',
      noindex: true
    } }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
