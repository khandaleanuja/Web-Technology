import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentCard } from './student-card/student-card';

@Component({
  selector: 'app-root',
  imports: [StudentCard],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-activity-1');
}
