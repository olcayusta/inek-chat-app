import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appLazyLoadImg]',
})
export class LazyLoadImgDirective implements OnInit {
  @HostBinding('attr.src') src = null;
  imgSrc!: string;

  constructor(private elementRef: ElementRef<HTMLImageElement>) {}

  ngOnInit() {
    this.imgSrc = this.elementRef.nativeElement.src;

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const { isIntersecting, target } = entry;
      const img = target as HTMLImageElement;
      if (isIntersecting) {
        img.src = this.imgSrc;
        intersectionObserver.unobserve(img);
      }
    });

    intersectionObserver.observe(this.elementRef.nativeElement);
  }
}
