import { Directive, ElementRef, HostListener } from '@angular/core';
import { Input } from '@angular/core';
@Directive({
  selector: '[myMouseenter]',
})
export class MouseenterDirective {
  constructor(private el: ElementRef) {}
@Input() myMouseenter = '';
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundImage = 'https://fitover40challenge.com/wp-content/uploads/2016/05/Inspirational-Quotes-From-Olympians-Gabby-Douglas-Michael-Phelps-550x330.jpg';
  }
}
