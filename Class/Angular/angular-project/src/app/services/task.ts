import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [
    { id: 1, title: 'Learn Angular', description: 'Basics of Angular' },
    { id: 2, title: 'Build Project', description: 'Mini project' }
  ];

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: number) {
    return this.tasks.find(t => t.id == id);
  }

  addTask(task: any) {
    this.tasks.push(task);
  }
}