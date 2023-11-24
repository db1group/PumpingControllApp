import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NavigationModule } from './components/navigation/navigation.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PageHeadComponent } from './components/page-head/page-head.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';

const components = [
  NotFoundComponent,
  PageHeadComponent
]

const modules = [
  CommonModule,
  NavigationModule,
  MatTableModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class SharedModule {}
