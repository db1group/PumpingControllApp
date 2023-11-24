import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavButtonModule } from '../nav-button/nav-button.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavigationComponent, SideBarComponent, TopBarComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    NavButtonModule,
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
