import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskListComponent } from './components/task-list/task-list';
import { TaskDetailComponent } from './components/task-detail/task-detail';
import { AddTaskComponent } from './components/add-task/add-task';

export const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'detail/:id', component: TaskDetailComponent },
  { path: 'add', component: AddTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}