import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list';
import { StudentDetailComponent } from './student-detail/student-detail';

export const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'detail/:id', component: StudentDetailComponent }
];