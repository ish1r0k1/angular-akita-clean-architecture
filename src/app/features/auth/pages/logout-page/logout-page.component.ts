import { Component, OnInit } from '@angular/core';
import { LogoutUseCase } from '../../useCases/logout.usecase';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss'],
})
export class LogoutPageComponent implements OnInit {
  constructor(private logout: LogoutUseCase) {}

  ngOnInit(): void {}

  onClick() {
    this.logout.execute();
  }
}
