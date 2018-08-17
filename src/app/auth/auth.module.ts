import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'login',component:LoginPageComponent}]),
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [LoginFormComponent, LoginPageComponent]
})
export class AuthModule { }
