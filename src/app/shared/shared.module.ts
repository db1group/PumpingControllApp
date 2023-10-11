import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

const modules = [
  MatIconModule,
  CommonModule,
  MatToolbarModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [
  ],
  imports: [...modules],
  exports: [...modules],
})
export class SharedModule {}
