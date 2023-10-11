import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, ViewChild,} from '@angular/core';
import { navData } from './nav-data';
import { Router, RoutesRecognized } from '@angular/router';
import { NavButtonComponent } from '../../nav-button/nav-button.component';
import gsap from 'gsap';

@Component({
  selector: 'pumping-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements AfterViewInit {
  data = navData;
  currentPath?: string;

  @ViewChildren(NavButtonComponent) navItems?: QueryList<NavButtonComponent>;
  @ViewChild('indicator', { static: true }) navIndicator!: ElementRef;

  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof RoutesRecognized) {
        this.currentPath = e.state.url.replace('/', '');
        const item = this.navItems?.find((x) => x.route == this.currentPath);
        gsap.to(this.navIndicator.nativeElement, {
          y: item?.getPosition().top! - 80,
          duration: 0.5,
          ease: 'back.inOut(2)',
        });
      }
    });
  }
}
