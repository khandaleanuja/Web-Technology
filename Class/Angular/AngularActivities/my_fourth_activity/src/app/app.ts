import { Component } from '@angular/core';
import { ApiUsersComponent } from './api-users/api-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ApiUsersComponent],
  templateUrl: './app.html'
})
export class App {}