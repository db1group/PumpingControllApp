import { Component, Input } from '@angular/core';

@Component({
  selector: 'pumping-page-head',
  templateUrl: './page-head.component.html',
  styleUrls: ['./page-head.component.css']
})
export class PageHeadComponent {
  @Input() page!: string;
}
