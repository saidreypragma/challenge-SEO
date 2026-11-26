import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SchemasService {
  private readonly SCHEMA_ATTR = 'data-schema';

  constructor(@Inject(DOCUMENT) private document: Document) { }

  applySchemas(schemas: object[]): void {
    this.clearSchemas();

    schemas.forEach(schema => {
      const script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute(this.SCHEMA_ATTR, 'true');
      script.text = JSON.stringify(schema);
      this.document.head.appendChild(script);
    });
  }

  clearSchemas(): void {
    this.document.head
      .querySelectorAll(`script[${this.SCHEMA_ATTR}]`)
      .forEach(script => script.remove());
  }
}