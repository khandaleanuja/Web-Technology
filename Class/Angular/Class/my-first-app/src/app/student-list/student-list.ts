import { Component } from '@angular/core';
import { StudentService } from '../../services/student-service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-list',
  imports: [CommonModule], 
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
students : any[] = []; //any menas an array of any type

constructor(private StudentService:StudentService){}


//ngOnInit is a lifecycle hook. This method runs automatically when component loads
ngOnInit(){
  this.students = this.StudentService.getStudents();

}


}
