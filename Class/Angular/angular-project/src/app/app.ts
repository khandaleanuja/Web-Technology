import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="container">

      <h1>Task Manager</h1>

      <nav>
        <a routerLink="/">Tasks</a>
        <a routerLink="/add">Add Task</a>
      </nav>

      <hr>

      <router-outlet></router-outlet>

    </div>
  `
})
export class AppComponent {}