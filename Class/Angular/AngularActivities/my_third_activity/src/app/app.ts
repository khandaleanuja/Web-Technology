import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesDemoComponent } from './directives-demo/directives-demo';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [RouterOutlet, DirectivesDemoComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']   
})
export class App {
  protected readonly title = signal('my_third_activity');
}