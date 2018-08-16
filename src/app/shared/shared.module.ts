import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule
} from '@angular/material';
@NgModule({
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule

  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class SharedModule { }
