import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives-demo.html',
  styleUrls: ['./directives-demo.css']
})
export class DirectivesDemoComponent {

  // ngIf
  show = true;

  // ngFors
  students = ['Sanjana', 'Aradhya', 'Pramila'];

  // ngClass
  isActive = true;

  // ngStyle
  color = 'blue';

  toggle() {
    this.show = !this.show;
  }
}