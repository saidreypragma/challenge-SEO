import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNoindex]'
})
export class NoindexDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.renderer.setAttribute(this.el.nativeElement, 'robots', 'noindex');
  }
}
