import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getProductoPorSlug } from '../../../data/productos.data';
import { Producto } from '../../../domain/producto.model';
import { SchemasService } from 'src/app/seo-schemas/schemas.service';
import { buildBreadcrumbs, buildProduct } from 'src/app/seo-schemas/schema-builders';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto?: Producto;

  constructor(private route: ActivatedRoute, private schemasService: SchemasService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('id');
      this.producto = slug ? getProductoPorSlug(slug) : undefined;

      if (this.producto) {
        this.schemasService.applySchemas([
          buildBreadcrumbs([
            { nombre: 'Inicio', ruta: '/' },
            { nombre: 'Productos', ruta: '/productos' },
            { nombre: this.producto.nombre, ruta: `/productos/${this.producto.slug}` }
          ]),
          buildProduct(this.producto)
        ]);
      }
    });
  }
}
