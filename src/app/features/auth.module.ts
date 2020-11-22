import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { LogoutPageComponent } from './auth/pages/logout-page/logout-page.component';

@NgModule({
  declarations: [LoginPageComponent, LogoutPageComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
