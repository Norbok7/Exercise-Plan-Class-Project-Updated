  import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

  @Directive({ selector: '[appClick]' })


  export class ClickToShow {
    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    @HostBinding('class.show') isOpen = false;

    @HostListener('click') toggleOpen() {
      this.isOpen = !this.isOpen;

      let clickToShoww = this.elRef.nativeElement.querySelector('.listNg');

      if(this.isOpen) {
        this.renderer.addClass(clickToShoww, 'show');
      } else {
        this.renderer.removeClass(clickToShoww, 'show');
      }
    }
  }

