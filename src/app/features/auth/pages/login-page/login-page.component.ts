import { Component, OnInit } from '@angular/core';
import { LoginWithGoolgeUseCase } from '../../useCases/login-with-goolge.usecase';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(private login: LoginWithGoolgeUseCase) {}

  ngOnInit(): void {}

  onClick() {
    this.login.execute();
  }
}
