import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoData } from '../domain/seo-data.model';
import { environment } from '../../environments/environment';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  updateMetaTags(data: SeoData): void {
    this.updateBasicTags(data);
    this.updateOpenGraphTags(data);
    this.updateTwitterTags(data);
    this.setRobotsTags(data);
  }

  private updateBasicTags(data: SeoData): void {
    this.title.setTitle(data.title);

    this.meta.updateTag({ name: 'description', content: data.description });

    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    } else {
      this.meta.removeTag('name="keywords"');
    }
  }

  private updateOpenGraphTags(data: SeoData): void {
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    if (data.image) {
      this.meta.updateTag({ property: 'og:image', content: data.image });
    } else {
      this.meta.removeTag('property="og:image"');
    }
  }

  private updateTwitterTags(data: SeoData): void {
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });

    if (data.image) {
      this.meta.updateTag({ name: 'twitter:image', content: data.image });
    } else {
      this.meta.removeTag('name="twitter:image"');
    }
  }

  private setRobotsTags(data: SeoData): void {
    this.meta.updateTag({
      name: 'robots',
      content: data.noindex ? 'noindex, follow' : 'index, follow'
    });
  }

  public updateCanonical(path: string): void {
    const url = environment.siteUrl + path;

    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

}
