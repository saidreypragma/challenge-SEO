import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SeoService } from './core/seo.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'seo-app';

  constructor(private router: Router, private seoService: SeoService) { }

  ngOnInit(): void {
    this.listenToRouteChanges();
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

}
