import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './task-list.html'
})
export class TaskListComponent implements OnInit {

  tasks: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}