import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    {name : "Anuja", roll : 1, age : 20},
    {name : "Sakshi", roll : 2, age : 21},
    {name : "Rasika", roll : 3, age : 20},
    {name : "Isha", roll : 4, age: 22},
  ]

  getStudents(){
    return this.students;
  }
}
