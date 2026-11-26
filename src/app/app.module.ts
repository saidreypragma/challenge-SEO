import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoindexDirective } from './seo-config/noindex.directive';
import { HomeComponent } from './presentation/pages/home/home.component';
import { ProductosComponent } from './presentation/pages/productos/productos.component';
import { ProductoDetalleComponent } from './presentation/pages/producto-detalle/producto-detalle.component';
import { ContactoComponent } from './presentation/pages/contacto/contacto.component';
import { CarritoComponent } from './presentation/pages/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NoindexDirective,
    HomeComponent,
    ProductosComponent,
    ProductoDetalleComponent,
    ContactoComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
