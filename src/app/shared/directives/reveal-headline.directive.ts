import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[revealHeadline]',
  standalone: true,
})
export class RevealHeadlineDirective implements AfterViewInit, OnDestroy {
  private io?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;

    node.classList.add('reveal-h1');

    this.io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          node.classList.add('is-visible');
          this.io?.disconnect();
          this.io = undefined;
        }
      },
      { threshold: 0.4 }
    );

    this.io.observe(node);
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
  }
}