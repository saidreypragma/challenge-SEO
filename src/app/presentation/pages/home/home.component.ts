import { Component, OnInit } from '@angular/core';
import { buildOrganization } from 'src/app/seo-schemas/schema-builders';
import { SchemasService } from 'src/app/seo-schemas/schemas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private schemasService: SchemasService) { }
  
  ngOnInit(): void { 
    this.schemasService.applySchemas([buildOrganization()]);
  }
}
