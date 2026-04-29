import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students = [
    { id: 1, name: 'Anuja', course: 'CSE AIML' },
    { id: 2, name: 'Rahul', course: 'IT' },
    { id: 3, name: 'Sneha', course: 'CSE' }
  ];

  getStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students.find(s => s.id == id);
  }
}