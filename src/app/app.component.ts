import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { SeoService } from './core/seo.service';
import { filter } from 'rxjs/operators';
import { SchemasService } from './seo-schemas/schemas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'seo-app';

  constructor(private router: Router,
    private seoService: SeoService,
    private schemasService: SchemasService
  ) { }

  ngOnInit(): void {
    this.listenToRouteChanges();
    this.clearSchemasOnNavigation();
  }

  private listenToRouteChanges(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let route = this.router.routerState.snapshot.root;
        while (route.firstChild) {
          route = route.firstChild;
        }

        const seo = route.data['seo'];

        if (seo) {
          this.seoService.updateMetaTags(seo);
        }

        const path = this.router.url.split('?')[0];
        this.seoService.updateCanonical(path);
      });
  }

  private clearSchemasOnNavigation(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => this.schemasService.clearSchemas());
  }

}
