import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { SharedModule } from '../../shared.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavButtonModule } from '../nav-button/nav-button.module';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [NavigationComponent, SideBarComponent, TopBarComponent],
  imports: [
    SharedModule,
    NavButtonModule,
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
