import { Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';

export class DefaultBehavior implements OnChanges {
  @Input () active: boolean;
  @ViewChild('icon') iconRef: ElementRef;

  animateActive: false;

  animate(): void {
    const { classList } = this.iconRef.nativeElement;
    classList.add('animate');
    setTimeout(() => {
      classList.remove('animate');
    }, 700);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.iconRef) {
      const { active: { currentValue, previousValue } } = changes;
      const { classList } = this.iconRef.nativeElement;

      if (currentValue && currentValue !== previousValue) {
        classList.add('active');
        this.animate()
      } else {
        classList.remove('active');
      }
    }
  }
}
