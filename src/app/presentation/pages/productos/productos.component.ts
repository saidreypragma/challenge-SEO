import { Component, OnInit } from '@angular/core';
import { PRODUCTOS } from '../../../data/productos.data';
import { Producto } from '../../../domain/producto.model';
import { SchemasService } from 'src/app/seo-schemas/schemas.service';
import { buildBreadcrumbs } from 'src/app/seo-schemas/schema-builders';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = PRODUCTOS;

  constructor(private schemasService: SchemasService) {}

  ngOnInit(): void {
    this.schemasService.applySchemas([
      buildBreadcrumbs([
        { nombre: 'Inicio', ruta: '/' },
        { nombre: 'Productos', ruta: '/productos' }
      ])
    ]);
  }
}
