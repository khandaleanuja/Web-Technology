import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students=[
    {name:"Anuja",age:20,course:"AIML"},
    {name:"Shradhha",age:17,course:"ele"},
    {name:"Ram",age:20,course:"CSE"}  
  ]

  getStudent(){
    return this.students
  }
   addStudent(student: { name: string; age: number; course: string }) {
    this.students.push(student);
  }
}
