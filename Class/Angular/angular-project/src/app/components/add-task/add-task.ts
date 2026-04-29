import { Component } from '@angular/core';
import { TaskService } from '../../services/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './add-task.html'
})
export class AddTaskComponent {

  title = '';
  description = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    this.taskService.addTask({
      id: Date.now(),
      title: this.title,
      description: this.description
    });

    this.title = '';
    this.description = '';
  }
}