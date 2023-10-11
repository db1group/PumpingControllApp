import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared.module';
import { NavButtonComponent } from './nav-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavButtonComponent],
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [NavButtonComponent]
})
export class NavButtonModule { 
}
