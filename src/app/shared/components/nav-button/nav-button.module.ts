import { NgModule } from '@angular/core';

import { NavButtonComponent } from './nav-button.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavButtonComponent]
})
export class NavButtonModule { 
}
