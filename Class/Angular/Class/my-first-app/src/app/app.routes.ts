import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { StudentList } from './student-list/student-list';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }   // default route
];

export const route: Routes = [
  { path: 'student-list', component: StudentList }   
];