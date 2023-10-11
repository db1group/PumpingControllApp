import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'pumping-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css']
})
export class NavButtonComponent {
  @Input() iconClass!: string;
  @Input() route!: string;
  @Input() label?: string;

  constructor(private elementRef: ElementRef) {}

  getPosition() {
    const button: HTMLElement = this.elementRef.nativeElement;
    return button.getBoundingClientRect();
  }
}
