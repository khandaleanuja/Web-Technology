import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../../services/task';
import { CommonModule } from '@angular/common';



@Component({
  // selector: 'app-task-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-detail.html'
})
export class TaskDetailComponent implements OnInit {

  task: any;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    this.task = this.taskService.getTaskById(id);
  }
}