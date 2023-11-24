import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  ViewChild,
} from '@angular/core';
import { navData } from './nav-data';
import { Router, RoutesRecognized } from '@angular/router';
import { NavButtonComponent } from '../../nav-button/nav-button.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import gsap from 'gsap';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'pumping-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements AfterViewInit {
  data = navData;
  showNav = false;
  currentPath?: string;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe([Breakpoints.Handset])
    .pipe(
      map((result) => result.matches),
      shareReplay(),
    );

  @ViewChildren(NavButtonComponent) navItems?: QueryList<NavButtonComponent>;
  @ViewChild('indicator', { static: true }) navIndicator!: ElementRef;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  toggleNav() {
    this.showNav = !this.showNav;
    setTimeout(() => {
      this.indicate();
    }, 1);
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe((e) => {
      if (e instanceof RoutesRecognized) {
        this.currentPath = e.state.url.replace('/', '');
        this.indicate();
      }
    });
  }

  private indicate() {
    const item = this.navItems?.find((x) => x.route == this.currentPath);
    gsap.to(this.navIndicator.nativeElement, {
      y: item?.getPosition().top! - 80,
      duration: 0.5,
      ease: 'back.inOut(2)',
    });
  }
}
